import Button from '@/components/button/button';
import Link from 'next/link';
import React from 'react';

export default function UserProfile() {
  // if the user is new show login and sign up or else
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
          <Button key={route.id} className="nav-element">
            <Link href={route.to} className="text-base text-white font-medium">
              {route.name}
            </Link>
          </Button>
        ) : (
          <Link
            key={route.id}
            href={route.to}
            className={`text-base primary-text-color font-medium nav-element ${
              route?.id === landingRoutes?.[0]?.id ? 'nav-link-left' : ''
            } `}
          >
            {route.name}
          </Link>
        )
      )}
    </>
  );

  // if the user is logged in
  // TODO: show user profile and logged out button
}
