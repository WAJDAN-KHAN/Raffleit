import React from 'react';

const faqs = [
  {
    question: '1. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: '#20635B',
    textColor: 'text-white',
  },
  {
    question: '2. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: 'transparent',
    textColor: 'text-[#111827]',
  },
  {
    question: '3. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: 'transparent',
    textColor: 'text-[#111827]',
  },
  {
    question: '4. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: '#20635B',
    textColor: 'text-white',
  },
  {
    question: '5. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: '#20635B',
    textColor: 'text-white',
  },
  {
    question: '6. Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus et vel ut a ut orci varius.',
    bgColor: 'transparent',
    textColor: 'text-[#111827]',
  },
];

export const Faq = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto px-[15px]">
        <h3 className="lato font-normal text-[16px] leading-[24px] text-[#0F4841]">FAQ</h3>
        <h1 className="lato font-bold text-[36px] leading-[48px] text-[#111827] py-3">Frequently asked questions</h1>
        <div className="py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-[6px] p-4  ${faq.textColor}`} style={{ background: faq.bgColor }}>
                <h1 className="lato font-bold text-[18px] md:text-[24px] md:leading-[36px] pb-3">{faq.question}</h1>
                <p className="lato font-normal text-[16px] leading-[28px]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
