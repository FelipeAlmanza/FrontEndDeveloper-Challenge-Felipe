const timeout = 1000;

$(document).ready(function () {
  $("#emailForm").validate({
    rules: {
      email: {
        email: true,
      },
    },

    messages: {
      email: {
        email: "Please add a valid email address",
      },
    },

    submitHandler: function (form, e) {
      const email = document.getElementById("email").value;

      // Code for hiding elements in screen and then display a loading modal
      document.getElementById("searchBoxContainer").style.visibility = "hidden";
      document.getElementById("additionalInfoContainer").style.visibility =
        "hidden";
      document.getElementById("modal").style.display = "block";

      let redirectLocation = "results.html";
      // Send email in query string to results url to process the request
      // Simulate search time with timeout
      if (email) {
        setTimeout(function () {
          window.location = redirectLocation + attachEmailToUrl(email);
        }, timeout);
      }
      // If email is empty
      else {
        setTimeout(function () {
          window.location = redirectLocation;
        }, timeout);
      }
    },
  });
});

function attachEmailToUrl(email) {
  return "?email=" + email;
}
