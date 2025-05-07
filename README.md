# Cypress UI Automation - Dealls Mentoring Web
Automation Challenge for QA application at Dealls (Dzakwan Daffa Hidayatullah)

This project contains automated end-to-end test cases written using [Cypress](https://www.cypress.io/) for the Dealls Mentoring web platform.

## 📁 Project Structure
```
cypress-dealls-dzakwandh
├── cypress/
│ ├── e2e/
│ │ ├── booking-mentor.cy.js # Test case for proposing a schedule to mentor (not logged in)
│ │ ├── login-as-a-mentor-mentee.cy.js # Test case for logging in as mentor or mentee
│ │ └── search-mentor.cy.js # Test case for searching mentors with keyword & filter
│ ├── support/
│ │ └── e2e.js # Global setup hooks
├── cypress.config.js # Cypress config file with custom environment variables
├── package.json # Project dependencies and scripts
├── package-lock.json # Lock file
├── README.md # Project readme (this file)
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/dzakwandh/dealls-automation-challenge.git
cd cypress-dealls-dzakwandh
```

### 2. Install Dependencies
```bash
npm install
```
### 3. Run Tests Locally
```bash
npx cypress open   # Run with UI
npx cypress run    # Run headlessly
```
## 🧪 Test Scenarios
File	Description
booking-mentor.cy.js	Automates proposing a schedule to a mentor including date selection, user registration, and confirmation.
login-as-a-mentor-mentee.cy.js	Tests login functionality with valid credentials.
search-mentor.cy.js	Validates mentor search using keyword and experience level filter.

## ⚙️ Custom Environment Variables
Set dynamically in cypress.config.js:

randomName, randomEmail, randomWhatsapp, password
Used in registration and booking flows.

## 📎 Additional Documents
Test Strategy Document (PDF)

Bug Findings List (PDF)

These files describe the overall approach and any bugs found during exploratory testing.

## ✍️ Author
Dzakwan Daffa Hidayatullah
QA Engineer
