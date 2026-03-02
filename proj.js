// proj.js - Shared JavaScript for eSakay application

// ============================================
// Fare Calculator Variables and Functions
// ============================================

// variables for rate and fees
const baseFare = 15; // minimum fare for first kilometer
const additionalRate = 2.50; // per km after the first

/*
    calculateFare is called when the form is submitted on fare.html.
    It reads the input values, performs the calculation,
    and displays the total fare.
*/
function calculateFare(event) {
    event.preventDefault(); // prevent form from reloading the page

    // get user input values
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    let distance = parseFloat(document.getElementById('distance').value);

    // ensure distance is non-negative using Math.max
    distance = Math.max(distance, 0);

    // compute fare using conditional logic
    let totalFare;
    if (distance <= 1) {
        totalFare = baseFare;
    } else {
        // subtract the first kilometer and multiply remaining distance
        totalFare = baseFare + (distance - 1) * additionalRate;
    }

    // round to two decimal places using Math.round and multiplication
    totalFare = Math.round(totalFare * 100) / 100;

    // output the result using innerHTML
    const output = `Pickup: ${pickup}<br>
                    Drop-off: ${dropoff}<br>
                    Distance: ${distance} km<br>
                    <strong>Total Fare: ₱${totalFare}</strong>`;
    document.getElementById('result').innerHTML = output;
}

// ============================================
// Registration Form Functions
// ============================================

/*
    submitForm is called when the registration form is submitted.
    It validates and processes the form data, then redirects to success page.
*/
function submitForm(event) {
    event.preventDefault(); // avoid page reload

    // read form values (could be used for more advanced validation)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // simple comment: validate that all fields are filled
    if (name && email && dob && contact && username && password) {
        // log the registration attempt
        console.log("Registering user:", name, "Email:", email);
        
        // normally you'd send data to a server; here we just redirect
        window.location.href = 'success.html';
    } else {
        // show alert if any field is empty
        window.alert('Please fill in all fields.');
    }
}

// ============================================
// Page Initialization Functions
// ============================================

/*
    initHomepage initializes the homepage with any dynamic content.
    Currently just logs that the page has loaded.
*/
function initHomepage() {
    console.log("Welcome to eSakay - Your motorcycle taxi service!");
}

/*
    initSuccess displays a message on the success page.
    This could be enhanced to show user-specific information.
*/
function initSuccess() {
    console.log("Account creation successful!");
}

// Initialize pages when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // check which page we're on and initialize accordingly
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('Homepage.html') || currentPage.includes('index')) {
        initHomepage();
    } else if (currentPage.includes('success.html')) {
        initSuccess();
    }
});
