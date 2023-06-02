import React from "react";
import ModalButtons from "./components/ModalButtons";
import Nav from "./components/Nav";

const Header = () => {
 

  return (
    <div className="sticky top-0 left-0 bg-white z-50 px-[20px] py-[8px] xl:px-[68px] xl:py-[12px] flex items-center justify-between border-b-[1px] border-b-customGray">
      <button className=" xl:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" name="menu" class="icon app-header__burger-button"><rect x="2" y="4" width="20" height="2"/><rect x="2" y="11" width="20" height="2"/><rect x="2" y="18" width="20" height="2"/></svg>
      </button>
      <a href="/">
        <img
          src="https://www.pizzahut.com.tr/images/logo-black.svg"
          alt="pizza-hut"
          className="hidden xl:block"
        />
        <img
          src="https://www.pizzahut.com.tr/images/mobile-logo.svg"
          alt="pizza-hut"
          className="block xl:hidden"
        />
      </a>
      <Nav />
      <ModalButtons/>
      <button className="xl:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" name="user" class="icon"><path d="M12 1C10.5555 1 9.12506 1.28452 7.79048 1.83733C6.4559 2.39013 5.24327 3.20038 4.22183 4.22183C2.15893 6.28473 1 9.08262 1 12C1 14.9174 2.15893 17.7153 4.22183 19.7782C5.24327 20.7996 6.4559 21.6099 7.79048 22.1627C9.12506 22.7155 10.5555 23 12 23C14.9174 23 17.7153 21.8411 19.7782 19.7782C21.8411 17.7153 23 14.9174 23 12C23 10.5555 22.7155 9.12506 22.1627 7.79048C21.6099 6.4559 20.7996 5.24327 19.7782 4.22183C18.7567 3.20038 17.5441 2.39013 16.2095 1.83733C14.8749 1.28452 13.4445 1 12 1ZM6.577 18.908C7.05 17.918 9.932 16.95 12 16.95C14.068 16.95 16.95 17.918 17.423 18.908C15.927 20.096 14.046 20.8 12 20.8C9.954 20.8 8.073 20.096 6.577 18.908ZM18.996 17.313C17.423 15.399 13.606 14.75 12 14.75C10.394 14.75 6.577 15.399 5.004 17.313C3.882 15.85 3.2 14.002 3.2 12C3.2 7.149 7.149 3.2 12 3.2C16.851 3.2 20.8 7.149 20.8 12C20.8 14.002 20.118 15.85 18.996 17.313ZM12 5.4C9.866 5.4 8.15 7.116 8.15 9.25C8.15 11.384 9.866 13.1 12 13.1C14.134 13.1 15.85 11.384 15.85 9.25C15.85 7.116 14.134 5.4 12 5.4ZM12 10.9C11.5624 10.9 11.1427 10.7262 10.8333 10.4167C10.5238 10.1073 10.35 9.68761 10.35 9.25C10.35 8.81239 10.5238 8.39271 10.8333 8.08327C11.1427 7.77384 11.5624 7.6 12 7.6C12.4376 7.6 12.8573 7.77384 13.1667 8.08327C13.4762 8.39271 13.65 8.81239 13.65 9.25C13.65 9.68761 13.4762 10.1073 13.1667 10.4167C12.8573 10.7262 12.4376 10.9 12 10.9Z"/></svg>
      </button>
    </div>
  );
};

export default Header;
