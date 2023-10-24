import Button from '@/components/button/button';
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
      name: '/twitter2.svg',
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
    <footer>
      <div className="container">
        <div className="footer-grid">
          {usefullFooterLinks.map((footerLinks) => (
            <div key={footerLinks.id} className="flex flex-column">
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

          <div className="col-span-2 flex flex-column justify-between">
            <h3 className="text-lg font-semibold uppercase primary-text-color leading-10">
              Subscribe to our newsletter
            </h3>

            <p className="text-base  tertiary-text-color pt-2-5 pb-2-5">
              We deliver high quality blog posts written by professionals
              weekly, And we promise no scam.
            </p>

            <div>
              <div className="flex rounded-md shadow-sm">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm bg-input border"
                />
                <Button className="group-btn">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="flex justify-between align-center">
          <Logo className="footer-logo" name="Treact Inc." />

          <p className="text-sm tertiary-text-color">
            © 2018 Treact Inc. All Rights Reserved.
          </p>

          <div className="flex">
            {socialMediaIcons.map((socialMediaIcon) => (
              <Link
                href={socialMediaIcon.url}
                key={socialMediaIcon.id}
                className="footer-socialMedia-img"
              >
                <Image
                  src={`/icons/${socialMediaIcon.name}`}
                  alt={socialMediaIcon.id}
                  width="15"
                  height="15"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
