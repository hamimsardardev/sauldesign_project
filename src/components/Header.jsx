import React, { useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

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
              <Link to="/"><img src="images/logo.png" alt="logo.png" /></Link>
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
                  <Link to="/">Home</Link>
                </li>
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <Link to="/About">About Me</Link>
                </li>
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <Link to="/Recent">Work</Link>
                </li>
                <li className="list transation ease-in-out after:duration-[.4s]">
                  <Link to="/Contract">Contact</Link>
                </li>
              </ul>
              {navbarshow && (
                <ul
                  className={`absolute top-16 left-0 w-full bg-teal-500 p-3 duration  ${navbarshow ? "translate-x-[0%]" : "translate-x-[-100%]"} gap-12 lg:hidden`}
                >
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <Link to="/About">About Me</Link>
                  </li>
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <Link to="/Recent">Work</Link>
                  </li>
                  <li className="text-primary-white transation relative mt-3 text-lg font-normal ease-in-out after:duration-[.4s]">
                    <Link to="/Contract">Contact</Link>
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
