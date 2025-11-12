function init() {
  const contactForm = document.getElementById('contact-form');
  const fields = {
    name: {
      element: document.getElementById('contact-form__name'),
      validations: {
        valueMissing: 'Please enter your name',
      },
    },
    email: document.getElementById('contact-form__email'),
    subject: document.getElementById('contact-form__subject'),
    message: document.getElementById('contact-form__message'),
  };
  contactForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent);
    console.log(fields);
    const nameValidity = fields.name.element.validity;
    console.log(nameValidity);
  });
}
init();
