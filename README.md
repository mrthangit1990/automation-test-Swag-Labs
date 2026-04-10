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
npx playwright install chromium
```

The first command installs `@playwright/test`. The second downloads the Chromium browser Playwright uses (only needed once per machine).

## Run tests

```powershell
npm test
```

On a clean checkout, this runs **2 tests** (HP_01 and NEG_Login_01) in Chromium. A recent local run completed in about 5 seconds with both passing.

Other scripts:

| Command | Description |
|--------|-------------|
| `npm test` | Run all tests (headless Chromium) |
| `npm run test:headed` | Run with a visible browser |
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

- `playwright.config.ts` — base URL, `data-test` as test id attribute, Chromium project
- `tests/saucedemo.spec.ts` — spec file for the cases above
- `package.json` — dependencies and npm scripts

## Troubleshooting

- **`npm` is not recognized** — Install Node.js and restart the terminal (or add Node to your PATH). On Windows you can use `winget install OpenJS.NodeJS.LTS` (UAC may be required). As an alternative, download the Windows x64 **zip** from [Node.js downloads](https://nodejs.org/en/download/), extract it (for example under `.tools/` in this repo; that folder is gitignored), and prepend that folder to `PATH` for the session before running `npm install` and `npm test`.
- **Browser not installed** — Run `npx playwright install chromium`.
- **Timeouts or flakes** — Sauce Demo is a public demo; retries are enabled in CI via `playwright.config.ts`. For local debugging, use `npm run test:headed` or `npm run test:ui`.
