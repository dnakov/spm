/**
 * @file Manages method call to SOAP endpoint
 * @author Shinichi Tomita <shinichi.tomita@gmail.com>
 */

'use strict';
var request = require('request')
var toXML = require('./toXML')
/**
 * Class for SOAP endpoint of Salesforce
 *
 * @protected
 * @class
 * @constructor
 * @param {Connection} conn - Connection instance
 * @param {Object} options - SOAP endpoint setting options
 * @param {String} options.endpointUrl - SOAP endpoint URL
 * @param {String} [options.xmlns] - XML namespace for method call (default is "urn:partner.soap.sforce.com")
 */
var SOAP = module.exports = function(options) {
  this.loginScopeHeader = options.loginScopeHeader
  this.sessionId = options.sessionId
  this.endpointUrl = options.endpointUrl
  this.xmlns = options.xmlns || 'urn:partner.soap.sforce.com'
};


/**
 * Invoke SOAP call using method and arguments
 *
 * @param {String} method - Method name
 * @param {Object} args - Arguments for the method call
 * @param {Object} [schema] - Schema definition of response message
 * @param {Callback.<Object>} [callback] - Callback function
 * @returns {Promise.<Object>}
 */
SOAP.prototype.invoke = function(method, args, callback) {
  var message = {};
  message[method] = args;
  var body = this._createEnvelope(message);
console.log(body)
  return request({
    method: 'POST',
    url: this.endpointUrl,
    headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': '""'
    },
    body: body
  },function(err, res, body) {

    if (!err && res.statusCode == 200) {
      return callback(null, body)
    } else {
      return callback(body)
    }
  })
};

/* @private */
function convertType(value, schema) {
  if (Array.isArray(value)) {
    return value.map(function(v) {
      return convertType(v, schema && schema[0])
    });
  } else if (typeof value === 'object') {
    if (value.$ && value.$['xsi:nil'] === 'true') {
      return null;
    } else if (Array.isArray(schema)) {
      return [ convertType(value, schema[0]) ];
    } else {
      var o = {};
      for (var key in value) {
        o[key] = convertType(value[key], schema && schema[key]);
      }
      return o;
    }
  } else {
    if (Array.isArray(schema)) {
      return [ convertType(value, schema[0]) ];
    } else if (typeof schema === 'object') {
      return {};
    } else {
      switch(schema) {
        case 'string':
          return String(value);
        case 'number':
          return Number(value);
        case 'boolean':
          return value === 'true';
        default:
          return value;
      }
    }
  }
}

/** @override **/
SOAP.prototype.beforeSend = function(request) {
  request.body = this._createEnvelope(request.message);
};

/** @override **/
SOAP.prototype.isSessionExpired = function(response) {
  return response.statusCode === 500 &&
    /<faultcode>[a-zA-Z]+:INVALID_SESSION_ID<\/faultcode>/.test(response.body);
};

/** @override **/
SOAP.prototype.parseError = function(body) {
  var error = lookupValue(body, [ /:Envelope$/, /:Body$/, /:Fault$/ ]);
  return {
    errorCode: error.faultcode,
    message: error.faultstring
  };
};

/** @override **/
SOAP.prototype.getResponseBody = function(response) {
  var body = SOAP.super_.prototype.getResponseBody.call(this, response);
  return lookupValue(body, [ /:Envelope$/, /:Body$/, /.+/ ]);
};

/**
 * @private
 */
function lookupValue(obj, propRegExps) {
  var regexp = propRegExps.shift();
  if (!regexp) {
    return obj;
  }
  else {
    for (var prop in obj) {
      if (regexp.test(prop)) {
        return lookupValue(obj[prop], propRegExps);
      }
    }
    return null;
  }
}



/**
 * @private
 */
SOAP.prototype._createEnvelope = function(message) {
  var header = {};

  if (this.sessionId) {
    header.SessionHeader = { sessionId: this.sessionId };
  }
  if(this.callOptions) header.CallOptions = this.callOptions
  if(this.loginScopeHeader) header.LoginScopeHeader = this.loginScopeHeader

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"',
    ' xmlns:xsd="http://www.w3.org/2001/XMLSchema"',
    ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">',
    '<soapenv:Header xmlns="' + this.xmlns + '">',
    toXML(header),
    '</soapenv:Header>',
    '<soapenv:Body xmlns="' + this.xmlns + '">',
    toXML(message),
    '</soapenv:Body>',
    '</soapenv:Envelope>'
  ].join('');
};
