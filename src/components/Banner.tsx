import React from "react";

const Banner = () => {
  return (
    <div
      className='py-3 text-center bg-[linear-gradient(to_right,rgba(241,140,243,0.7),rgba(114,213,235,0.7),rgba(255,253,128,0.7),rgba(248,154,191,0.7),rgba(252,214,255,0.7))]
'
    >
      <div className='container'>
        <p className='font-medium'>
          <span className='hidden sm:inline'>
            Introducing a completely redesigned
            interface-
          </span>
          <a
            href='#'
            className='underline underline-offset-4 '
          >
            Explore the demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
