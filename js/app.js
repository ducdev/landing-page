// build the nav

const buildTheNav = () => {
  const sections = document.querySelectorAll('section');
  const nav = document.getElementById('navbar__list');

  for (let i = 0; i < sections.length; i++) {
    const navItem = document.createElement('li');
    let section = sections[i];
    let sectionLabel = section.getElementsByTagName('h2')[0].innerText;
    const className = i === 0 ? 'menu__link active' : 'menu__link'
    navItem.innerHTML = `<div data-id=${section.id} class="${className}">${sectionLabel}</div>`;
    navItem.style.cursor = 'pointer';
    nav.appendChild(navItem);
  }
}

buildTheNav();

// Add class 'active' to section when near top of viewport

const addActive = (id) => {
  let previousItem = document.querySelector('.active-section');
  previousItem.classList.remove('active-section');
  let current = document.getElementById(id);
  current.classList.add('active-section');

  let previousBtn = document.querySelector('.active');
  if (previousBtn) {
      previousBtn.classList.remove('active');
  }
  let navBtn = document.querySelector(`[data-id = ${id}]`);
  navBtn.classList.add('active');
}

// onScroll event handler

const onScroll = () => {
  const sections = document.querySelectorAll('section');

  for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let area = section.getBoundingClientRect();

      const navBar = document.getElementById('navbar__list');
      let offset = navBar.getBoundingClientRect().height;
      if (area.bottom >= 0 + offset) {
          addActive(section.id);
          break;
      }
  }
}

document.addEventListener('scroll', onScroll);