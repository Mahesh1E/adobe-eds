export default function decorate(block) {
// Extract columns from authoring (if any)
const navItems = [];

[...block.children].forEach((row) => {
const cols = [...row.children];

if (cols[0]) {
  navItems.push({
    label: cols[0].textContent.trim(),
    link: cols[1]?.textContent?.trim() || '#',
  });
}

});

// Clear block
block.textContent = '';

// Header wrapper
const header = document.createElement('header');
header.className = 'header';

const container = document.createElement('div');
container.className = 'header__container';

// Logo
const logo = document.createElement('a');
logo.className = 'header__logo';
logo.href = '/';
logo.textContent = 'Definity Careers';

// Nav
const nav = document.createElement('nav');
nav.className = 'header__nav';

navItems.forEach((item) => {
const a = document.createElement('a');
a.href = item.link;
a.textContent = item.label;
nav.appendChild(a);
});

// CTA
const cta = document.createElement('div');
cta.className = 'header__cta';

const ctaBtn = document.createElement('a');
ctaBtn.className = 'button button--primary';
ctaBtn.href = '/jobs';
ctaBtn.textContent = 'View Open Positions';

cta.appendChild(ctaBtn);

// Mobile button
const toggle = document.createElement('button');
toggle.className = 'header__toggle';
toggle.setAttribute('aria-label', 'Menu');
toggle.textContent = '☰';

// Append structure
container.appendChild(logo);
container.appendChild(nav);
container.appendChild(cta);
container.appendChild(toggle);

header.appendChild(container);
block.appendChild(header);

// Simple mobile toggle
toggle.addEventListener('click', () => {
nav.classList.toggle('header__nav--open');
});
}
