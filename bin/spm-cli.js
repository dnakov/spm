#!/usr/bin/env node
program = require("commander")
spm = require('../methods.js')
  fs = require('fs')
  readdirp = require('readdirp')
  JSZip = require('jszip')
  path = require('path')
	// program
	// 	.option('-m, --manual', 'true')
  //    .option('--printPackageXml, --printPackageXml', 'true')
  //    .option('--checkOnly, --checkOnly', 'true')
  //    .option('--ignoreWarnings, --ignoreWarnings', 'true')
  //    .option('--performRetrieve, --performRetrieve', 'true')
  //    .option('--purgeOnDelete, --purgeOnDelete', 'true')
  //    .option('--rollbackOnError, --rollbackOnError', 'true')
  //    .option('--runAllTests, --runAllTests', 'true')
  //    .option('--runTests, --runTests', 'true')
  //    .option('--singlePackage, --singlePackage', 'true')
  //    .option('--allowMissingFiles, --allowMissingFiles', 'true')
  //    .option('--autoUpdatePackage, --autoUpdatePackage', 'true')
  //    .option('--runPackagedTestsOnly, --runPackagedTestsOnly', 'true')
  //    .option('--useDefaultMetadata, --useDefaultMetadata', 'true')
  //    .option('--usePackageXml, --usePackageXml [usePackageXml]', 'true')
  //    .option('--apiVersion, --apiVersion [apiVersion]', 'true', '33.0')
  //    .option('-u, --username [username]', 'true', '')
  //    .option('-p, --password [password]', 'true', '')
  //    .option('-url, --loginUrl [loginUrl]', 'true', 'https://login.salesforce.com')
  //    .option('-f, --filter [value]', 'true')	

  program
    .command('sflogin')    
    .description('login to salesforce')
    .option('-m, --manual', 'no prompts, expects options to be passed in')
    .option('--apiVersion, --apiVersion [apiVersion]', 'api version', '33.0')
    .option('-u, --username [username]', 'username', '')
    .option('-p, --password [password]', 'password', '')
    .option('-url, --endpointUrl [endpointUrl]', 'login url', 'https://login.salesforce.com')
    .action(function(options) {
    	  spm.login(options, function(er, conn) {
    		if(er != null) process.exit(1)
    	})
    })

  
  program    
    .command('deploy')
    .description('asks for what to deploy, where and then deploys')
    .option('--printPackageXml, --printPackageXml', 'generates a package.xml from existing folders')
    .option('--checkOnly, --checkOnly', 'read sf docs')
    .option('--ignoreWarnings, --ignoreWarnings', 'read sf docs')
    .option('--performRetrieve, --performRetrieve', 'read sf docs')
    .option('--purgeOnDelete, --purgeOnDelete', 'read sf docs')
    .option('--rollbackOnError, --rollbackOnError', 'read sf docs')
    .option('--runAllTests, --runAllTests', 'read sf docs')
    .option('--testLevel, --testLevel [testLevel]', 'read sf docs')
    .option('--runTests, --runTests [runTests]', 'read sf docs', list)
    .option('--no-singlePackage, --no-singlePackage', 'read sf docs')
    .option('--allowMissingFiles, --allowMissingFiles', 'read sf docs')
    .option('--autoUpdatePackage, --autoUpdatePackage', 'read sf docs')
    .option('--runPackagedTestsOnly, --runPackagedTestsOnly', 'read sf docs')
    .option('--useDefaultMetadata, --useDefaultMetadata', 'doesnt ask the server for metadata')
    .option('--usePackageXml, --usePackageXml [usePackageXml]', 'specify existing package.xml file [usePackageXml]')
    .option('--apiVersion, --apiVersion [apiVersion]', 'api version', '33.0')
    .option('--xslt, --xslt [xslt]', '(POSIX only) xslts to apply: <file_pattern>:<path_to_xslt>', mapSpace)
    .option('--xsltParams, --xsltParams [xsltParams]', '(POSIX only) parameters for the xstl sheet', mapSpace)
    .option('-u, --username <username>', 'username', '')
    .option('-p, --password <password>', 'password', '')
    .option('-e, --endpointUrl <endpointUrl>', 'login url', 'https://login.salesforce.com')
    .option('-f, --filter [value]', 'regex filter for files to deploy', listSpace)
    .option('-r, --root <root>', 'regex filter for files to deploy')
    .option('-F, --files [files]', 'files to deploy', list)
    .option('--fullLog', '--fullLog', 'output the complete deployment log')
    .option('--checkInterval, --checkInterval <checkInterval>', 'deploy check interval', 2000)
    .action(function(op) {
      
      var options = getOptions(op)
      var statusInterval
      
      if(options.runAllTests && options.testLevel == null) options.testLevel = 'RunLocalTests'
      if(options.xslt) {        
        Object.keys(options.xslt).map(function(x) {
          var v = options.xslt[x]
          options.xslt[x] = fs.readFileSync(path.resolve(v), 'utf-8')
        })
      }

      zipLocalFiles(options.files, options.root, options.filter, function(er, z) {
        if(er) return xit(er);
        
        spm.login(options, function(er, conn) {
          if(er) return xit(er);
          options.endpointUrl = conn.result.metadataServerUrl
          options.sessionId = conn.result.sessionId
          spm.transform({ xslt: options.xslt, root: options.root }, z, function(er, zip) {
            if(er) return xit(er);
            if(options.usePackageXml) {
              options.options = options;
              return deploy(options, zip)
            } else {
            
              spm.describeMetadata(options, function(er, r) {
                if(er) return xit(er);
                spm.transform({ xslt: options.xsltMap, xsltParams: options.xsltParams, root: options.root, metadataObjects: r.result.metadataObjects, apiVersion: options.apiVersion, printPackageXml: options.printPackageXml}, z, function(er, zip) {
                  if(er) return xit(er);
                  options.options = options;
                  console.log(zip)
                  deploy(options, zip)
                  
                })
                
              })
            }
            
          })
          
        })
      })
      
    })


function deploy(options, zip) {
  console.log('Deploying...')
  spm.deploy(options, zip.toString('base64'), function(er, res) {
    if(er) return xit(er);
    statusInterval = setInterval(function() {
      spm.checkDeployStatus({sessionId: options.sessionId, endpointUrl: options.endpointUrl, options: { checkAsyncStatus: res.result.id, includeDetails: true }}, function(er, r) {
        if(er || r.result.done === 'true') clearTimeout(statusInterval);
        if(er) return xit(er);
        if(r.result.done === 'true') {
          if(r.result.success === 'false') {
            r.result.details.componentFailures && Array.prototype.concat.call([],r.result.details.componentFailures).map(function(e) {
              console.log(e.fullName + ': ' + e.problem)
            })
            r.result.details.runTestResult && r.result.details.runTestResult.failures && Array.prototype.concat.call([],r.result.details.runTestResult.failures).map(function(f) {
              console.log(f.name + '.' + f.methodName + ': ' + f.message)
              console.log(f.stackTrace)
            })
          } else if(r.result.success === 'true') {
            console.log('Success!')
          }
          
          if(options.fullLog) console.log(JSON.stringify(r.result, null, 2))
          process.exit(r.result.success !== 'true')
        }
      })
    }, options.checkInterval)
    
  })
  
}
  program
    .command('retrieve')    
    .description('retrieve metadata')
    .option('--apiVersion, --apiVersion [apiVersion]', 'api version', '33.0')
    .option('-u, --username [username]', 'username', '')
    .option('-p, --password [password]', 'password', '')
  .option('-url, --endpointUrl [endpointUrl]', 'login url', 'https://login.salesforce.com')
  .option('--specificFiles, --specificFiles [specificFiles]', 'read sf docs', list)
  .option('-m, --metadataObjects [metadataObjects]', 'read sf docs', listSpace)
  .option('-F --files [files]', 'refresh local file')
    .option('-O --outputZip [outputZip]', 'zip file name for output')
  .option('-P --packageNames [packageNames]', 'package names')
  .option('--no-singlePackage, --no-singlePackage', 'read sf docs')
  .option('--checkInterval, --checkInterval <checkInterval>', 'deploy check interval', 2000)
  .action(function(op) {
    var options = getOptions(op)
    var statusInterval

    spm.login(options, function(er, conn) {
      if(er) return xit(er)
      options.endpointUrl = conn.result.metadataServerUrl
      options.sessionId = conn.result.sessionId
      /* spm.describeMetadata(options, function(e, m) {
       console.log(m.result.metadataObjects);
       var mobs = []
       m.result.metadataObjects.map(function(mm) {
       mobs.push({type:mm.xmlName})
       })
       spm.listMetadata({apiVersion: options.apiVersion, endpointUrl: options.endpointUrl, sessionId: options.sessionId, options: { asOfVersion: options.apiVersion, queries:mobs } }, function(er, res) {
       console.log(er)
       })
       }) */

      var mobs = []
      options.metadataObjects && options.metadataObjects.map(function(m) {
        var mm = m.split(':')
        var m2
        if(mm.length > 1) m2 = mm[1]
        m2 = m2 && m2.split(',')
        mobs.push({name: mm[0], members: m2 || ['*']})
        options.options = { /*specificFiles: options.specificFiles,*/ singlePackage: options.singlePackage, unpackaged:{types:mobs, version: options.apiVersion}  }
      })
      if(!options.options) {
        options.options = { singlePackage: options.singlePackage, packageNames:options.packageNames, apiVersion: options.apiVersion }
      }
      spm.retrieve(options, function(er, res) {
        if(er != null) process.exit(1)
              statusInterval = setInterval(function() {
          spm.checkRetrieveStatus({sessionId: options.sessionId, endpointUrl: options.endpointUrl, options: { asyncProcessId: res.result.id, includeZip: true }}, function(er, r) {
            if(er || r.result.done === 'true') clearTimeout(statusInterval);
            if(er) return xit(er)
            if(r.result.done === 'true') {
              var zip = new JSZip();
              zip.load(new Buffer(r.result.zipFile, 'base64'))
              delete r.result.zipFile
              Object.keys(zip.files).map(function(k) {
                f = zip.files[k]
              })
              if(options.outputZip) {
                fs.writeFileSync(options.outputZip, zip.generate({type:'nodebuffer'}))
              } else {
                console.log(f.asText())
              }
            }
          })
        }, op.checkInterval || 2000)
      })
  
    })
  })

  // .action(function(cmd, options) {
  // 	spm.commands.deploy(options)
  // })
  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }

program.parse(process.argv);

function getOptions(op) {
  var options = op.opts();
  console.log(options.files)
  if(options.files && options.files.length > 0) {
    var p = path.resolve(options.files[0], '');
    options.root = path.resolve(options.root || 'src') + '/'//p.split(path.sep + (options.root || 'src') + path.sep )[0] + path.sep + (options.root || 'src') + path.sep;
    options.files = options.files.filter(function(f) { return f.length > 0 }).map(function(fPath) {
      return path.resolve(fPath, '');
    })
  } else {
    options.files = null
  }

  if(!options.username || !options.password) {
    var sfEnv = JSON.parse(fs.readFileSync(path.resolve(options.root, '../.sf')));
    options.username = sfEnv.username;
    options.password = sfEnv.password;
    options.endpointUrl = sfEnv.endpointUrl;
    options.apiVersion = options.apiVersion || sfEnv.apiVersion;
  }

  return options
}

function zipLocalFiles(files, root, fileFilter, callback) {
  var zip = new JSZip()
  if(files) {
    files.map( function(singleFile) {
      if(fs.existsSync(singleFile + '-meta.xml')) zip.file((singleFile + '-meta.xml').replace(root, ''), fs.readFileSync(singleFile + '-meta.xml'));
      zip.file(singleFile.replace(root, ''), fs.readFileSync(singleFile));
    })

    return callback(null, zip);
  }
    readdirp({ root: root, fileFilter: fileFilter }, function(fileInfo) {
        // jszip wants posix path
        zip.file(fileInfo.path.split(path.sep).join('/'), fs.readFileSync(fileInfo.fullPath));
    }, function() {
      callback(null,zip.generate({type: 'nodebuffer'}))
    })
}
function xit(er) {
  console.log(er)
  return process.exit(1)
}

function list(val) {
  return val.split(',')
}
function mapSpace(val) {
  
  var v = {}
  val.split(' ').map(function(vv) {
    var km = vv.split(':')
    v[km[0]] = km[1]
  })
  return v
}
function listSpace(val) {
  return val.split(' ')
}
