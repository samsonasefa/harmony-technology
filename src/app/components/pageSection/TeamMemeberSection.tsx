import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TeamMemeberSection() {
  const users = [
    {
      id: 1,
      name: 'Adam Cuppy',
      function: 'Founder',
    },
    {
      id: 2,
      name: 'Charlotte Hale',
      function: 'Sr. Designer',
    },
    {
      id: 3,
      name: 'Silvester Wize',
      function: 'Jr. Designer',
    },
    {
      id: 4,
      name: 'Himali Turn',
      function: 'Lead Developer',
    },
    {
      id: 5,
      name: 'Sr. Developer',
      function: 'Troye Sivan',
    },
    {
      id: 6,
      name: 'Quality Assurance',
      function: 'Holo wo',
    },
  ];
  const socialMedia = [
    {
      id: 'twitter',
      url: '#',
    },
    {
      id: 'linkedin',
      url: '#',
    },
    {
      id: 'github',
      url: '#',
    },
  ];

  return (
    <div className="team-grid">
      {users?.map((user) => (
        <div
          key={user.id}
          className="flex flex-column bg-white border shadow-sm rounded-xl"
        >
          <Image
            src={`/users/${user.id}.png`}
            alt={user.name}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded team-user-image"
          />
          <div className="p-4 flex flex-column align-center pt-2-5 p-1">
            <p className="text-xs secondary-text-color uppercase p-1">
              {user.function}
            </p>

            <p className="text-lg primary-text-color font-semibold pt-1 pb-2">
              {user.name}
            </p>

            <div className="flex justify-between w-60 pt-2-5">
              {socialMedia?.map((icon) => (
                <Link href={icon.url} key={icon.id}>
                  <Image
                    src={`/icons/${icon.id}.svg`}
                    alt={icon.id}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
