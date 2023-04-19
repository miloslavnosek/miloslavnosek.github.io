import React from 'react';

import * as linus from '/assets/linus.jpeg';

export const Quote = () => (
    <div className="w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-10">
      <div className="w-full pt-1 pb-5">
        <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
          <img src={linus} alt="Linus Torvalds" />
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="text-3xl text-left leading-tight h-3">“</div>
        <p className="text-center px-5">
          Talk is cheap. Show me the code.
        </p>
        <div className="text-3xl text-right leading-tight h-3 -mt-3">”</div>
      </div>
      <div className="w-full">
        <p className="text-md font-bold text-center">Linus Torvalds</p>
      </div>
    </div>
);
