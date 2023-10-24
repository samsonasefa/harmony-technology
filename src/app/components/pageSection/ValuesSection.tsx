import Image from 'next/image';
import React from 'react';

export default function ValuesSectio() {
  const values = [
    {
      title: '24/7 Support',
      icon: 'headset',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      title: 'Strong Teams',
      icon: 'bolt-shield',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
    {
      title: 'Customer Satisfaction',
      icon: 'user-love',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];

  return (
    <div className="flex justify-center align-center values-container">
      {values?.map((value) => (
        <div
          key={value.title}
          className="flex flex-column justify-center align-center values-item"
        >
          <div className="flex justify-center align-center values-icon">
            <Image
              src={`/icons/${value.icon}.svg`}
              alt={value.title}
              width={30}
              height={30}
            />
          </div>
          <p className="text-lg font-semibold primary-text-color pt-4 pb-4 text-center">
            {value.title}
          </p>
          <p className="text-center text-base tertiary-text-color">
            {value.content}
          </p>
        </div>
      ))}
    </div>
  );
}
