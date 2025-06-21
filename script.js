document.addEventListener('DOMContentLoaded', () => {
  const loginPopup = document.getElementById('login-popup');
  const loginForm = document.getElementById('login-form');

  // Keep popup visible by default (blocking content)
  loginPopup.style.display = 'flex';

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // For demo: just check if fields are filled
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email && password) {
      // "Login successful" - hide popup
      loginPopup.style.display = 'none';
    } else {
      alert('Please enter both email and password.');
    }
  });
});
