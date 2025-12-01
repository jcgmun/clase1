function init() {
  const contactForm = document.getElementById('contact-form');
  const fields = {
    name: {
      element: document.getElementById('contact-form__name'),
      validations: {
        valueMissing: 'Please enter your name',
      },
    },
    email: {
      element: document.getElementById('contact-form__email'),
      validations: {
        valueMissing: 'Please enter your email address',
        typeMismatch: 'Please enter a valid email address',
      },
    },
    subject: {
      element: document.getElementById('contact-form__subject'),
      validations: {
        valueMissing: 'Please fill out the subject field',
      },
    },
    message: {
      element: document.getElementById('contact-form__message'),
      validations: {
        valueMissing: 'Please enter your message',
      },
    },
  };
  contactForm.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent);
    console.log(fields);
    const nameValidity = fields.name.element.validity;
    const emailValidity = fields.email.element.validity;
    const subjectValidity = fields.subject.element.validity;
    const messageValidity = fields.message.element.validity;
    console.log(nameValidity);
    console.log(emailValidity);
    console.log(subjectValidity);
    console.log(messageValidity);
  });
}
init();
