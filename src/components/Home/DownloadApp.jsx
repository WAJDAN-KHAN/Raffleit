import React from 'react';

export const DownloadApp = () => {
  return (
    <div className="pt-[30px] bg-[#D3EBE8] h-auto md:h-[548px] px-[15px] md:px-0">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="max-w-full md:max-w-[522px] mx-auto">
          <h1 className="lato font-bold text-[30px] md:text-[36px] leading-[48px] text-[#111827] py-3">
            Download our App now
          </h1>
          <p className="lato font-normal text-[17px] leading-[28px] text-[#374151]">
            Lorem ipsum dolor sit amet consectetur. Pellentesque risus non nulla habitant at egestas metus. Urna lectus
            et vel ut a ut orci varius.
          </p>
          <div className="flex gap-4 items-center pt-5">
            <img src="/assets/img/pkaystore.png" alt="" />
            <img src="/assets/img/appstore.png" alt="" />
          </div>
        </div>
        <div className="relative">
          <img src="/assets/img/iPhone-13-Pro.png" alt="" />
        </div>
      </div>
    </div>
  );
};
