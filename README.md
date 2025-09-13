# Playwright-E2E-Tests-Exam

This repository contains automated end-to-end tests I wrote during a Playwright exam.  
The tests cover **authentication, navigation, and CRUD functionality** of a sample book management application.

## 📋 Test Scenarios
The following scenarios were automated:
- User Registration with valid data
- Login / Logout functionality
- Navigation for logged-in and guest users
- Create, Edit, and Delete a book (CRUD)

Details of the requirements are available in [docs/requirements.md](docs/requirements.md).

## 📂 Project Structure
```plaintext
Playwright-E2E-Tests-Exam/
│
├── tests/
│   └── e2e.test.js     
│
├── docs/
│   └── requirements.md          
│
├── README.md                    
└── .gitignore                   

⚠️ Important

This repository contains only the test code as a demonstration of my Playwright skills.
The original application is not included.
On the exam, the application was started with:

npm install

npm run server (backend)

npm start (frontend)

Tests were then executed with:

npm test

Here, the focus is on showing test design and code quality, not on running the project.
