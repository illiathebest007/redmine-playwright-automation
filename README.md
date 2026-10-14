# Redmine Playwright Automation

Automated UI tests for [redmine.org](https://www.redmine.org) built with **Playwright** and **TypeScript**, using the Page Object pattern, **Allure** reporting and a **GitHub Actions** CI pipeline.

## Tech stack

- **Playwright** — end-to-end web testing framework
- **TypeScript** / **Node.js**
- **Allure Report** — interactive test reporting
- **GitHub Actions** — CI

## Project structure

```
pages/                 Page Objects
tests/                 Test specs
playwright.config.ts   Playwright configuration
```

## Test cases

| ID     | Spec                              | Scenario                                   |
|--------|-----------------------------------|--------------------------------------------|
| Case-1 | `tests/issues.spec.ts`            | Open Issues list and view an issue         |
| Case-2 | `tests/search.spec.ts`            | Search for "FAQ" returns results           |
| Case-3 | `tests/download.spec.ts`          | Navigate to the Download page              |
| Case-4 | `tests/register_validation.spec.ts` | Registration fails with an empty login   |
| Case-5 | `tests/register_validation.spec.ts` | Registration fails with an empty email   |

## Getting started

1. Clone the repository and install dependencies:

   ```bash
   npm ci
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install chromium
   ```

## Running tests

```bash
npm test                                            # all tests, headless
npm run test:headed                                 # with browser UI
npx playwright test tests/register_validation.spec.ts   # a single spec
npm run typecheck                                   # TypeScript type check
```

## Reports

Playwright HTML report:

```bash
npx playwright show-report
```

Allure report (requires Java 8+):

```bash
npm run allure:generate
npm run allure:open
```

## CI

The GitHub Actions workflow (`.github/workflows/playwright.yml`) runs on every push and pull request to `main`: it type-checks the project, runs the tests and uploads both the Playwright HTML report and the Allure report as build artifacts.
