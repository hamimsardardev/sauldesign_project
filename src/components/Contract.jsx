import React from "react";
import projectimage from "../assets/images/projectimage.png";
import { BsSend } from "react-icons/bs";
import ScrollToTop from "./ScrollToTop";

const Contract = () => {
  return (
    <div>
      <ScrollToTop />
      <section className="border-primary-white/10 mt-[80px] border-b pb-[100px] md:mt-[100px] lg:mt-[258px] lg:pb-[258px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/4">
              <h3 className="text-primary-white text-[36px] font-bold md:text-[42px] lg:text-[64px]">
                Got a project in
              </h3>
              <span className="text-secondery inline-block text-[36px] font-bold md:text-[42px] lg:text-[64px]">
                {" "}
                mind?
              </span>
              <div className="mr-[140px] flex justify-end">
                <img src={projectimage} alt="projectimage" />
              </div>
            </div>
            <div className="w-auto lg:w-2/4">
              <div className="flex w-auto flex-col md:flex-row md:gap-2 xl:flex-row">
                <div className="w-auto xl:w-2/4">
                  <label
                    className="text-primary-white text-[18px] font-bold"
                    htmlFor="name"
                  >
                    Your name
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Name"
                      className="text-primary-white/50 mt-[10px] w-full rounded-[16px] border-transparent bg-[#393E46]/50 py-4 pl-[24px] text-[18px] font-bold lg:w-[288px]"
                    />
                  </div>
                </div>
                <div className="w-auto xl:w-2/4">
                  <label
                    className="text-primary-white text-[18px] font-bold"
                    htmlFor="name"
                  >
                    Your Email
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Email"
                      className="text-primary-white/50 mt-[10px] w-full rounded-[16px] border-transparent bg-[#393E46]/50 py-4 pl-[24px] text-[18px] font-bold lg:w-[288px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label
                  className="text-primary-white text-[18px] font-bold"
                  htmlFor="name"
                >
                  Your Massage
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Massage"
                    className="text-primary-white/50 mt-[10px] w-[600px] rounded-[16px] border-transparent bg-[#393E46]/50 py-4 pb-[237px] pl-[24px] text-[18px] font-bold"
                  />
                </div>
                <button className="recentbtn btn mt-6 flex items-center justify-center gap-[10px]">
                  Send Message <BsSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contract;
