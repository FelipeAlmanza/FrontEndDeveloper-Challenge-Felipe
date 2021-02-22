$(document).ready(function () {
  const currentLocation = window.location.href;
  //   Loads the search box with information depending on the page

  if (currentLocation.includes("results.html")) {
    loadResultsSearchBox();
    // Index page
  } else {
    loadMainSearchBox();
  }
});

function loadMainSearchBox() {
  setSearchBox(
    "Search Any Email Address",
    "Start Here",
    "- Look up the owner's name, photos and online profiles. See what you find!"
  );
}

function loadResultsSearchBox() {
  setSearchBox(
    "Can’t Find The Right Person?",
    "Try Again",
    "- Make a new search"
  );
}

// Sets all the placeholders with info dependending on the page loaded
function setSearchBox(searchText, searchHint, searchInfo) {
  let searchTextField = document.getElementById("searchText");
  searchTextField.innerHTML = searchText;

  let searchHintField = document.getElementById("searchHint");
  searchHintField.innerHTML = searchHint;

  let searchInfoField = document.getElementById("searchInfo");
  searchInfoField.innerHTML = searchInfo;

  let searchBoxContainer = document.getElementById("searchBoxContainer");
  searchBoxContainer.style.display = "block";
}
