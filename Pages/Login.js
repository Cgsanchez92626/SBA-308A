import { menuLinks } from "./Global.js";
// console.log(menuLinks);

document.addEventListener("DOMContentLoaded", function () {
  // Select and cache the <main> element
  const mainEl = document.querySelector("main");

  // Set the background color of mainEl using CSS custom property
  mainEl.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--main-bg");

  // Satisfy RQMTS only
  // Select the form element by its ID
const formElement = document.getElementById('loginForm');
// Get the parent element of the form element
const parentElement = formElement.parentNode;
// Cache the appName property of the Navigator object
const browserName = navigator.appName;
// Put the browserName to the log
// console.log(`Browser Name: ${browserName}`);
const histState = history.state;
// console.log(`History State: ${histState}`);

// End of Satisfy RQMTS

  // Cache the values into variables
  const allowedEmail = "CarmenSanchezREI@gmail.com";
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission for now

    // Basic email validation
    const enteredEmail = emailInput.value.trim().toLowerCase(); // Normalize email to lowercase
    if (!isValidEmail(enteredEmail)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    if (enteredEmail !== allowedEmail.toLowerCase()) {
      alert("Access denied. You are not authorized to sign in.");
      loginForm.reset(); // Clear form inputs after successful login
      return false;
    }

    // Password validation (just checking it's not empty here)
    if (passwordInput.value.trim() === "") {
      alert("Please enter your password.");
      passwordInput.focus();
      return false;
    }

    // If all validations pass, you can proceed with form submission
    // Change sub-menu item to "Sign Out" after successful login
    menuLinks[3].subLinks[0].text = "Sign Out";
    alert("Login successful!");
    // Clear form inputs after successful login
    loginForm.reset();
  });

  // Function to validate email format
  function isValidEmail(email) {
    // Basic email regex pattern for demonstration
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
