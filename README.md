# Azend Playwright Assignment

A comprehensive automated testing suite built with **Playwright** using the **Page Object Model (POM)** design pattern. This project tests web application functionality across multiple pages and scenarios.

## Project Overview

This is a test automation framework for testing the [The Internet](https://the-internet.herokuapp.com/) web application. It includes automated tests for:

- **Login Page** - Authentication and credential validation
- **CheckBoxes Page** - Checkbox selection and state management
- **Dynamic Controls Page** - Dynamic element interaction and state changes

## Project Structure

```
AzendPlaywrightAssignment/
├── tests/                          # Test specifications
│   ├── LoginPageTest.spec.ts       # Login page test cases
│   ├── CheckBoxesPageTest.spec.ts  # Checkbox test cases
│   └── DynamicControlsPageTest.spec.ts  # Dynamic controls test cases
├── pages/                          # Page Object Model classes
│   ├── LoginPage.ts                # Login page object
│   ├── CheckBoxesPage.ts           # CheckBoxes page object
│   └── DynamicControlsPage.ts      # DynamicControls page object
├── test-data/                      # Test data
│   └── login-data.json             # Login credentials test data
├── utills/                         # Utilities and configuration
│   └── urls.json                   # Base URL reference
├── .env                            # Environment variables (BASE_URL, credentials)
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js (LTS version)](https://nodejs.org/en/download/)
- [Playwright](https://playwright.dev/)

### Install Node.js
Download and install Node.js from [here](https://nodejs.org/en/download/). You can verify the installation by running:
node -v
npm -v

### Install Playwright
Run the following command to install Playwright and its dependencies:
```bash
npx playwright install
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create or update the `.env` file in the project root with your configuration:
```env
BASE_URL=https://the-internet.herokuapp.com/
username='' # Valid username
password='' # Valid password
```

### 3. Run Tests

### Run all tests
```bash
npm test
```

### Run tests in headed mode (with browser UI)
```bash
npm run test:headed
```

### Generate and view HTML report
```bash
npm run test:report
```

### View existing report

npm run report


## Test Suite Details

### Login Page Tests (`LoginPageTest.spec.ts`)
- ✓ Successful login redirects to secure area
- ✓ Login with invalid credentials shows error message

### CheckBoxes Page Tests (`CheckBoxesPageTest.spec.ts`)
- Tests for checkbox selection and state management

### Dynamic Controls Page Tests (`DynamicControlsPageTest.spec.ts`)
- Tests for dynamic element interaction and manipulation

## Configuration

### Environment Variables (`.env`)

The project uses environment variables for configuration. Create or update your `.env` file with:

```env
# Base URL
BASE_URL=https://the-internet.herokuapp.com/

# Login Credentials
username='' # Valid username
password='' # Valid password
```

**Note:** The `.env` file is automatically loaded by the Playwright configuration using `dotenv`.

### Playwright Configuration (`playwright.config.ts`)

The project is configured to run tests in:
- **Chromium** (headless: true)
- **Firefox** (headless: true)
- **WebKit** (headless: true)

Default settings:
- **Test directory**: `./tests`
- **Reporter**: HTML report
- **Parallel execution**: Enabled
- **Trace**: Recorded on first retry
- **Retries**: 2 on CI, 0 locally
- **Base URL**: Loaded from `process.env.BASE_URL`

### Using the Base URL

The base URL is automatically configured in Playwright, allowing you to use relative paths in tests:

```typescript
// Using relative path (recommended)
await page.goto('/login');

// Instead of full URL
// await page.goto('https://the-internet.herokuapp.com/login');
```

## Page Object Model Pattern

This project follows the **Page Object Model (POM)** design pattern for better test maintainability:


## Test Reports

HTML reports are automatically generated after test runs and saved in the `playwright-report/` directory.

To view the latest report:
```bash
npm run report
```
