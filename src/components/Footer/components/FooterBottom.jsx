import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex flex-col gap-2 xl:flex-row xl:gap-0 items-center justify-between">
      <div className="text-center xl:text-start text-[11px] leading-[16px] text-white">© Pizza Hut Türkiye 2020. Tüm hakları saklıdır.</div>
      <div className="text-center xl:text-start text-[11px] leading-[16px] text-[#9E9E9E]">
        Ürünlerimiz gluten, balık, süt ürünleri ve susam ürünleri bulaşma riski
        olan alanda üretilmiştir.
      </div>
    </div>
  );
};

export default FooterBottom;
