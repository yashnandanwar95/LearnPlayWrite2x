console.log("Hello The Testing Academy");

// Naming Convention Examples

// Variables - camelCase
let userEmail = "test@example.com";
let firstName = "John";

// Constants - UPPER_SNAKE_CASE
const BASE_URL = "https://example.com";
const MAX_RETRIES = 3;

// Booleans - is/has/can prefix
let isLoggedIn = true;
let hasPermission = false;
let canEdit = true;

// Functions - camelCase, verb-based
function clickLoginButton() {
  console.log("Clicking login button");
}

function fillUserForm() {
  console.log("Filling user form");
}

// Classes/Page Objects - PascalCase
class LoginPage {
  constructor() {
    this.isLoaded = true;
  }
}

// Usage
clickLoginButton();
fillUserForm();
console.log(userEmail);
console.log(isLoggedIn);
