
/* =====================================
   PROJECT BRIDGE - JAVASCRIPT
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {
  // HTML elements
  const searchInput = document.getElementById("search");
  const categoryFilter = document.getElementById("category-filter");
  const problemCards = document.querySelectorAll(".problem-card");
  const noResults = document.getElementById("no-results");
  const resultCount = document.getElementById("result-count");

  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  const dialog = document.getElementById("application-dialog");
  const closeDialog = document.getElementById("close-dialog");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogDescription = document.getElementById("dialog-description");
  const applicationForm = document.getElementById("application-form");
  const applicationMessage = document.getElementById("application-message");

  let selectedProblem = "";

  // Footer year
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // Mobile navigation
  menuToggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // Close mobile menu after selecting a link
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });

  // Search and category filter
  function filterProblems() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    problemCards.forEach(function (card) {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      const searchData = (card.dataset.search || "").toLowerCase();
      const category = card.dataset.category;

      const matchesSearch =
        title.includes(searchTerm) ||
        description.includes(searchTerm) ||
        searchData.includes(searchTerm);

      const matchesCategory =
        selectedCategory === "all" ||
        category === selectedCategory;

      const isVisible = matchesSearch && matchesCategory;

      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount++;
      }
    });

    noResults.hidden = visibleCount !== 0;

    resultCount.textContent =
      visibleCount + (visibleCount === 1 ? " problem found" : " problems found");
  }

  searchInput.addEventListener("input", filterProblems);
  categoryFilter.addEventListener("change", filterProblems);
  filterProblems();

  // Problem details and application dialog
  const descriptions = {
    "Smart Waste Management":
      "Explore how digital tools, sensors, or a web application could improve waste collection and recycling.",
    "Water Conservation":
      "Propose a solution that tracks water usage, identifies waste, or encourages conservation.",
    "Student Learning Hub":
      "Design a platform that helps students discover learning materials and study collaboratively.",
    "Healthcare Awareness":
      "Develop an educational platform that shares reliable health information and helpful reminders.",
    "Public Transport Helper":
      "Plan an application that makes public transport routes and journey information easier to access.",
    "Energy Saving Tracker":
      "Create a dashboard that helps users understand energy usage and discover ways to save electricity."
  };

  document.querySelectorAll(".apply-button").forEach(function (button) {
    button.addEventListener("click", function () {
      selectedProblem = button.dataset.problem || "";

      dialogTitle.textContent = selectedProblem;
      dialogDescription.textContent =
        descriptions[selectedProblem] || "Explore this real-world challenge.";

      applicationForm.reset();
      applicationMessage.textContent = "";
      applicationMessage.className = "form-message";

      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      } else {
        alert("Your browser does not support the application dialog.");
      }
    });
  });

  // Close application dialog
  closeDialog.addEventListener("click", function () {
    dialog.close();
  });

  // Close dialog when clicking outside its content
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  // Demo application submission
  applicationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!applicationForm.reportValidity()) {
      return;
    }

    const applicantName =
      document.getElementById("applicant-name").value.trim();

    applicationMessage.textContent =
      "Demo submission complete, " + applicantName +
      ". Your interest in " + selectedProblem +
      " was validated in this browser. It has NOT been sent or saved to a server.";

    applicationMessage.className = "form-message success";
  });

  // Demo login validation
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginMessage.className = "form-message";

    if (!email || !password) {
      loginMessage.textContent = "Please enter your email and password.";
      loginMessage.classList.add("error");
      return;
    }

    if (password.length < 8) {
      loginMessage.textContent =
        "Your password must contain at least 8 characters.";
      loginMessage.classList.add("error");
      return;
    }

    loginMessage.textContent =
      "Demo validation successful for " + email +
      ". This is not a real login: no account was checked or created.";

    loginMessage.classList.add("success");
  });

  console.log("Project Bridge website loaded successfully.");
});
