import React from 'react';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { HowItWorks } from './HowItWorks';
import { DownloadApp } from './DownloadApp';
import { Faq } from './Faq';

export const Main = () => {
  return (
    <>
      <div>
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="howWorks">
          <HowItWorks />
        </div>
        <div id="download">
          <DownloadApp />
        </div>
        <div id="faq">
          <Faq />
        </div>
      </div>
    </>
  );
};
