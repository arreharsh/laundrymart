import React, { useEffect } from 'react';

const MobileMenu = () => {
  useEffect(() => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');

    if (!toggle || !nav) return;

    const handleToggleClick = () => {
      nav.classList.toggle('active');
      document.body.classList.toggle('nav-open');
    };

    toggle.addEventListener('click', handleToggleClick);

    const submenuLinks = document.querySelectorAll('.has-submenu > a');
    submenuLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        link.parentElement.classList.toggle('active');
      });
    });

    const navLinks = document.querySelectorAll('.mobile-nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.classList.remove('nav-open');
      });
    });

    return () => {
      toggle.removeEventListener('click', handleToggleClick);
    };
  }, []);

  return (
    <button className="menu-toggle" aria-label="Toggle menu">
      <span className="menu-icon"></span>
    </button>
  );
};

export default MobileMenu;
