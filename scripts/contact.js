function init() {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent);
  });
}
init();
