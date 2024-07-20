import React from 'react';

export const HeroSection = () => {
  return (
    <div className="md:py-[50px] py-[70px]">
      <div className=" container mx-auto px-[15px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  items-center ">
          <div className="relative">
            <img src="/assets/img/gradientEffect.svg" className=" absolute z-[-1]    bottom-[0px] right-0 " alt="" />
            <div className="max-w-full md:max-w-[522px] w-full">
              <h1 className="lato font-bold text-[30px] md:text-[48px] leading-[56px] text-[#111827]">
                Pretium adipiscing cras a malesuada pulvinar
              </h1>
              <p className="py-2 lato font-normal text-[16px] md:text-[18px] leading-[28px] text-[#374151]">
                Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing
                sociis arcu lorem porttitor.
              </p>
              <button className="bg-[#0F4841] mt-3 hover:bg-white hover:text-[#0F4841] transition-all border-2 border-transparent hover:border-[#0F4841]  py-[8px] px-[16px] rounded-[4px] text-white font-normal text-[16px]  ">
                Download the app
              </button>
            </div>
          </div>
          <div className="">
            <img src="/assets/img/PHONE.png" className="max-w-full h-auto object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
