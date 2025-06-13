export function validateForm() {
    let isValid = true;
    clearErrors();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    if (nameInput.value.trim().length < 2) {
      showError(nameInput, 'Name must be at least 2 characters');
      isValid = false;
    }
  
    if (!emailInput.value.includes('@')) {
      showError(emailInput, 'Email must be valid');
      isValid = false;
    }
  
    if (messageInput.value.trim().length < 20) {
      showError(messageInput, 'Message must be at least 20 characters');
      isValid = false;
    }
  
    return isValid;
  }
  
  export function attachFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  }
  
  function showError(input, message) {
    const error = document.createElement('span');
    error.className = 'error';
    error.textContent = message;
    input.parentNode.appendChild(error);
  }
  
  function clearErrors() {
    document.querySelectorAll('.error').forEach(e => e.remove());
  }
  