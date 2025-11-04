# Playwright + Cucumber BDD (POM) Example

This project contains a Playwright + Cucumber (BDD) example that automates the Sauce Demo purchase flow using a Page Object Model.

What is included
- Feature file tagged with `@smoke` at `features/sauce.feature`.
- Page objects in `pages/`.
- Step definitions in `features/step_definitions/steps.js`.
- Support world/hooks in `features/support/world.js` which spins up Playwright per scenario.
- Test data in `utils/data.json` (credentials and checkout data).
- Utility functions in `utils/random.js` (random number, email, date).
- Report generator using `cucumber-html-reporter` at `reports/generate-report.js`.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run the tests and generate the report

```bash
npm test
```

This runs the cucumber scenarios (output JSON at `reports/cucumber_report.json`) and then generates an HTML report at `reports/cucumber_report.html`.

Notes
- Playwright will download browser binaries on first install which may take time and network access.
- The `@smoke` tag is applied on the feature file as requested.
