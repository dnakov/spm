var JSZip = require('jszip')
var uuid = require('./uuid.js')
var Entities = require('html-entities').XmlEntities;
var entities = new Entities();
var fs = require('fs')
var assign = require('object-assign')
var exec = require('child_process').exec
var toXML = require('./toXML')

function processXSLTForFile(xslt, f) {
	return new Promise(function(resolve, reject) {
		var tmpFileName = '/tmp/' + uuid()
		fs.writeFile(tmpFileName, f.asNodeBuffer(), function() {
			exec('xsltproc -o ' + tmpFileName + ' ' + xslt + ' ' + tmpFileName, function(err, stdout, stderr) {
				fs.readFile(tmpFileName, function(er, file) {
					var obj = {
						name: f.name,
						file: file
					}
					resolve(obj)
				})
			})

		})
	})
}

function processXSLTForFiles(x4f) {
	// return readdir('/tmp/' + id, [match], function(err, files) {
		var promises = [];
		Object.keys(x4f).map(function(x) {
			x4f[x].map(function(f) {
				promises.push(processXSLTForFile(x, f))
			})
		})

		return Promise.all(promises)
	// })
}


function saveXSLTFile(dir, xsltMap, key) {
	return new Promise(function(resolve, reject) {
		var dir = '/tmp/' + dir + '-xslt';
		var pth = dir + '/' + uuid() + '.xslt'

		fs.mkdir(dir, function(er, res) {

			fs.writeFile(pth, entities.decode(xsltMap[key]), function() {
				console.log('Saved XSLT for ' + key)
				var obj = {}
				obj[key] = pth
				resolve(obj)
			})
		})	
	})
}
module.exports = {}

function removeRoot(zipBuffer, root) {
	var convert = false
	var zip = getjz(zipBuffer)
	convert = zip != zipBuffer

	if(root) {
		root = root.substring(root.length - 1) === '/' ? root : root + '/'

		var folders = zip.folder(new RegExp(root + '$'))
		var max = 999
		var root2
		folders.map(function(fo) {
			if(fo.name.split('/').filter(function(el) { return el.length > 0}).length < max) {
				max = fo.name.split('/').length
				root2 = fo.name
			}
		})
		root = root2
	} else {
		root = zip.file(/package\.xml/).length > 0 && zip.file(/package\.xml/)[0].name.replace('package.xml', '')
	}
//	console.log('found ' + Object.keys(zip.files).length + ' files')
	root && Object.keys(zip.files).map(function(key) {
		if(root.indexOf(key) === 0) delete zip.files[key]

		if(key.indexOf(root) === 0) {
			var newKey = key.replace(root, '')
			if(newKey.length > 0) {
				zip.files[newKey] = zip.files[key]
				zip.files[newKey].name = newKey
			}
		}
		if(newKey != key) delete zip.files[key]
	})
	
//	console.log(Object.keys(zip.files))
//	console.log('ended up with ' + Object.keys(zip.files).length + ' files')
	if(convert) return zip.generate({type: 'nodebuffer'})

	return zip
}

function getjz(zipBuffer) {

	zipBuffer = typeof zipBuffer === 'string' ? new Buffer(zf, 'base64') : zipBuffer
	if(!zipBuffer.files) return new JSZip(zipBuffer)
	return zipBuffer
}
module.exports.generatePackageXml = generatePackageXml

function generatePackageXml(zipBuffer, metadataObjects, opts) {
	var jz = getjz(zipBuffer)
	if(opts && opts.root !== false) jz = removeRoot(jz, opts.root)
	jz = removeRoot(jz, opts.root)
	var meta = {}

	metadataObjects.map(function(m) {
	    meta[m.directoryName] = m
	})

	var pkg = {}

	Object.keys(jz.files).filter(function(f) {
	  return f.lastIndexOf('/') !== -1 && f.indexOf('-meta.xml') === -1
	}).map(function(f) {
    var arr = f.split('/')
    var dir = arr.shift()
    var file = arr.join('/')
    var m = meta[dir]
    if(!m) return
    pkg[m.xmlName] = pkg[m.xmlName] || []
    pkg[m.xmlName].push(file.replace('.' + m.suffix, ''))
	})

	var packageXml = {
		Package: {
			'@xmlns':'http://soap.sforce.com/2006/04/metadata',
			types: [],
			version: opts.apiVersion
		}
	}

	Object.keys(pkg).map(function(p) {
		packageXml.Package.types.push({
			name: p,
			members: pkg[p]
		})
	})
	return '<?xml version="1.0" encoding="UTF-8"?>' + toXML(packageXml)
}

module.exports.transform = function(opts, zipBuffer, cb) {
	
	if(opts === false) return cb(null, zipBuffer)
	
	var zip = getjz(zipBuffer)

	if(opts.root !== false) zip = removeRoot(zip, opts.root)

	if(opts.metadataObjects) {
			var pkgxml = generatePackageXml(zipBuffer, opts.metadataObjects, opts)
			zip.file('package.xml', pkgxml)
	}

	if(opts.xslt) {
		processXSLT(zip, opts.xslt, function(er, z) {
			if(er) return cb(er)
			return cb(null, z.generate({type: 'nodebuffer'}))
		})
	} 
	return cb(null, zip.generate({type: 'nodebuffer'}))
}

module.exports.getjz = getjz

function processXSLT(zipBuffer, xsltMap, cb) {
	var xslts = {}
	var matches = Object.keys(xsltMap) || []
	console.log('Processing XSLTs')
	var zip = getjz(zipBuffer)
	// fs.writeFile('/tmp/' + id + '.zip', zipBuffer, function(err) {
	var i = 0

	Promise.all(Object.keys(xsltMap).map(saveXSLTFile.bind(null, uuid(), xsltMap)))
	.then(function(values) {
		values.map(function(obj) {
			xslts = assign(xslts, obj)
		})

		console.log('Unzipping metadata...')
		
		var xsltForFiles = {}
		matches.map(function(reg) {
			xsltForFiles[xslts[reg]] = zip.file(new RegExp(reg))
		})

		processXSLTForFiles(xsltForFiles).then(function(values) {
			values.map(function(obj) {
				zip.file(obj.name, obj.file)
			})
			return cb(null, zip)
		})
	})
}
