var fmeta = require('./invoke.js')
var sf = require('./methods.js')
var xslt = require('./xslt.js')
var fs = require('fs')

function retrieve() {
	var options = {
		  "sessionId": "00DK000000XN1I3!ARcAQBUNXPwtoes5AT2mwO9toJpeGQofWUZ2xc995Uwrkqo0QMt8bjap4axRaQ5BMoA5Yyux1u9AJI5ecTfI6sBZgEwT53Gk",
		  "endpointUrl": "https://preventure--daniel.cs9.my.salesforce.com/services/Soap/m/36.0/00DK000000XN1I3",
		  "apiVersion": "35.0",
		  "methodName": "retrieve",
		  "retrieve": {
		    "retrieveRequest": {
		      "apiVersion": "35.0",
		      "packageNames": "test2",
		      "singlePackage": true
		    }
		  }
		}

	var a = fmeta(options, function(er, result) {
		options.checkRetrieveStatus = {
			checkRetrieveStatus: result.result.id,
			includeZip: true
		}
		options.methodName = 'checkRetrieveStatus'

		checkRetrieveStatus(options, function(er, res) {
			console.log(arguments)
		})
	})
}
function checkRetrieveStatus(options, cb) {
	cb
	function cb1(er, res) {
		cb
		if(er) return cb(er)
		if(res.result.done != 'true') return setTimeout(function() { checkRetrieveStatus(options, cb) }, 1000)

		return cb(null, res)
	}
	fmeta(options, cb1)
}

function deploy() {
	sf.deploy(    {
      "sessionId": "00DK000000XN1I3!ARcAQAQVLHd.D_lqKV2WC7V9r_v3dW6VGiCIfhRCR4s3QN3hrcD3T4jhtrAtW0Ex39Q5oej50gtmjSbZ.eOJAFRpaU61Q_pf",
      "endpointUrl": "https://preventure--daniel.cs9.my.salesforce.com",
      "apiVersion": "36.0",
      "options": {
        "allowMissingFiles": false,
        "autoUpdatePackage": false,
        "checkOnly": true,
        "ignoreWarnings": false,
        "performRetrieve": false,
        "purgeOnDelete": false,
        "rollbackOnError": true,
        "singlePackage": true
      }
    }, 'asdasd', function() {console.log(arguments)})	
}

function xsltParse() {
	fs.readFile('/Users/daniel/Downloads/silverline-capreit-9ffac83ac230.zip', function(er, f) {

		xslt.transform({
			root: 'src',
			xslt: { 
      	"-meta\\.xml": "&lt;xsl:stylesheet version=&quot;1.0&quot; xmlns:xsl=&quot;http://www.w3.org/1999/XSL/Transform&quot; xmlns:sf=&quot;http://soap.sforce.com/2006/04/metadata&quot;&gt;&lt;xsl:output omit-xml-declaration=&quot;yes&quot; indent=&quot;yes&quot;/&gt;&lt;xsl:strip-space elements=&quot;*&quot;/&gt; &lt;xsl:template match=&quot;node()|@*&quot;&gt;    &lt;xsl:copy&gt; &lt;xsl:apply-templates select=&quot;node()|@*&quot;/&gt;&lt;/xsl:copy&gt;&lt;/xsl:template&gt; &lt;xsl:template match=&quot;sf:*[sf:cacheControl='Private']/sf:cacheControl&quot;&gt; &lt;/xsl:template&gt;&lt;/xsl:stylesheet&gt;"
    	}
    }, f, function(er, res) {
    	fs.writeFile('/tmp/t/test-out.zip', res, function() {})
    })
    
	})
}

function generatePackageXml() {
	fs.readFile('/Users/daniel/Downloads/silverline-mxw-5592e9412ea7.zip', function(er, f) {
		var opts = {		  
			"sessionId": "00DK000000XN1I3!ARcAQBYNuGcLiGtCSr7TLB_OJvlKJpywKdAe8WpVu.sPEFG40yuQPD79s6ZKRHFM8D0N83M4vKEo1zLk.4W9.SOPf4LKVfFh",
		  "endpointUrl": "https://preventure--daniel.cs9.my.salesforce.com/services/Soap/m/35.0/00DK000000XN1I3",
		  "apiVersion": "35.0"
		}
		sf.describeMetadata(opts, function(er, res) {

			var x = xslt.generatePackageXml(f, res.result.metadataObjects, {root: 'src'})
			xslt.generatePackageXml(f, res.result.metadataObjects, {root: 'src'})
			})
    
	})
}

function login() {
	sf.login({
		endpointUrl: 'https://test.salesforce.com',
		apiVersion: '36.0',
		username: 'prevengers@silverlinecrm.com.daniel',
		password: 'maxwellforc6'
	}, function(er, res) {
		console.log(arguments)
	})
}

function describeMetadata() {
	sf.describeMetadata({
		endpointUrl: 'https://preventure--daniel.cs9.my.salesforce.com',
		sessionId: '00DK000000XN1I3!ARcAQBwHkq1Mg1.NbcCcXpExkCY3TIITJbJxOSzRQ0k3tawa9kpooqMzb8rDGFcCAyljzZte8gpMm2S_SlRbtxckUrYyBDf2',
		apiVersion: '36.0'
	}, function(er, res) {
		console.log(res.result)
	})
}

generatePackageXml();
generatePackageXml();

