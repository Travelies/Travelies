const showErr = (msg, label) => {
  const errDiv = document.createElement('div');
  errDiv.className = 'err-msg';
  errDiv.innerHTML = msg;

  const div = $(`form-${label}`);
  div.appendChild(errDiv);
};

const removeErr = () => {
  const err = document.getElementsByClassName('err-msg');
  Array.from(err).forEach((item) => item.remove());
};

const checkEmail = (email) => {
  const at = email.indexOf('@');
  const dot = email.indexOf('.');
  
  if (at < 1) return false;
  if (dot < 1 || dot <= at + 2) return false;
  if (dot == email.length - 1) return false;
  if (email.includes('..')) return false;

  return true;
}

const validateForm = () => {
  const { value: name } = $('name');
  const { value: email } = $('email');
  const { value: phone } = $('phone');
  const { value: service } = $('services');
  const { value: message } = $('message');
  const gears = $('gears');

  removeErr();

  if (!name) {
    showErr('Name cannot be empty', 'name');
  } else if (name.length < 4) {
    showErr('Name must be at least four characters', 'name');
  } else if (!email) {
    showErr('Email cannot be empty', 'email');
  } else if (email && !checkEmail(email)) {
    showErr('Invalid email format', 'email');
  } else if (!phone) {
    showErr('Phone cannot be empty', 'phone');
  } else if (!+phone) {
    showErr('Phone must be numerical format', 'phone');
  } else if (!phone.startsWith('08')) {
    showErr('Phone must starts with 08', 'phone');
  } else if (phone.length < 10 || phone.length > 14) {
    showErr(
      'Phone must be at least 10 numbers and maximum 14 characters',
      'phone'
    );
  } else if (gears && !gears.value) {
    showErr('Gears cannot be empty', 'gears')
  } else if (!service) {
    showErr('Service must be filled', 'service');
  } else if (!message) {
    showErr('message must be filled', 'message');
  } else {
    alert('Suggestion has been accepted');
    location.href = 'index.html';
  }
};

const displaySuggestion = () => {
  $('section-two-title').innerHTML = 'Suggestion and Feedback';
  const form = $('form');
  
  const gears_index = Array.from(form.children).findIndex(div => div.id == 'form-gears');
  if (gears_index != -1) form.removeChild(form.children[gears_index]);
  
  window.location.href = '#section-two';
}

const displayOrder = () => {
  $('section-two-title').innerHTML = 'Place Your Order';

  const gears = document.createElement('div');
  gears.setAttribute('class', 'form-group');
  gears.setAttribute('id', 'form-gears');

  gears.innerHTML = 
  `<label for='gears'>Gears</label> <br />
  <select name='gears' id='gears' class='form-control'>
    <option value='' selected disabled>Select Your Gear</option>
    <option value='Hiking Backpack'>Hiking Backpack</option>
    <option value='Tent'>Tent</option>
    <option value='Hiking Pack'>Hiking Pack</option>
    <option value='Modern Fishing Rod'>Modern Fishing Rod</option>
    <option value='Fishing Bucket'>Fishing Bucket</option>
    <option value='Fishing Bait'>Fishing Bait</option>
    <option value='Sleeping Bag'>Sleeping Bag</option>
  </select>`;

  $('form').insertBefore(gears, $('form').children[3]);
  window.location.href = '#section-two';
}
