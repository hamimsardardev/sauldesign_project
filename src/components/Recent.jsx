import React, { useState } from "react";
import recentone from "../assets/images/recentone.png";
import recenttwo from "../assets/images/recenttwo.png";
import recentthree from "../assets/images/recentthree.png";
import ScrollToTop from "./ScrollToTop";

const Recent = () => {
  let [activenumber, setActive] = useState(1);
  const handleActive = (number) => {
    setActive(number);
  };
  return (
    <>
    <ScrollToTop/>
      <section className='mt-[50px] bg-[url("assets/images/recentimage.png")] bg-cover bg-center bg-no-repeat lg:mt-[132px]'>
        <div className="container">
          <h2 className="text-primary-white pt-25 text-5xl text-[36px] font-bold lg:pt-[268px] lg:text-[64px] lg:leading-24">
            My recent <span className="text-secondery">works</span>
          </h2>
          <div className="flex">
            <ul className="mt-4 mb-12 flex gap-2 lg:gap-4">
              <li>
                <button
                  onClick={() => handleActive(1)}
                  className={`${activenumber == 1 ? "bg-secondery text-primary-white btn rounded-full px-4 py-1.5 text-lg text-[14px] font-bold lg:px-8 lg:py-2.5 lg:text-[18px]" : "recentbtn btn"}`}
                  href="#"
                >
                  All
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(2)}
                  className={`${activenumber == 2 ? "bg-secondery text-primary-white btn rounded-full px-4 py-1.5 text-lg text-[14px] font-bold lg:px-8 lg:py-2.5 lg:text-[18px]" : "recentbtn btn"}`}
                  href="#"
                >
                  UI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(3)}
                  className={`${activenumber == 3 ? "bg-secondery text-primary-white btn rounded-full px-4 py-1.5 text-lg text-[14px] font-bold lg:px-8 lg:py-2.5 lg:text-[18px]" : "recentbtn btn"}`}
                  href="#"
                >
                  UX
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleActive(4)}
                  className={`${activenumber == 4 ? "bg-secondery text-primary-white btn rounded-full px-4 py-1.5 text-lg text-[14px] font-bold lg:px-8 lg:py-2.5 lg:text-[18px]" : "recentbtn btn"}`}
                  href="#"
                >
                  Web Design
                </button>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-between gap-3 pb-[100px] lg:pb-[269px] xl:flex-nowrap xl:gap-0">
            {activenumber == 1 ? (
              <div className="flex flex-wrap justify-between gap-3 pb-[100px] lg:pb-[269px] xl:flex-nowrap">
                <div className="rounded-[16px] bg-[#393E46]/50 px-[52px] py-[61px]">
                  <img src={recentone} alt="" />
                </div>
                <div className="rounded-[16px] bg-[#393E46]/50 py-[50px]">
                  <img src={recenttwo} alt="" />
                </div>
                <div className="rounded-[16px] bg-[#393E46]/50 py-[55px]">
                  <img src={recentthree} alt="" />
                </div>
              </div>
            ) : activenumber == 2 ? (
              <div className="flex flex-wrap justify-between gap-3 pb-[100px] lg:pb-[269px] xl:flex-nowrap">
                <div className="rounded-[16px] bg-[#393E46]/50 px-[52px] py-[61px]">
                  <img src={recentone} alt="" />
                </div>
                <div className="rounded-[16px] bg-[#393E46]/50 py-[50px]">
                  <img src={recenttwo} alt="" />
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap justify-between gap-3 pb-[100px] lg:pb-[269px] xl:flex-nowrap">
                <div className="rounded-[16px] bg-[#393E46]/50 py-[50px]">
                  <img src={recenttwo} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
