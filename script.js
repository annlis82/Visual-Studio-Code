document.addEventListener(DOMContentLoaded), 
function () {
  const form = document.getElementById
  ("contact-form");

  const button =
  document.getElementById
  ("contact_form_submit_button");

  form.addEventListener ("submit",
    function(event) {
      event.preventDefault();

   const firstName = document.getElementById
   ("first_name").value;

   const email = document.getElementById
   ("email").value;
}