import React, { useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header = () => {
  let [navbarshow, setNavbarshow] = useState(false);
  function handleshownavbar() {
    setNavbarshow(!navbarshow);
  }
  return (
    <>
      <header className="border-primary-white/10 border-b py-5 lg:py-12">
        <nav>
          <div className="container">
            <div className="flex justify-between">
              <img src="images/logo.png" alt="logo.png" />
              {navbarshow ? (
                <AiOutlineCloseCircle
                  onClick={handleshownavbar}
                  className="text-white lg:hidden"
                />
              ) : (
                <FaBarsProgress
                  onClick={handleshownavbar}
                  className="text-white lg:hidden"
                />
              )}

              <ul className="hidden gap-12 lg:flex">
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <a href="#">Home</a>
                </li>
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <a href="#">About Me</a>
                </li>
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <a href="#">Contact</a>
                </li>
              </ul>
              {navbarshow && (
                <ul
                  className={`absolute top-16 left-0 w-full bg-teal-500 p-3 duration ${navbarshow ? "translate-x-[0%]" : "translate-x-[-100%]"} gap-12 lg:hidden`}
                >
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <a href="#">Home</a>
                  </li>
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <a href="#">About Me</a>
                  </li>
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
