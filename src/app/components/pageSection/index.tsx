import Button from '@/components/button/button';
import Image from 'next/image';
import React from 'react';

import TeamMemeberSection from './TeamMemeberSection';
import ValuesSection from './ValuesSection';

export default function PageSection() {
  const sections = [
    {
      title: 'About Treact',
      contentTitle: 'We are a modern design agency.',
      contentSubtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sectionType: 'SECTIONTYPEONE',
      content: 'See Portfolio',
    },
    {
      title: 'Our vision',
      contentTitle: 'We aim to disrupt the design space.',
      contentSubtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      sectionType: 'SECTIONTYPEONE',
      content: 'Contact Us',
    },
    {
      title: 'Our values',
      contentTitle: 'We follow these.',
      contentSubtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: <ValuesSection />,
    },
    {
      title: 'Our team',
      contentTitle: 'Meet These Fine Folks.',
      contentSubtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      content: <TeamMemeberSection />,
    },
  ];

  return (
    <>
      {sections?.map((section, idx) => (
        <section key={section.title}>
          {section?.sectionType === 'SECTIONTYPEONE' ? (
            <div
              className={`container-first ${
                idx % 2 !== 0 ? 'row-reverse' : ''
              } `}
            >
              <div
                className={`content ${
                  idx % 2 !== 0 ? 'section-type-two' : ''
                } `}
              >
                <p className="secondary-text-color text-sm font-semibold uppercase">
                  {section.title}
                </p>
                <h2 className="primary-text-color font-extrabold text-5xl py-4 section-content-title ">
                  {section.contentTitle}
                </h2>
                <p className="text-base tertiary-text-color pt-4 pb-8">
                  {section.contentSubtitle}
                </p>
                <Button>{section.content}</Button>
              </div>

              <Image
                src={`/image${idx}.jpeg`}
                alt="image_one"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded section-image"
              />
            </div>
          ) : (
            <div className="flex flex-column align-center">
              <p className="secondary-text-color text-sm font-semibold uppercase">
                {section.title}
              </p>
              <h2 className="text-center primary-text-color font-extrabold text-5xl pt-4 pb-4 section-content-title">
                {section.contentTitle}
              </h2>
              <p className="text-center text-base tertiary-text-color w-40 my-4 section-content-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              {section?.content}
            </div>
          )}
        </section>
      ))}
    </>
  );
}
