# Swag Labs automation (Playwright)

# Playwright E2E Automation - SauceDemo

This project contains End-to-End (E2E) automated tests for SauceDemo using Playwright.
It supports multi-browser execution and CI integration with GitHub Actions.
---
## 🚀 Tech Stack

* Playwright (Test Automation)
* JavaScript (Node.js)
* GitHub Actions (CI/CD)
---

## ✅ Test Coverage

### Happy case

* Login with valid credentials
* Add item to cart
* Verify item in cart

### Negative Case

* Login with incorrect password
* Verify error message displayed

---

# ⚙️ Prerequisites

Make sure you have installed:

* Node.js (>= 18)
* Git

---

# 💻 Setup Instructions

## 🪟 Windows Setup

### 1. Install Node.js

Download and install from: https://nodejs.org/

Verify:

node -v
npm -v


### 2. Install Git

Download from: https://git-scm.com/download/win

Verify:

git --version

### 3. Clone Repository

git clone https://github.com/your-username/playwright-saucedemo-tests.git
cd playwright-saucedemo-tests

### 4. Install Dependencies

npm install

### 5. Install Playwright Browsers

npx playwright install

---

## 🍎 macOS Setup

### 1. Install Homebrew (if not installed)

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

### 2. Install Node.js

brew install node


Verify:

node -v
npm -v

### 3. Install Git

brew install git

Verify:

git --version

### 4. Clone Repository

git clone https://github.com/your-username/playwright-saucedemo-tests.git
cd playwright-saucedemo-tests

### 5. Install Dependencies

npm install

### 6. Install Playwright Browsers

npx playwright install

---

# ▶️ Run Tests

### Run all tests (multi-browser)

npx playwright test

### Run in headed mode

npx playwright test --headed

### Run with UI mode

npx playwright test --ui

### Run specific browser

npx playwright test --project=Chromium
npx playwright test --project=Firefox
npx playwright test --project=WebKit

---

# 📊 Test Reports

Generate and view HTML report:

npx playwright show-report

Report will be located in:

playwright-report/index.html

---

# 🤖 CI/CD (GitHub Actions)

Tests are automatically executed when:

* Code is pushed to `main`
* A pull request is created

CI pipeline:

.github/workflows/playwright.yml

---
