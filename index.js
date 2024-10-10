form = document.querySelector('.signup-form');
feedback = document.querySelector('.feedback');

const usernamePattern = /^\w{6,}$/;
// ensure at least 6 characters long, 1 symbol and no whitespace
const passwordPattern = /^(?=.*\w)(?=.*\W)(?!.*\s).{6,}$/;

form.addEventListener('submit', e => {
  // prevent flashing when submitting the form
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  feedback.removeAttribute('class');
  feedback.style.display = 'block';

  if (!usernamePattern.test(username)) {
    feedback.style.color = 'red';
    feedback.innerText =
      'username must contain letters and numbers only & at least 6 characters long';
    return;
  }

  if (!passwordPattern.test(password)) {
    feedback.style.color = 'red';
    feedback.innerText =
      'password must be at least 6 characters long with one symbol and no whitespace';
    return;
  }

  feedback.style.color = 'green';
  feedback.innerText = 'username is valid';
});

// keyup event for live feedback
form.username.addEventListener('keyup', e => {
  if (!usernamePattern.test(e.target.value)) {
    e.target.setAttribute('class', 'error');
  } else {
    e.target.setAttribute('class', 'success');
  }
});
