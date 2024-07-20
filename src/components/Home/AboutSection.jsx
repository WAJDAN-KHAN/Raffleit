import React from 'react';

const list = [
  {
    id: 1,
    name: ' Scelerisque adipiscing sociis arcu lorem',
    desc: `  Lorem ipsum dolor sit amet consectetur. At mi ac in lacus neque proin ut amet sed. Tortor lorem massa
        dui nibh fringilla non.`,
  },
  {
    id: 2,
    name: ' Scelerisque adipiscing sociis arcu lorem',
    desc: `  Lorem ipsum dolor sit amet consectetur. At mi ac in lacus neque proin ut amet sed. Tortor lorem massa
        dui nibh fringilla non.`,
  },
  {
    id: 3,
    name: ' Scelerisque adipiscing sociis arcu lorem',
    desc: `  Lorem ipsum dolor sit amet consectetur. At mi ac in lacus neque proin ut amet sed. Tortor lorem massa
        dui nibh fringilla non.`,
  },
];

export const AboutSection = () => {
  return (
    <div className="pt-[40px] bg-[#FFFBF0]">
      <div className=" container mx-auto px-[15px]">
        <div className="text-center md:max-w-[574px] w-full mx-auto max-w-full">
          <h3 className="lato font-normal text-[16px] leading-[24px] text-[#0F4841]  ">ABOUT</h3>
          <h1 className="lato font-bold text-[36px] leading-[48px] text-[#111827]  py-3 ">
            Pretium adipiscing cras malesuada
          </h1>
          <p className="lato font-normal text-[17px] leading-[28px] text-[#374151]  ">
            Cum et convallis risus placerat aliquam, nunc scelerisque aliquet faucibus tincidunt
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  py-4 items-center ">
          <div className=" relative">
            <img src="/assets/img/Star 2.png" className="absolute top-[50px]" alt="" />
            <img src="/assets/img/aboutPhone.png" className="max-w-full h-auto object-contain" alt="" />
          </div>
          <div className="max-w-full  md:max-w-[522px] w-full mx-auto flex flex-col gap-3">
            {list.map((item) => (
              <div className="flex gap-3 items-start ">
                <img src="/assets/img/Frame 462.png" alt="" />
                <div>
                  <h1 className="lato font-bold text-[24px] mb-2 leading-[36px] text-[#111827]">{item.name}</h1>
                  <p className="lato font-normal text-[16px] leading-[28px] text-[#374151]  ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
