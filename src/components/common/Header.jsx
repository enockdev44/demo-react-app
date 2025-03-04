import { useRef, useState, useEffect } from "react";
import LogoImg from "../../assets/common/logo.png";
import React from "react";
import { menulists } from "../../assets/data/data";
import {
  CustomeNavLink,
  CustomeLink
} from "../common/CustomComponents";
import { IoSearchOutline} from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { ModelCart } from "../cart/ModelCart";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // close menu if click outside close menu button
  const closeMenuOutSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // handle scroll with animation
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutSide);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.addEventListener("mousedown", closeMenuOutSide);
      window.addEventListener("scroll", handleScroll);
    };
  });

  // we only want to show that black box in home page
  const isHomePage = location.pathname === "/";

  return (
    <>
      <header
        className={
          isHomePage
            ? `header px-12 py-3 bg-white-100 z-20  ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-12 py-3 z-20 ${isScrolled ? "scrolled" : ""}`
        }
      >
        {isHomePage && (
          <div
            className={`${isScrolled ? "lg:bg-none" : "lg:bg-black"}
        lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10
       `}
          ></div>
        )}

        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={LogoImg} alt="LogoImg" className="h-7" />
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              {menulists.map((list) => {
                return (
                  <li key={list.id} className="uppercase list-none">
                    <CustomeNavLink href={list.path}>
                      {list.link}
                    </CustomeNavLink>
                  </li>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="uppercase hidden lg:block relative z-20">
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Login
              </CustomeLink>
              <span
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                {" "}
                /{" "}
              </span>
              <CustomeLink
                className={`${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                Register
              </CustomeLink>
            </div>
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              }`}
            >
              <IoSearchOutline size={23} />
              
              <ModelCart />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center bg-black text-white focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ): (
                  <AiOutlineMenu size={24} />
                )}
              </button>

            </div>
          </div>
          {/* Responsive menu if below 768px */}
          <div ref={menuRef}
            className={`lg:flex lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${isOpen ? "open" : "closed"}`}
            >
          {menulists.map((list)=>{
            return (<li key={list.id} className="uppercase list-none">
            <CustomeNavLink href={list.path} className="text-white">
              {list.link}
            </CustomeNavLink>
            </li>);
          })}

          </div>

        </nav>
      </header>
    </>
  );
};
