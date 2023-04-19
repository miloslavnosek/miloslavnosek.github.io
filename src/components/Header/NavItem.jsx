import React from 'react';

export const NavItem = ({ href, title, activeClassName = '' }) => (
  <li>
    <a
      href={href}
      className={`font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out ${activeClassName}`}
    >
      {title}
    </a>
  </li>
);
