var SOAP = require('./soap.js')
var parseString = require('xml2js').parseString
var stripPrefixProcessor = require('xml2js/lib/processors').stripPrefix

module.exports = function(options, callback) {
	var s = new SOAP({
		sessionId: options.sessionId,
		endpointUrl: options.endpointUrl,
		xmlns: options.xmlns || 'http://soap.sforce.com/2006/04/metadata'
	})

	var req = options[options.methodName]

	s.invoke(options.methodName, req, function(er, res) {
		if(er) res = er
			
		parseString(res, {
			tagNameProcessors: [stripPrefixProcessor],
			explicitArray: false
		}, function(err, result) {
			if(er) return callback(result.Envelope.Body.Fault)
			if(err) {
				return callback(err)
			}

			return callback(null, result.Envelope.Body[options.methodName + 'Response'])
		})
	})
}
