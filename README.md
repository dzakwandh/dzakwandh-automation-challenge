# Challenge 1 (Task 1)
The answer to task number 1 of Challenge 1 is available in the PDF file [TEST STRATEGY-Dzakwan DH](https://github.com/dzakwandh/dzakwandh-automation-challenge/blob/main/TEST%20STRATEGY-Dzakwan%20DH.pdf).

# Challenge 1 (Task 2)
### 1. Register:
* Scenario to check if a new user (mentor/mentee) can register successfully with valid details.
### 2. Login:
* Scenario for logging in as a valid mentor or mentee with correct credentials.
* Scenario for handling invalid credentials (incorrect email or password).
### 3. Search for a Mentor:
* Scenario to verify that the user can search for a mentor using valid keywords.
* Scenario to ensure the correct mentor list is displayed after applying filters (e.g., experience level).
### 4. Make a Schedule:
* Scenario to verify that a user (mentee) can propose a schedule to a mentor.
* Scenario to verify the system properly handles selecting date and time slots.
### 5. Mentor Availability:
* Scenario to verify the system displays mentors who are available based on the search criteria (e.g., experience level, location).
* Scenario to handle when no mentors match the filter criteria (e.g., no available mentors for a specific level).
### 6. Logout:
* cenario to check if the user can log out successfully after a session.

# Challenge 3 Exploration & Bug
The answer for this challenge is available in the PDF file [Challenge 3-DzakwanDH.pdf](https://github.com/dzakwandh/dzakwandh-automation-challenge/blob/main/Challenge%203-DzakwanDH.pdf). 

# Challenge 2 Cypress UI Automation - Mentoring Web

Automation Challenge for QA application (Dzakwan Daffa Hidayatullah)
## About This Project
This project is a technical case study submission for the Automation Software Quality Assurance Analyst position.
The assessment was provided as part of the recruitment process to evaluate skills in testing strategy, test automation, and identifying/reporting bugs. It includes:
* Writing automated test cases using Cypress
* Creating a test strategy document
* Reporting real bugs found in the main web and mentoring platform
All deliverables were completed based on the provided instructions and tested on the specified test environment.

## Built With
This project contains automated end-to-end test cases written using [Cypress](https://www.cypress.io/) for Mentoring web platform.
## 📁 Project Structure
```
dzakwandh-automation-challenge
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
git clone https://github.com/dzakwandh/dzakwandh-automation-challenge.git
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
