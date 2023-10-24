import Link from 'next/link';
import React from 'react';

import Logo from '../logo/Logo';
import UserProfile from './UserProfile';

export default function Nav() {
  const routes = [
    {
      id: 'about',
      name: 'About',
      to: '#',
    },
    {
      id: 'blog',
      name: 'Blog',
      to: '#',
    },
    {
      id: 'pricing',
      name: 'Pricing',
      to: '#',
    },
    {
      id: 'contact_us',
      name: 'Contact us',
      to: '#',
    },
  ];

  return (
    <header>
      <nav>
        <Logo name="Treact" />
        <div className="nav-link">
          <div className="nav-mobile">
            <a href="#" id="nav-toggle">
              <span></span>
            </a>
          </div>
          {routes.map((route) => (
            <Link
              key={route.id}
              href={route.to}
              className={`text-base primary-text-color font-medium nav-element ${
                route?.id === routes?.[routes.length - 1]?.id
                  ? 'nav-last-right'
                  : ''
              } `}
            >
              {route.name}
            </Link>
          ))}

          <UserProfile />
        </div>
      </nav>
    </header>
  );
}
