# Playwright Project

This repository contains automated end-to-end tests using [Playwright](https://playwright.dev/).

---

## Prerequisites
Before running the tests, make sure you have:
- [Node.js](https://nodejs.org/) (v18+ or v20 recommended)
- [npm](https://docs.npmjs.com/getting-started) (comes with Node.js)
- Git

---

## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

Install Playwright browsers:

```bash
npx playwright install --with-deps
```

---

##  Running Tests
Run **all tests**:

```bash
npx playwright test
```

Run a **specific test file**:

```bash
npx playwright test tests/example.spec.ts
```

Run in **headed mode** (see the browser):

```bash
npx playwright test --headed
```

Run in **UI mode** (interactive test explorer):

```bash
npx playwright test --ui
```

---

##  Viewing HTML Test Report
After running tests, generate and open the **HTML report**:

```bash
npx playwright show-report
```

Reports are saved by default in:

```
playwright-report/
```

---

##  GitHub Actions (CI/CD)
This project includes a GitHub Actions workflow at:

```
.github/workflows/playwright.yml
```

It automatically runs Playwright tests on:
- Every push to `main`
- Every pull request

You can view test results in the **Actions tab** of this repository.

---

##  Project Structure
```
.
├── tests/                  # Test files
├── playwright.config.ts    # Playwright configuration
├── package.json            # Dependencies & scripts
├── README.md               # Project documentation
└── .github/workflows/      # GitHub Actions CI
```

---

##  Resources
- [Playwright Docs](https://playwright.dev/docs/intro)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

---
 Now you’re ready to run and extend your Playwright tests!
