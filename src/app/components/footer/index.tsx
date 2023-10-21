import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../logo/Logo';

export default function Footer() {
  const socialMediaIcons = [
    {
      id: 'facebook',
      name: '/facebook.svg',
      url: '#',
    },
    {
      id: 'twitter',
      name: '/twitter.svg',
      url: '#',
    },
    {
      id: 'youtube',
      name: '/youtube.svg',
      url: '#',
    },
  ];

  const usefullFooterLinks = [
    {
      id: 'main',
      values: [
        { name: 'Blog', url: '#' },
        { name: 'FAQs', url: '#' },
        { name: 'Support', url: '#' },
        { name: 'About Us', url: '#' },
      ],
    },
    {
      id: 'product',
      values: [
        { name: 'Login', url: '#' },
        { name: 'Personal', url: '#' },
        { name: 'Business', url: '#' },
        { name: 'Team', url: '#' },
      ],
    },
    {
      id: 'press',
      values: [
        { name: 'Logos', url: '#' },
        { name: 'Events', url: '#' },
        { name: 'Stories', url: '#' },
        { name: 'Office', url: '#' },
      ],
    },
    {
      id: 'legal',
      values: [
        { name: 'GDPR', url: '#' },
        { name: 'Privacy Policy', url: '#' },
        { name: 'Terms of Service', url: '#' },
        { name: 'Disclaimer', url: '#' },
      ],
    },
  ];
  return (
    <div
      style={{
        backgroundColor: '#EDF2F7',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {usefullFooterLinks.map((footerLinks) => (
          <div key={footerLinks.id} style={{ display: 'grid' }}>
            <h3 className="text-lg font-semibold uppercase primary-text-color leading-10">
              {footerLinks.id}
            </h3>
            {footerLinks.values?.map((footerLink) => (
              <Link
                key={footerLink.name}
                href={footerLink.url}
                className="text-base primary-text-color text-decoration-none leading-9"
              >
                {footerLink.name}
              </Link>
            ))}
          </div>
        ))}

        <div>
          <h3 className="text-lg font-semibold uppercase primary-text-color leading-10">
            Subscribe to our newsletter
          </h3>

          <p className="text-base font-normal primary-text-color">
            We deliver high quality blog posts written by professionals weekly,
            And we promise no scam.
          </p>

          <div>
            <div className="flex rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              />
              <button
                type="button"
                className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '40px',
          paddingBottom: '60px',
        }}
      >
        <Logo name="Treact Inc." />

        <p className="text-sm primary-text-color">
          © 2018 Treact Inc. All Rights Reserved.
        </p>

        <div>
          {socialMediaIcons.map((socialMediaIcon) => (
            <Link
              href={socialMediaIcon.url}
              key={socialMediaIcon.id}
              style={{
                backgroundColor: '#1A202C',
                borderRadius: '20px',
                marginRight: '5px',
                marginLeft: '5px',
                padding: '10px',
              }}
            >
              <Image
                src={socialMediaIcon.name}
                alt={socialMediaIcon.id}
                width="15"
                height="15"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
