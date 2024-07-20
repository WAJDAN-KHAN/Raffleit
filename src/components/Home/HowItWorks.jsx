import React from 'react';

const sections = [
  {
    title: '1. Pretium adipiscing malesuada',
    text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius. In mauris vestibulum praesent facilisi tincidunt lorem at.',
    imgSrc: '/assets/img/mobile1.png',
    starPosition: 'top-[-80px]',
  },
  {
    title: '2. Pretium adipiscing malesuada',
    text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius. In mauris vestibulum praesent facilisi tincidunt lorem at.',
    imgSrc: '/assets/img/phone2.png',
    starPosition: 'top-[50px]',
  },
  {
    title: '3. Pretium adipiscing malesuada',
    text: 'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius. In mauris vestibulum praesent facilisi tincidunt lorem at.',
    imgSrc: '/assets/img/phone3.png',
    starPosition: 'top-[-80px]',
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto px-[15px]">
        {sections.map((section, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {index % 2 === 0 ? (
              <>
                <div className="relative">
                  <img
                    src="/assets/img/Star 2.png"
                    className={`absolute hidden md:block right-0 ${section.starPosition}`}
                    alt=""
                  />
                  <div className="md:max-w-[522px] w-full mx-auto max-w-full">
                    <h3 className="lato font-normal text-[16px] leading-[24px] text-[#0F4841]">HOW IT WORKS</h3>
                    <h1 className="lato font-bold  text-[28px] leading-1  md:text-[36px] md:leading-[48px] text-[#111827] py-3">
                      {section.title}
                    </h1>
                    <p className="lato font-normal text-[17px] leading-[28px] text-[#374151]">{section.text}</p>
                  </div>
                </div>
                <div className="mx-auto">
                  <img src={section.imgSrc} className="max-w-full h-auto object-cover" alt="" />
                </div>
              </>
            ) : (
              <>
                <div className="relative">
                  <img src={section.imgSrc} className="max-w-full h-auto object-cover mx-auto" alt="" />
                  <img
                    src="/assets/img/Star 2.png"
                    className={`absolute hidden md:block ${section.starPosition}`}
                    alt=""
                  />
                </div>
                <div className="relative">
                  <div className="md:max-w-[522px] w-full mx-auto max-w-full">
                    <h3 className="lato font-normal text-[16px] leading-[24px] text-[#0F4841]">HOW IT WORKS</h3>
                    <h1 className="lato font-bold  text-[28px] leading-1  md:text-[36px] md:leading-[48px] text-[#111827] py-3">
                      {section.title}
                    </h1>
                    <p className="lato font-normal text-[17px] leading-[28px] text-[#374151]">{section.text}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
