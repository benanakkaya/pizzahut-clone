import React from "react";

const CampaignBanner = () => {
  return (
    <div className="flex flex-col gap-[16px] px-[32px]">
      <div className="text-[20px] leading-[23px] font-bold flex items-center justify-between">
        Hut’la Katla!
        <a
          href="/"
          className="text-customRed text-[14px] leading-[16px] font-bold"
        >
          Detaylı Bilgi
        </a>
      </div>
      <div className="flex flex-col items-center gap-[80px] p-[32px] bg-bannerBG bg-cover max-w-[1229px] min-h-[570px]">
        <div className="flex flex-col items-center">
          <img
            className="w-[300px] h-[54px] md:w-[384px] md:h-[68px] mb-[24px]"
            src="https://www.pizzahut.com.tr/images/logo-loyalty-huge.svg"
            alt="hutla katla"
          />
          <p className="text-[24px] lg:text-[32px] leading-[28px] font-bold text-center text-white mb-[32px] flex items-center gap-1 flex-col sm:flex-row">
           <span className="whitespace-nowrap"> Hut Puanlarını Topla,{" "}</span>
            <span className="font-[300] leading-[38px] whitespace-nowrap">
              {" "}
              Pizza Lezzetini Katla!
            </span>
          </p>
          <button className="bg-[#F6A32B] text-white whitespace-nowrap px-[24px] py-[12px] text-[16px] leading-[19px] rounded-[4px] duration-500 shadow-[0_4px_32px_0px_rgba(255,164,0,.35)] hover:shadow-[0_4px_32px_0px_rgba(255,164,0,0.65)]">
            Üye Ol,<span className="font-bold">{" "}5 Hut Puan{" "}</span>kazan!
          </button>
        </div>
        <div className="flex flex-col gap-[32px] lg:gap-0 lg:flex-row">
            <div className="h-[150px] w-[240px] flex flex-col items-center">
                <img className="h-[78px]" src="https://www.pizzahut.com.tr/images/loyalty-banner-icons/order-now.svg" alt="app" />
                <div className="font-[300] text-[20px] leading-[23px] pt-[20px] text-white text-center">
                Uygulamadan veya web sitemizden<span className="font-bold">{" "}sipariş ver.</span>
                </div>
            </div>
            <img className="hidden lg:block" src="https://www.pizzahut.com.tr/images/loyalty-banner-icons/first-arrow.svg" alt="arrow" />
            <div className="h-[150px] w-[240px] flex flex-col items-center">
                <img className="h-[78px]" src="https://www.pizzahut.com.tr/images/loyalty-banner-icons/get-points.svg" alt="pizza" />
                <div className="font-[300] text-[20px] leading-[23px] pt-[20px] text-white text-center">
                Siparişinin %10’u kadar<span className="font-bold">{" "}Hut Puan kazan.</span>
                </div>
            </div>
            <img className="hidden lg:block" src="https://www.pizzahut.com.tr/images/loyalty-banner-icons/first-arrow.svg" alt="star" />
            <div className="h-[150px] w-[240px] flex flex-col items-center">
                <img className="h-[78px]" src="https://www.pizzahut.com.tr/images/loyalty-banner-icons/spend-points.svg" alt="app" />
                <div className="font-[300] text-[20px] leading-[23px] pt-[20px] text-white text-center">
                Hut Puan’larını biriktir,<span className="font-bold">{" "}doya doya harca.</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignBanner;
