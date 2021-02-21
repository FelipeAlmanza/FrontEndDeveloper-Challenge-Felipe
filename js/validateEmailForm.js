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
      form.submit();
    },
  });
});
