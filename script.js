
const searchInput = document.getElementById("search");
const problemCards = document.querySelectorAll(".problem-card");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  let visibleCount = 0;

  problemCards.forEach(function (card) {
    const matches = card.textContent.toLowerCase().includes(query);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
});

function applyForProblem(problemName) {
  alert(
    "You selected: " + problemName +
    "\n\nApplication submission will be available after backend integration."
  );
}

document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("login-message").textContent =
    "Demo form validated. Secure authentication is not connected yet.";
});