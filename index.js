form = document.querySelector('.signup-form');
feedback = document.querySelector('.feedback');

const usernamePattern = /^\w{6,}$/;
// ensure at least 6 characters long, 1 symbol and no whitespace
const passwordPattern = /^(?=.*\w)(?=.*\W)(?!.*\s).{6,}$/;

// functions
const getStatusColor = status => {
  switch (status) {
    case 'error':
      return 'red';
    case 'success':
      return 'green';
  }
};

const displayMessage = (status, message) => {
  feedback.style.color = getStatusColor(status);
  feedback.innerText = message;
};

form.addEventListener('submit', e => {
  // prevent flashing when submitting the form
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  feedback.removeAttribute('class');
  feedback.style.display = 'block';

  if (!usernamePattern.test(username)) {
    displayMessage(
      'error',
      'username must contain letters and numbers only & at least 6 characters long'
    );
    return;
  }

  if (!passwordPattern.test(password)) {
    displayMessage(
      'error',
      'password must be at least 6 characters long with one symbol and no whitespace'
    );
    form.password.setAttribute('class', 'error');
    return;
  }

  form.password.setAttribute('class', 'success');
  displayMessage('success', 'thanks for signing up');
});

// keyup event for live feedback
form.username.addEventListener('keyup', e => {
  if (!usernamePattern.test(e.target.value)) {
    e.target.setAttribute('class', 'error');
  } else {
    e.target.setAttribute('class', 'success');
  }
});
