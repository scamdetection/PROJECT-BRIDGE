```javascript
// PROJECT BRIDGE - JAVASCRIPT

// 1. SEARCH PROBLEMS
const searchInput = document.getElementById("search");
const problemCards = document.querySelectorAll(".problem-card");
const noResults = document.getElementById("no-results");

if (searchInput && noResults) {
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        problemCards.forEach(function (card) {
            const matches = card.textContent
                .toLowerCase()
                .includes(query);

            card.hidden = !matches;

            if (matches) {
                visibleCount++;
            }
        });

        noResults.hidden = visibleCount > 0;
    });
}

// 2. APPLY FOR A PROBLEM
function applyForProblem(problemName) {
    alert(
        "PROJECT BRIDGE\n\n" +
        "Selected Problem: " + problemName +
        "\n\nYour application feature is not connected yet. " +
        "A backend is required to submit applications."
    );
}

// 3. STUDENT LOGIN VALIDATION
const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("login-message");

if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            loginMessage.textContent =
                "Please enter your email and password.";
            return;
        }

        if (password.length < 8) {
            loginMessage.textContent =
                "Password must contain at least 8 characters.";
            return;
        }

        loginMessage.textContent =
            "Login form validated successfully! " +
            "Real authentication is not connected yet.";
    });
}

// 4. WEBSITE STATUS
console.log("Project Bridge loaded successfully!");
```
