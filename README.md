# playwright-api-suite

[![CI](https://github.com/pulidoff/playwright-api-suite/actions/workflows/ci.yml/badge.svg)](https://github.com/pulidoff/playwright-api-suite/actions/workflows/ci.yml)

Automated API test suite built with Playwright Test, following the **Service Object Model (SOM)** pattern. Covers the public endpoints of [reqres.in](https://reqres.in) (users, authentication, and resources) and generates visual reports with Allure.

---

## Stack

| Tool | Role |
|---|---|
| [Playwright Test](https://playwright.dev/docs/test-api-testing) | Test runner and HTTP client |
| [reqres.in](https://reqres.in) | Public REST API used as the system under test |
| [Allure](https://allurereport.org) | HTML report generation |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD pipeline |
| [dotenv](https://github.com/motdotla/dotenv) | Local environment variable loading |

---

## Folder structure

```
playwright-api-suite/
├── .github/
│   └── workflows/
│       └── ci.yml            # CI pipeline (GitHub Actions)
├── fixtures/
│   └── apiFixtures.js        # Fixture that initializes SOManager with the request context
├── schemas/                  # JSON Schemas for response validation (in progress)
├── serviceobjects/
│   └── SOManager.js          # Service Object: encapsulates all API calls
├── tests/
│   ├── auth.spec.js          # Register and login tests
│   ├── resources.spec.js     # Tests for the /api/unknown endpoint
│   └── users.spec.js         # User CRUD tests
├── .env                      # Local environment variables (not versioned)
├── playwright.config.js      # Playwright configuration
└── package.json
```

---

## Running tests locally

### Prerequisites

- Node.js 20+
- [Allure CLI](https://allurereport.org/docs/install/) installed globally

### Install dependencies

```bash
npm ci
```

### Run the tests

```bash
npm test
```

### Generate the Allure report

```bash
npm run allure:generate
```

### Open the report in the browser

```bash
npm run allure:open
```

---

## Environment variables

The tests read the reqres.in API key from the environment. Create a `.env` file at the project root with the following content:

```dotenv
REQRES_API_KEY=your_api_key_here
```

> **Note:** the `.env` file is included in `.gitignore` and must never be committed to the repository.

### `REQRES_API_KEY`

| Context | How to set it |
|---|---|
| Local | `.env` file at the project root |
| CI (GitHub Actions) | Repository secret: **Settings → Secrets and variables → Actions → New repository secret** named `REQRES_API_KEY` |

You can get a free API key at [reqres.in](https://reqres.in).
