# Redmine & Backuplabs Playwright Automation

This project contains a set of automated tests for the **Redmine** and **Backuplabs** web applications, built using the **Playwright** framework, with integrated **Allure Reports** and **GitHub Actions** CI/CD pipeline.

## 🛠 Technologies Used
* **Playwright** — End-to-end web testing framework
* **Allure Report** — Beautiful and interactive test reporting tool
* **GitHub Actions** — CI/CD pipeline for automated testing
* **JavaScript** / **Node.js**

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone 

Install dependencies
Bash
npm ci
3. Install Playwright browsers
Bash
npx playwright install
⚙️ Running Tests
Run all tests:

Bash
npx playwright test
Run tests in headed mode (with browser UI):

Bash
npx playwright test --headed
Run a specific test file:

Bash
npx playwright test tests/registration.spec.js --headed
📊 Allure Reports
To generate and view the Allure report locally:

Generate the report:

Bash
npx allure generate allure-results -o allure-report --clean
Open the report in your browser:

Bash
npx allure open allure-report
🚀 CI/CD Pipeline (GitHub Actions)
The repository includes a GitHub Actions workflow that automatically runs tests and publishes the Allure report to GitHub Pages on every push to the main branch.



