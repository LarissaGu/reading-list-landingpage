let searchInput = document.getElementById("searchInput");
let countries = document.getElementsByClassName("country");

searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  const searchQuery = value.toLowerCase();

  for (const countryElement of countries) {
    let country = countryElement.textContent.toLowerCase();

    if (country.includes(searchQuery)) {
      countryElement.style.display = "block";
    } else {
      countryElement.style.display = "none";
    }
  }
});
