const $ = (id) => document.getElementById(id);

document.addEventListener('scroll', () => {
  $('tothetop').style.display = window.scrollY !== 0 ? 'flex' : 'none';
});

const show_nav = () => ($('nav-mobile').style.display = 'block');

const close_nav = () => ($('nav-mobile').style.display = 'none');

const goTo = (id) => window.location.href = id;

const scrollToTop = () => window.scrollTo(0, 0);

const displaySuggestion = () => {
  $('section-two-title').innerHTML = 'Suggestion and Feedback';
  const form = $('contact-us-form')
  form.removeChild(form.children[3]);
  window.location.href = '#section-two';
}

const displayOrder = () => {
  $('section-two-title').innerHTML = 'Place Your Order';

  const gears = document.createElement('div');
  gears.innerHTML = `<div class='form-group' id='form-gears'>
    <label for='gears'>Gears</label> <br />
    <select name='gears' id='gears' class='form-control'>
      <option value='' selected disabled>Select Your Gear</option>
      <option value='Hiking Backpack'>Hiking Backpack</option>
      <option value='Tent'>Tent</option>
      <option value='Hiking Pack'>Hiking Pack</option>
      <option value='Modern Fishing Rod'>Modern Fishing Rod</option>
      <option value='Fishing Bucket'>Fishing Bucket</option>
      <option value='Fishing Bait'>Fishing Bait</option>
      <option value='Sleeping Bag'>Sleeping Bag</option>
    </select>
  </div>`;

  $('contact-us-form').insertBefore(gears, $('contact-us-form').children[3]);
  window.location.href = '#section-two';
}