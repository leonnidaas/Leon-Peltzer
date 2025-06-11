document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('message-confirmation').textContent = "Merci pour votre message !";
  this.reset();
});
