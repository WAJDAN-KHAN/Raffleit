import React from 'react';

export const Footer = () => {
  return (
    <div className="py-[40px] bg-[#FFFBF0]">
      <div className="container mx-auto px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-0">
          <div className="">
            <div className="logo max-w-[171px] w-full">
              <img src="/assets/img/Frame 458.svg" className="w-full h-auto object-cover" alt="logo" />
            </div>
            <p className="lato font-normal text-[14px] leading-[20px] mt-3 text-[#374151] max-w-full w-full md:max-w-[305px]">
              Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas.
            </p>
          </div>
          <div className="">
            <h1 className="lato font-semibold text-[18px] leading-[28px] mb-3 text-[#111827]">Quick Links</h1>
            <ul className="flex flex-col gap-3  list-none">
              <li className="lato font-normal text-[14px] leading-[20px]  text-[#374151]">About</li>
              <li className="lato font-normal text-[14px] leading-[20px]  text-[#374151]">How it works</li>
              <li className="lato font-normal text-[14px] leading-[20px]  text-[#374151]">Faq</li>
            </ul>
          </div>
          <div className="">
            <h1 className="lato font-semibold text-[18px] leading-[28px] mb-3 text-[#111827]">Newsletter</h1>
            <p className="lato font-normal text-[14px] leading-[20px] mb-3 text-[#374151] max-w-full w-full md:max-w-[253px]">
              Subscribe our newsletter to get our latest update & news
            </p>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Your e-mail"
                className="bg-white py-[8px] px-[12px] md:max-w-[365px]  max-w-full w-full rounded-[4px] border  border-[#D1D5DB] outline-none placeholder:text-[#6B7280] placeholder:text-[16px] placeholder:font-normal "
              />
              <img src="/assets/img/btnpri.png" className="cursor-pointer" alt="" />
            </div>
          </div>
        </div>
        <div className="pt-6 pb-3">
          <div className="border border-[#FAEAB5]"></div>
        </div>
        <div className="flex justify-center">
          <p className="lato font-normal   text-[14px] leading-[20px] mt-3 text-[#374151] max-w-full w-full md:max-w-[305px]">
            © Copyright 2024. All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
