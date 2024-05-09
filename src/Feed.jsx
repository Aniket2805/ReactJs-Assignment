import React from "react";
import rect from "./img/rect.png";
import name from "./img/name.png";
const Feed = () => {
  return (
    <>
      <div className="px-6 md:px-10 lg:px-[104px] mt-4 lg:mt-10">
        <div className="flex items-center flex-wrap">
          <span className="mt-2 mr-1 text-[#06286E] cursor-pointer">
            <i class="fa-solid fa-house text-xl"></i>
          </span>
          <span className="mt-2 mr-1 text-[#06286E]">
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <span className="mt-2 mr-1 cursor-pointer">Flashcard</span>
          <span className="mt-2 mr-1 text-[#06286E]">
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <span className="mt-2 mr-1 cursor-pointer">Mathematics</span>
          <span className="mt-2 mr-2 text-[#06286E]">
            <i class="fa-solid fa-angle-right"></i>
          </span>
          <span className="mt-2 mr-1 text-[#06286E] font-semibold cursor-pointer">
            Relation and Function
          </span>
        </div>
      </div>
      <div className="px-6 md:px-10 lg:px-[104px] mt-6 lg:mt-10">
        <h2 className="text-xl sm:text-[32px]">
          Relations and Functions ( Mathematics )
        </h2>
      </div>
      <div className="px-6 md:px-10 lg:px-[104px] mt-3 lg:mt-6 flex justify-center">
        <ul className="flex flex-wrap font-semibold text-[#696671]">
          <li className="active font-bold sm:px-3 py-1 mx-2 cursor-pointer">
            Study
          </li>
          <li className="sm:px-3 py-1 mx-2 cursor-pointer">Quiz</li>
          <li className="sm:px-3 py-1 mx-2 cursor-pointer">Test</li>
          <li className="sm:px-3 py-1 mx-2 cursor-pointer">Game</li>
          <li className="sm:px-3 py-1 mx-2 cursor-pointer">Others</li>
        </ul>
      </div>
      <div className="px-6 md:px-10 lg:px-[104px] mt-3 lg:mt-6 flex flex-col items-center">
        <div className="w-[100%] h-[260px] sm:h-[360px] md:w-[712px] md:h-[393.19px] flex flex-col justify-between text-center ques rounded-[42.51px] p-10">
          <div className="flex justify-between">
            <span className="">
              <i className="fa-regular fa-lightbulb text-2xl text-white cursor-pointer"></i>
            </span>
            <span className="">
              <i className="fa-solid fa-volume-high text-xl text-white cursor-pointer"></i>
            </span>
          </div>
          <div>
            <span className="text-2xl sm:text-4xl md:text-5xl text-white">
              9 + 6 + 7x - 2x - 3
            </span>
          </div>
          <div></div>
        </div>
        <div className="flex justify-between w-[100%] md:w-[712px] px-2 sm:px-8 md:px-16 my-4 text-[#06286E] items-center">
          <div>
            <span className="cursor-pointer">
              <i class="fa-solid fa-rotate-right text-xl sm:text-3xl"></i>
            </span>
          </div>
          <div className="text-white flex items-center">
            <span className="cursor-pointer">
              <i class="fa-solid fa-chevron-left text-xl sm:text-[30px] arrow rounded-[100%] px-[13px] sm:px-[14px] py-2 flex justify-center"></i>
            </span>
            <div className="text-black px-8 font-semibold">01/10</div>
            <span className="cursor-pointer">
              <i class="fa-solid fa-chevron-right text-xl sm:text-[30px] arrow rounded-[100%] px-[13px] sm:px-[14px] py-2 flex justify-center"></i>
            </span>
          </div>
          <div>
            <span className="cursor-pointer">
              <i class="fa-solid fa-expand text-xl sm:text-3xl"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="flex max-[500px]:flex-col justify-between max-[500px]:justify-between items-center px-6 md:px-10 lg:px-[104px] mb-4">
        <div className="flex items-center">
          <div className="rounded-[100%] logo2 flex justify-center items-center px-[20px] py-4 mr-3">
            <img src={rect} />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-[##696671] text-sm mb-2">
              Powered By
            </div>
            <div>
              <img src={name} />
            </div>
          </div>
        </div>
        <div className="max-[500px]:mt-6 cursor-pointer">
          <span className="mr-2">
            <i class="fa-solid fa-plus arrow p-3 text-[18px] rounded-full text-white"></i>
          </span>
          <span className="flash text-lg font-bold">Create Flashcard</span>
        </div>
      </div>
    </>
  );
};

export default Feed;
