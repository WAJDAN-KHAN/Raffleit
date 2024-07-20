import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const listItem = [
  { id: 1, name: 'Home', to: 'home' },
  { id: 2, name: 'About Us', to: 'about' },
  { id: 3, name: 'How it works', to: 'howWorks' },
  { id: 4, name: 'Faq', to: 'faq' },
];

export const Header = () => {
  const [bgColor, setBgColor] = useState('bg-transparent'); // Default background color
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Change 50 to the scroll threshold you prefer
        setBgColor('bg-white'); // Background color when scrolled
      } else {
        setBgColor('bg-transparent'); // Background color when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`py-[20px] ${bgColor} w-full fixed top-0 z-[2] transition-all`}>
      <div className="container mx-auto px-[15px]">
        <div className="flex justify-between items-center">
          <div className="logo max-w-[171px] w-full">
            <img src="/assets/img/Frame 458.svg" className="w-full h-auto object-cover" alt="logo" />
          </div>
          <div className="flex items-center gap-8">
            <ul className="md:flex hidden gap-8 items-center p-0 m-0 list-none">
              {listItem.map((item) => (
                <li key={item.id} className="text-[#0F4841] text-[16px] font-semibold leading-[24px] cursor-pointer">
                  <ScrollLink to={item.to} smooth={true} duration={500} className="cursor-pointer hover:text-[#F0BF22]">
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div>
              <ScrollLink to={'download'} smooth={true} duration={500}>
                <button className="bg-[#F0BF22] hidden md:block hover:bg-white hover:text-[#F0BF22] transition-all border-2 border-transparent hover:border-[#F0BF22] py-[8px] px-[16px] rounded-[4px] text-white font-normal text-[16px]">
                  Download the app
                </button>
              </ScrollLink>
            </div>
          </div>
          <div className="block md:hidden">
            <img src="/assets/img/menu.png" alt="Menu" onClick={toggleDrawer} className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-[3]`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-[18px] font-semibold"></h2>
          <button onClick={toggleDrawer} className="focus:outline-none">
            <img src="/assets/img/close.png" alt="Close" />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-4 list-none">
          {listItem.map((item) => (
            <li key={item.id} className="text-[#0F4841] text-[16px] font-semibold leading-[24px]">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#F0BF22]"
                onClick={toggleDrawer}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <ScrollLink to={'download'} smooth={true} duration={500}>
            <button className="bg-[#F0BF22] w-full hover:bg-white hover:text-[#F0BF22] transition-all border-2 border-transparent hover:border-[#F0BF22] py-[8px] px-[16px] rounded-[4px] text-white font-normal text-[16px]">
              Download the app
            </button>
          </ScrollLink>
        </div>
      </div>
      {/* Backdrop */}
      {isDrawerOpen && <div className="fixed inset-0 bg-black opacity-50 z-[2]" onClick={toggleDrawer}></div>}
    </div>
  );
};
