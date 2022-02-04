import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner: React.FC = () => {
  return (
      <div className="" >
          <div className="bg absolute w-screen h-screen">
              <div className="circle rounded-full bg-red-500 h-64 w-64 absolute bottom-4" id="circle1"></div>
              <div className="circle rounded-full bg-yellow-500 h-96 w-96 absolute bottom-20 right-20" id="circle2"></div>
              <div className="circle rounded-full bg-blue-500 h-80 w-80 absolute bottom-40 left-60" id="circle3"></div>
          </div>
          <div className="bg-black/[0.6] pt-24 h-screen backdrop-blur-3xl flex flex-col justify-center items-center w-screen">
              <p className="text-7xl">Hi I'm</p>
              <p className="text-[30vh] leading-[30vh] text-accent uppercase font-extrabold">Manish</p>
              <p className="text-2xl mt-20 text-center" >
                I’m a full stack software developer<br />converting ideas and coffee into code</p>
              <img src="/myequation.svg" alt="" className="h-8 mt-4" />
          </div>
      </div>
  );
};

export default Banner;
