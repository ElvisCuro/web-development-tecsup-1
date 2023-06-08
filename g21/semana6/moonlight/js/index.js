'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const headerNav = document.querySelector('.header-nav');

  const menuButton = document.getElementById('headerNavMenuIconContainer');
  const closeButton = document.getElementById('headerNavMenuCloseIconContainer');
  const linksMenu = document.querySelector('.header-nav__menu-link-list');
  // const links = document.querySelectorAll('.header-nav__menu-link');

  const heroTitle = document.querySelector('.hero__title');
  const heroLearnButton = document.querySelector('.hero__learn-button');
  const heroStarts = document.querySelector('.hero__stars-image-container');
  const heroMoon = document.querySelector('.hero__moon-image-container');
  const heroMountainsBehind = document.querySelector('.hero__mountains-behind-image-container');
  const heroMountainsFront = document.querySelector('.hero__mountains-front-image-container');

  const openMenu = () => linksMenu.classList.add('header-nav__menu-link-list--open');

  const closeMenu = () => linksMenu.classList.remove('header-nav__menu-link-list--open');

  linksMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
    headerNav.classList.toggle('header-nav--scroll', scrollY > 0);

    heroTitle.style.transform = `translate(-${scrollY * 1.25}px, ${scrollY * 0.25}px)`;
    heroLearnButton.style.transform = `translate(-50%, ${scrollY * 0.25}px)`;
    heroStarts.style.transform = `translate(0, -${scrollY * 0.15}px)`;
    heroMoon.style.top = `-${scrollY * 0.5}px)`;
    heroMountainsBehind.style.transform = `translate(0, ${scrollY * 0.20}px)`;
    heroMountainsFront.style.transform = `translate(0, ${scrollY * 0.25}px)`;
  });

  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  // links.forEach(element => element.addEventListener('click', closeMenu));
});