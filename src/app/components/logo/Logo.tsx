import Image from 'next/image';
import React from 'react';

export default function Logo({ name = '', className = '' }) {
  return (
    <div className="inline-flex self-center">
      <Image
        src="/icons/treact_logo.svg"
        alt="Treact logo"
        width="30"
        height="30"
        style={{
          marginRight: '10px',
        }}
        className="self-center"
      />
      {name && (
        <h3
          className={`text-2xl font-extrabold primary-text-color ${className}`}
        >
          {name}
        </h3>
      )}
    </div>
  );
}
