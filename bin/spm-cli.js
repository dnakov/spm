#!/usr/bin/env node
program = require("commander")
spm = require('../methods.js')
  fs = require('fs')
  readdirp = require('readdirp')
  JSZip = require('jszip')
  path = require('path')
  junit = require('sf-junit-reporter')
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
          console.log(conn)
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
    .option('--runTests, --runTests [runTests]', 'read sf docs', list)
    .option('--no-singlePackage, --no-singlePackage', 'read sf docs')
    .option('--allowMissingFiles, --allowMissingFiles', 'read sf docs')
    .option('--autoUpdatePackage, --autoUpdatePackage', 'read sf docs')
    .option('--runPackagedTestsOnly, --runPackagedTestsOnly', 'read sf docs')
    .option('--useDefaultMetadata, --useDefaultMetadata', 'doesnt ask the server for metadata')
    .option('--usePackageXml, --usePackageXml [usePackageXml]', 'specify existing package.xml file [usePackageXml]')
    .option('--apiVersion, --apiVersion [apiVersion]', 'api version', '33.0')
    .option('-u, --username <username>', 'username', '')
    .option('-p, --password <password>', 'password', '')
    .option('-e, --endpointUrl <endpointUrl>', 'login url', 'https://login.salesforce.com')
    .option('-f, --filter <value>', 'regex filter for files to deploy')
    .option('-r, --root <root>', 'regex filter for files to deploy', 'src')	
    .option('-j, --junit [junit]', 'junit results filename out')	
    .option('--fullLog', '--fullLog', 'output the complete deployment log')
    .option('--checkInterval, --checkInterval <checkInterval>', 'deploy check interval', 2000)
    .action(function(op) {
      if(op.junit === true) op.junit = 'junit.xml'
      var statusInterval
      var options = op.opts()
      spm.login(options, function(er, conn) {
        op
        if(er) return xit(er)
        options.endpointUrl = conn.result.metadataServerUrl
        options.sessionId = conn.result.sessionId
        spm.describeMetadata(options, function(er, r) {
          if(er) return xit(er)
            zipLocalFiles(options.root, options.filter, function(er, z) {
              if(er) return xit(er)
                op
                spm.transform({ root: options.root, metadataObjects: r.result.metadataObjects, apiVersion: options.apiVersion}, z, function(er, zip) {
                  fs.writeFileSync('/tmp/spm.zip', zip);
                  if(er) return xit(er)
                    options.options = options;
                  console.log('Deploying...')
                    spm.deploy(options, zip.toString('base64'), function(er, res) {
                      op
                      if(er) return xit(er)
                        statusInterval = setInterval(function() {
                          spm.checkDeployStatus({sessionId: options.sessionId, endpointUrl: options.endpointUrl, options: { checkAsyncStatus: res.result.id, includeDetails: true }}, function(er, r) {
                            if(er || r.result.done === 'true') clearTimeout(statusInterval);
                            if(er) return xit(er)
                              if(r.result.done === 'true') {
                                console.log(op.fullLog)
                                if(op.fullLog) console.log(JSON.stringify(r, null, 2))

                                  if(op.junit) fs.writeFileSync(op.junit, junit(r.result))    
                                  process.exit(r.result.success !== 'true')
                              }
                          })
                        }, op.checkInterval)
                        
                    })
                })
                
            })
        })
      })
      /*  -   	spm.deploy(options, function(er, results) { */
      /*     		if(er != null) process.exit(1) */
      /*     	}) */
    })
  
  program
    .command('retrieve')    
    .description('retrieve metadata')
    .option('-m, --manual', 'no prompts, expects options to be passed in')
    .option('--apiVersion, --apiVersion [apiVersion]', 'api version', '33.0')
    .option('-u, --username [username]', 'username', '')
    .option('-p, --password [password]', 'password', '')
    .option('-url, --loginUrl [loginUrl]', 'login url', 'https://login.salesforce.com')
    .action(function(options) {
      spm.retrieve(options, function(er, conn) {
        if(er != null) process.exit(1)
      })
    })
  
  // .action(function(cmd, options) {
  // 	spm.commands.deploy(options)
  // })
  if (!process.argv.slice(2).length) {
    program.outputHelp();
  }

program.parse(process.argv);

function zipLocalFiles(root, fileFilter, callback) {
  var zip = new JSZip()
    readdirp({ root: root, fileFilter: fileFilter }, function(fileInfo) {
        zip.file(fileInfo.path, fs.readFileSync(fileInfo.fullPath));
    }, function() {
      callback(null,zip)
    })
}
function xit(er) {
  console.log(er)
  return process.exit(1)
}

function list(val) {
  return val.split(',')
}
