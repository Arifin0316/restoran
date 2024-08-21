const showMenu = (toggleID, navID) => {
  const toggle = document.querySelector(toggleID),
    nav = document.querySelector(navID);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};

showMenu('#nav-toggle', '#nav-menu');

// ketika link di click menu hilang
const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
  const navMenu = document.querySelector('#nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// ketika di scrol link actif
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollActive);

// mengubah baground heder ketika di scroll
function scrollHeader() {
  const nav = document.querySelector('#header');

  if (this.scrollY >= 200) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// menampilkan scrolltop
function scrolltop() {
  const scrolltop = document.querySelector('#scroll-top');

  if (this.scrollY >= 500) scrolltop.classList.add('scroll-top');
  else scrolltop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrolltop);



// dark mode
const darkButton = document.querySelector('#dark-mode');
const darkMode = "dark-mode";
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkMode) ? 'dark' : 'light';
const getCurrentIcon = () => darkButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkMode);
  darkButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

darkButton.addEventListener('click', () => {
  document.body.classList.toggle(darkMode);
  darkButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

// scrol reval animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal(`.home-data, .home-img,
            .about-data, .about-img,
             .menu-conten, .servis,
             .app-data, .app-img,
             .contact-data, .contact-button,
             .footer
            `, {
  interval: 200
});





