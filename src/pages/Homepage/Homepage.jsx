import React from 'react';
import CampaignBanner from './components/CampaignBanner';
import Slider from "./components/Slider/index";
import StartOrder from './components/StartOrder';

const Homepage = () => {
  return (
    <main className='lg:px-[32px] py-[16px] flex flex-col gap-[50px] xl:gap-[80px]'>
          <Slider />
          <StartOrder />
          <CampaignBanner />
    </main>
  )
}

export default Homepage
