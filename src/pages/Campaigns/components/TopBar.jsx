import React, { useEffect, useState } from "react";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegisterTitle, setIsRegisterTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleTitle = () => {
      setInterval(() => {
        setIsRegisterTitle(prev => !prev)
      },2000)
    }
    handleTitle();
    window.addEventListener("scroll", handleScroll);

    return () => {
      handleTitle();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-[66px] xl:top-[60px] left-0 z-40">
      {isScrolled === false ? (
        <div className="bg-black text-white xl:px-[68px] xl:py-[12px] flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <button className="px-[16px] py-[8px] text-[14px] leading-[16px] font-bold rounded-[90px] text-white bg-black border-[1px] border-[#424242]">Giriş Yap</button>
            <button className="px-[16px] py-[8px] text-[14px] leading-[16px] font-bold rounded-[90px] text-[#424242] bg-white border-[1px] border-[#E0E0E0]">Kayıt Ol</button>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://pizzahut.com.tr/images/logo-loyalty-medium.svg" alt="pizza hut" />
            <div className="bg-[#424242] w-[1px] h-[16px]"></div>
            {isRegisterTitle === true ?
            <div className="text-[#F9D189] text-[12px] leading-[16px] font-[500]">Üye Ol, 5TL Değerinde Hut Puan Kazan!</div>
            : 
            <div className="text-[#F9D189] text-[12px] leading-[16px] font-[500]">Sipariş Ver %10 Puan Kazan!</div>
            }
          </div>
        </div>
      ) : (
        <div className="flex gap-[24px] bg-white text-black xl:px-[68px] border-b-[1px] border-b-customGray">
                <a href="/" className='h-[56px] text-[14px] leading-[16px] font-bold flex items-center hover:border-b-[2px] hover:border-b-customRed hover:text-customRed'>Ayın Fırsatları</a>
                <a href="/" className='h-[56px] text-[14px] leading-[16px] font-bold flex items-center hover:border-b-[2px] hover:border-b-customRed hover:text-customRed'>Çoklu Menüler</a>
                <a href="/" className='h-[56px] text-[14px] leading-[16px] font-bold flex items-center hover:border-b-[2px] hover:border-b-customRed hover:text-customRed'>Ekstra Lezzetler Promosyonları</a>
        </div>
      )}
    </div>
  );
};

export default TopBar;
