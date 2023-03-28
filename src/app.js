let searchInputCouuntry = document.getElementById("searchInput");
let countries = document.getElementsByClassName("country");
let authors = document.getElementsByClassName("author");

searchInputCountry.addEventListener("keyup", (event) => {
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

  for (const authorElement of authors) {
    let author = authorElement.textContent.toLowerCase();

    if (author.includes(searchQuery)) {
      authorElement.style.display = "block";
    } else {
      authorElement.style.display = "none";
    }
  }
});
