/*

Installation and usage
Install Windows 10.
Download the correct Microsoft WebDriver server version for your build.

To find your correct build number: 
Go to Start > Settings > System > About and locate the number next to OS Build on the screen. 
This is your build number. Having the correct version of WebDriver for your build ensures 
it runs correctly.

*/

exports.config = {
  seleniumAddress: 'http://localhost:9515',
  capabilities: {
    browserName: 'MicrosoftEdge',
    elementScrollBehavior: 1,
    nativeEvents: false
  },
  framework: 'jasmine',
  baseUrl: 'https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ltmpl=default&dsh=S1225017015%3A1611064219108085&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp',
  specs: [
    '../tests/edgespec.js'
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}
