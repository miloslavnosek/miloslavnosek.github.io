import React from 'react';
import { NavItem } from './NavItem'

export const Nav = () => (
  <nav
    className="items-center w-full md:w-auto md:hidden md:flex text-gray-600 dark:text-slate-200 h-screen md:h-auto hidden"
    aria-label="Main navigation"
    id="menu"
  >
    <ul
      className="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto collapsed text-xl md:text-base"
    >
      <NavItem
        href="#about"
        title="About"
        activeClassName="underline underline-offset-[7px] decoration-[3px] decoration-secondary-500"
      />
      <NavItem href="#tech" title="Technologies" />
      <NavItem href="#apps" title="Apps" />
      <NavItem href="#contact" title="Get in touch" />
    </ul>
  </nav>
);
