import React from 'react'
import FooterBottom from './components/FooterBottom'
import FooterTop from './components/FooterTop'

const Footer = () => {
  return (
    <footer className='px-[68px] py-[80px] bg-black text-white flex flex-col gap-[63px] xl:gap-[126px]'>
      <FooterTop />
      <FooterBottom/>
    </footer>
  )
}

export default Footer
