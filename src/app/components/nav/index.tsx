import Button from '@/components/button/button';
import Link from 'next/link';
import React from 'react';

import Logo from '../logo/Logo';

export default function Nav() {
  const routes = [
    {
      id: 'home',
      name: 'Home',
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
    <nav>
      <Logo name="Treact" />
      <div
        style={{
          width: '40%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {routes.map((route) => (
          <Link
            key={route.id}
            href={route.to}
            className="text-base primary-text-color font-medium"
          >
            {route.name}
          </Link>
        ))}

        <UserProfile />
      </div>
    </nav>
  );
}

const UserProfile = () => {
  // if the user is new
  const landingRoutes = [
    {
      id: 'login',
      name: 'Login',
      to: '#',
    },
    {
      id: 'signup',
      name: 'Sign Up',
      to: '#',
      active: true,
    },
  ];

  return (
    <>
      {landingRoutes.map((route) =>
        route.active ? (
          <Button key={route.id}>
            <Link href={route.to} className="text-base text-white font-medium">
              {route.name}
            </Link>
          </Button>
        ) : (
          <Link
            key={route.id}
            href={route.to}
            className="text-base primary-text-color font-medium"
          >
            {route.name}
          </Link>
        )
      )}
    </>
  );

  // if the user is logged in
  // TODO: show user profile and logged out button
};
