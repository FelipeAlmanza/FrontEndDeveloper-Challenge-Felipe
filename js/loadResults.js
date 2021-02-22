const apiWebsite = "https://ltv-data-api.herokuapp.com/api/v1/records.json";

$(document).ready(function () {
  // Search the parameters that could be in the URL
  // UrlSearchParam does not work in all browsers, but there is a polyfill version of it.
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  /*if there is an email in the query string load results.
   * Make a request to the API
   */
  if (email) {
    requestToAPI(email);
  }
  //if there is not, load the no results version
  else {
    loadNoResults();
  }
});

function requestToAPI(email) {
  const requestUrl = attachEmailToUrl(email);

  $.getJSON(requestUrl, function (data) {
    // Retrieved data succesfully
    if (data.length !== 0) {
      loadResults(data);
    }
    // In the case of the data array being empty []
    else {
      loadNoResults();
    }
  });
}

function loadResults(data) {
  setInfoContainer(
    "results",
    "1 result",
    "Look at the result below to see the details of the person you’re searched for."
  );

  setDetails(data);

  let detailsContainer = (document.getElementById(
    "detailsContainer"
  ).style.display = "block");
}

// Display 0 results and hide results container
function loadNoResults() {
  setInfoContainer("noResults", "0 results", "Try starting a new search below");
}

function attachEmailToUrl(email) {
  return apiWebsite + "?email=" + email;
}

/* resultType: results || noResults
 * numResults: 0 results or 1 result
 * extraText: additional info
 */
function setInfoContainer(resultType, numResults, extraText) {
  let textInfoContainer = document.getElementById("textInfoContainer");
  textInfoContainer.classList.add(resultType);

  let resultsText = document.getElementById("resultsText");
  resultsText.innerHTML = numResults;

  let resultsExtraText = document.getElementById("resultsExtraText");
  resultsExtraText.innerHTML = extraText;

  textInfoContainer.style.display = "block";
}

/* Sets all the placeholders in
 * the details box with their correspondent data
 */
function setDetails(data) {
  const name = data.first_name + " " + data.last_name;
  const address = data.address;
  const description = data.description;
  const phoneNumbers = data.phone_numbers;
  const relatives = data.relatives;
  const email = data.email;

  let nameField = document.getElementById("nameField");
  nameField.innerHTML = name;

  let addressField = document.getElementById("addressField");
  addressField.innerHTML = address;

  let descriptionField = document.getElementById("descriptionField");
  descriptionField.innerHTML = description;

  let phoneNumbersField = document.getElementById("phoneNumbers");

  for (let i = 0; i < phoneNumbers.length; i++) {
    phoneNumbersField.innerHTML += "<p>" + phoneNumbers[i] + "</p>";
  }

  let relativesField = document.getElementById("relativeList");

  for (let i = 0; i < relatives.length; i++) {
    relativesField.innerHTML += "<p>" + relatives[i] + "</p>";
  }

  let emailField = document.getElementById("emailField");
  emailField.innerHTML = email;
}
