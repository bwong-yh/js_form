form = document.querySelector('.signup-form');
feedback = document.querySelector('.feedback');

const pattern = /^\w{6,}$/;

form.addEventListener('submit', e => {
  // prevent flashing when submitting the form
  e.preventDefault();

  const username = form.username.value;

  feedback.removeAttribute('class');
  feedback.style.display = 'block';

  if (!pattern.test(username)) {
    feedback.style.color = 'red';
    feedback.innerText =
      'username must contain letters and numbers only & at least 6 characters long';
    return;
  }

  feedback.style.color = 'green';
  feedback.innerText = 'username is valid';
});

// keyup event for live feedback
form.username.addEventListener('keyup', e => {
  if (!pattern.test(e.target.value)) {
    e.target.setAttribute('class', 'error');
  } else {
    e.target.setAttribute('class', 'success');
  }
});
