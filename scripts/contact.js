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
    Object.values(fields).forEach(({ element, validations }) => {
      Object.entries(validations).forEach(([validationType, message]) => {
        const fieldError = element.nextElementSibling;

        if (element.validity[validationType]) {
          fieldError.textContent = message;
        } else {
          if (fieldError.innerText && fieldError.innerText === message) {
            fieldError.textContent = '';
          }
        }
      });
    });
  });
}
init();
