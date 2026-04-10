# AutoTest — Sauce Demo (Playwright)

End-to-end tests for [Swag Labs](https://www.saucedemo.com/) using [Playwright](https://playwright.dev/).

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- Network access to `https://www.saucedemo.com`

## Setup

From the project root:

```powershell
cd c:\Users\Admin\Documents\AutoTest
npm install
npx playwright install
```

The first command installs `@playwright/test`. The second downloads **Chromium, Firefox, and WebKit** that Playwright uses (only needed once per machine). To install a single engine: `npx playwright install chromium` (or `firefox`, `webkit`).

## Run tests

```powershell
npm test
```

By default, `npm test` runs **every spec in all configured browsers** (Chromium, Firefox, WebKit), so you get **6 runs** for the two scenarios (2 tests × 3 browsers).

Other scripts:

| Command | Description |
|--------|-------------|
| `npm test` | Run all tests in **Chromium, Firefox, and WebKit** (headless) |
| `npm run test:chromium` | Run tests in Chromium only |
| `npm run test:firefox` | Run tests in Firefox only |
| `npm run test:webkit` | Run tests in WebKit only |
| `npm run test:headed` | Run all projects with a visible browser |
| `npm run test:ui` | Open the Playwright UI runner |

After a run, open the HTML report:

```powershell
npx playwright show-report
```

## Test cases

| TC ID | Scenario | File |
|-------|----------|------|
| **HP_01** | Login with `standard_user` / `secret_sauce`, add **Sauce Labs Backpack** to cart, open cart, verify the item | `tests/saucedemo.spec.ts` |
| **NEG_Login_01** | Valid username and wrong password; expect login to fail and the standard error message | `tests/saucedemo.spec.ts` |

## Project layout

- `playwright.config.ts` — base URL, `data-test` as test id attribute, Chromium / Firefox / WebKit projects
- `tests/saucedemo.spec.ts` — spec file for the cases above
- `package.json` — dependencies and npm scripts

## Push to GitHub

This repo is intended to live at **`automation-test-Swag-Labs`** on your GitHub account. The project is already committed locally on branch `main`.

**Option A — GitHub CLI** (after [installing `gh`](https://cli.github.com/)):

```powershell
cd c:\Users\Admin\Documents\AutoTest
gh auth login
gh repo create automation-test-Swag-Labs --public --source=. --remote=origin --push
```

Use `--private` instead of `--public` if you want a private repository.

**Option B — Git only**

1. On GitHub, create a new empty repository named `automation-test-Swag-Labs` (no README, no `.gitignore` template).
2. Add the remote (replace `YOUR_GITHUB_USERNAME` with your username or organization):

   ```powershell
   cd c:\Users\Admin\Documents\AutoTest
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/automation-test-Swag-Labs.git
   git push -u origin main
   ```

## Troubleshooting

- **`npm` is not recognized** — Install Node.js and restart the terminal (or add Node to your PATH). On Windows you can use `winget install OpenJS.NodeJS.LTS` (UAC may be required). As an alternative, download the Windows x64 **zip** from [Node.js downloads](https://nodejs.org/en/download/), extract it (for example under `.tools/` in this repo; that folder is gitignored), and prepend that folder to `PATH` for the session before running `npm install` and `npm test`.
- **Browser not installed** — Run `npx playwright install` (all browsers) or `npx playwright install chromium firefox webkit`.
- **Timeouts or flakes** — Sauce Demo is a public demo; retries are enabled in CI via `playwright.config.ts`. For local debugging, use `npm run test:headed` or `npm run test:ui`.
