/*
{
  "sessionId": "00DK000000XN1I3!ARcAQFXu6UNvmHRDNzPxVfh2OumhiwWR_FvNgIn26Q4MuOPixknZfTJBubncBW6qdT0wK4T6TdDNdHvL3LP_aRY7Snvbh6GH",
  "endpointUrl": "https://preventure--daniel.cs9.my.salesforce.com",
  "apiVersion": "36.0",
  "methodName": "retrieve",
  "retrieve": {
    "retrieveRequest": {
      "apiVersion": "36.0",
      "packageNames": "test2",
      "singlePackage": true,
      "specificFiles": false
    }
  }
}
*/
var invoke = require('./invoke.js')
var assign = require('object-assign')
var xslt = require('./xslt.js')

  var allowedDeployOpts = [
    'checkOnly',
    'ignoreWarnings',
    'performRetrieve',
    'purgeOnDelete',
    'rollbackOnError',
    'runAllTests',
    'runTests',
    'singlePackage',
    'allowMissingFiles',
    'runPackagedTestsOnly'
  ]
function getDeployOpts(o) {
    var opts = {}
    Object.keys(o).map(function(key) {
      if(o[key] !== undefined && allowedDeployOpts.indexOf(key) !== -1) {
        opts[key] = o[key]
      }
    })
    return opts
  }

function getOpts(config, methodName, requestOpts) {
	
	var opts = {
		sessionId: config.sessionId,
		endpointUrl: config.endpointUrl,
		apiVersion: config.apiVersion,
		username: config.username,
		password: config.password,
		xmlns: config.xmlns,
		methodName: methodName
	}

	return assign(opts, requestOpts)
}

module.exports = {}

function getMetadataUrl(config) {
	var cfg = assign({}, config)
	if(cfg.endpointUrl.indexOf('/Soap/m') === -1) {
		cfg.endpointUrl = cfg.endpointUrl + '/services/Soap/m/' + cfg.apiVersion
	}
	cfg.xmlns = 'http://soap.sforce.com/2006/04/metadata'
	return cfg
}

module.exports.describeMetadata = function(config, cb) {
	config = getMetadataUrl(config)
	invoke(getOpts(config, 'describeMetadata', {describeMetadata: { asOfVersion: (config.options && config.options.asOfVersion) || config.apiVersion } }), cb)
}

module.exports.login = function(config, cb) {
	var cfg = assign(config, { 
		xmlns: 'urn:partner.soap.sforce.com',
		endpointUrl: config.endpointUrl + '/services/Soap/u/' + config.apiVersion
	})
	invoke(getOpts(cfg, 'login', {login: { username: config.username, password: config.password } }), cb)
}

module.exports.retrieve = function(config, cb) {
	config = getMetadataUrl(config)
	invoke(getOpts(config, 'retrieve', {retrieve: { retrieveRequest: config.options } }), cb)
}

module.exports.checkRetrieveStatus = function(config, cb) {
	config = getMetadataUrl(config)
	invoke(getOpts(config, 'checkRetrieveStatus', { checkRetrieveStatus: config.options }), cb)
}

module.exports.checkDeployStatus = function(config, cb) {
	config = getMetadataUrl(config)
	invoke(getOpts(config, 'checkDeployStatus', { checkDeployStatus: {
		checkAsyncStatus: config.options.checkAsyncStatus,
		includeDetails: config.options.includeDetails
	}
	}), cb)
}

module.exports.deploy = function(config, zipBase64, cb) {
	config = getMetadataUrl(config)
	var opts = getOpts(config, 'deploy', { deploy: { ZipFile: zipBase64, DeployOptions: getDeployOpts(config.options) }})
	invoke(opts, cb)
}

module.exports.transform = xslt.transform
module.exports.generatePackageXml = xslt.generatePackageXml
module.exports.getjz = xslt.getjz
