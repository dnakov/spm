# SPM

## Bamboo Setup
1. Configure the following variables:
	* **username** (SF username)
	* **password** (SF password -- append token if necessary)
	* **endpointUrl** (https://test.salesforce.com for sandbox or https://login.salesforce.com for production/dev)
	* **deployOptions** (additional arguments to be passed to spm)
		* Example for **test** deploy: `--checkOnly --runAllTests --rollbackOnError --junit tests.xml`
		* Example for **production** deploy: `--rollbackOnError`
		* All options
			* `--apiVersion` -- salesforce option
			* `--checkOnly` -- salesforce option
    		* `--ignoreWarnings` -- salesforce option
    		* `--performRetrieve` -- salesforce option
    		* `--purgeOnDelete` -- salesforce option
      		* `--rollbackOnError` -- salesforce option
    		* `--runAllTests` -- salesforce option
    		* `--runTests` -- salesforce option
    		* `--singlePackage` -- salesforce option
    		* `--allowMissingFiles` -- salesforce option
    		* `--runPackagedTestsOnly` -- salesforce option
    		* `--junit [fileName]` -- exports test results as jUnit 
    		* `--filter [glob_filter]` -- only include files that match this filter
    		* `--root [root_dir]` -- specify root directory containing salesforce files (defaults to `src`
    		* `--fullLog` -- outputs the full deployment log from salesforce (JSON)
    		* `--checkInterval [ms]` -- how often to check for the deployment result (defaults to 2000)
2. Add an **npm** task with the following command: `install git+https://bitbucket.org/silverline/spm`
3. Add a **script** or **node.js** task to execute the `spm` command
	* Example for **script** task: `./node_modules/spm/bin/spm-cli.js deploy --username ${bamboo.username} --password ${bamboo.password} --endpointUrl ${bamboo.endpointUrl} ${bamboo.deployOptions}`
	* Example for **node.js** task:
		* Script: `node_modules/spm/bin/spm-cli.js`
		* Arguments: `deploy --username ${bamboo.username} --password ${bamboo.password} --endpointUrl ${bamboo.endpointUrl} ${bamboo.deployOptions}`
4. If setting up tests, add a **JUnit Parser** task to parse the junit file specified in the spm command
	* Example: `**/tests.xml` (for when spm was run with --junit tests.xml)

