import React from "react";
import ModalButtons from "./components/ModalButtons";
import Nav from "./components/Nav";

const Header = () => {
 

  return (
    <div className="px-[68px] py-[12px] flex items-center justify-between border-b-[1px] border-b-customGray">
      <a href="/">
        <img
          src="https://www.pizzahut.com.tr/images/logo-black.svg"
          alt="pizza-hut"
          className="hidden lg:block"
        />
        <img
          src="https://www.pizzahut.com.tr/images/mobile-logo.svg"
          alt="pizza-hut"
          className="block lg:hidden"
        />
      </a>
      <Nav />
      <ModalButtons/>
    </div>
  );
};

export default Header;
