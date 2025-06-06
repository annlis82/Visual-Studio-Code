
function toggleMenu() {
  const menu = document.getElementById('menu');
  const hamburger = document.querySelector('.hamburger');

  if (menu && hamburger) {
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  hamburger?.addEventListener('click', toggleMenu);
});

console.log("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", 
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
  
     if (email) {
      button.textContent = "sending";
      button.disabled = "true";
  
      setTimeout (() => {
        button.setAttribute ("style", "display:none;");
  
        const el = document.createElement("p")
        el.innerHTML = "Thank you for signing up to our newsletter";
        form.appendChild(el);
      }, 3000);
       } 
      form.reset();
     });
  });
  