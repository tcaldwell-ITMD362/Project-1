// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $("html").addClass("hasjs");
  $("#submit").on("click", function () {
    let inputString = document.forms.appointment.fname.value
    let firstUppercase = /^[A-Z]/.test(inputString);
    if (!firstUppercase) {
      alert("Name should start with an uppercase letter.");
    }
  });
});
