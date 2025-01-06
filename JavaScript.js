// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});
// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});
// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});
// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});
// File: scripts.js

// Update the year dynamically in the footer
const updateYear = () => {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
};

// Show a greeting message based on the time of day
const showGreeting = () => {
    const hours = new Date().getHours();
    let greeting = "Hello!";

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const headerElement = document.querySelector('header p');
    if (headerElement) {
        headerElement.textContent = greeting + " Welcome to my portfolio.";
    }
};

// Form validation for the contact page
const validateForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
        alert('Please enter your name.');
        name.focus();
        return false;
    }

    if (!email.value.trim()) {
        alert('Please enter your email.');
        email.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Please enter your message.');
        message.focus();
        return false;
    }

    alert('Thank you for your message!');
    return true;
};

// Event listeners
const initEventListeners = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            if (validateForm()) {
                form.reset(); // Reset the form on successful validation
            }
        });
    }
};

// Initialize all scripts on page load
window.addEventListener('DOMContentLoaded', () => {
    updateYear();
    showGreeting();
    initEventListeners();
});
