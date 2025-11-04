const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const jsonReport = path.resolve(__dirname, '..', 'reports', 'cucumber_report.json');
const htmlReport = path.resolve(__dirname, '..', 'reports', 'cucumber_report.html');

if (!fs.existsSync(jsonReport)) {
  console.error('JSON report not found. Run tests first to generate reports/cucumber_report.json');
  process.exit(1);
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonReport,
  output: htmlReport,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version":"1.0.0",
    "Test Environment": "staging",
    "Browser": "Chromium (Playwright)",
    "Platform": process.platform
  }
};

reporter.generate(options);
console.log('HTML report generated at', htmlReport);
