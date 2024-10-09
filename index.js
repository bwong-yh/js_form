form = document.querySelector('.signup-form');
feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
  // prevent flashing when submitting the form
  e.preventDefault();

  const pattern = /^\w{6,}$/;
  const username = form.username.value;

  feedback.style.display = 'block';

  if (!pattern.test(username)) {
    feedback.innerText =
      'username must contain letters and numbers only & at least 6 characters long';
    return;
  }

  feedback.innerText = 'username is valid';
});
