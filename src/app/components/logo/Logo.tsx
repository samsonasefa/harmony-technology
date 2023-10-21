import Image from 'next/image';
import React from 'react';

export default function Logo({ name = '' }) {
  return (
    <div className="inline-flex self-center">
      <Image src="/treact_logo.svg" alt="Treact logo" width="50" height="30" />
      {name && (
        <h3 className="text-xl font-extrabold primary-text-color">{name}</h3>
      )}
    </div>
  );
}
