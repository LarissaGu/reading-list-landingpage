function updateCountry(event) {
  let country = event.target.value;
  if (country === "hungary") {
  }
}

let selectCountryElement = document.querySelector("#country");
selectCountryElement.addEventListener("change", updateCountry);

let hungaryElement = document.querySelector("#hungary");
let albaniaElement = document.querySelector("#albania");
