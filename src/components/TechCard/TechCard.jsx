import React from 'react';

export const TechCard = ({ imageSrc, altText, description1 }) => {
  return (
    <div className="w-7xl px-4 sm:px-6 md:px-8 bg-slate-800 rounded pt-5 pb-5 grid md:grid-cols-2">
      <div className="flex justify-center">
        <div className="overflow-hidden w-1/2 dark:highlight-white/20 py-10">
          <img src={imageSrc} alt={altText} />
        </div>
      </div>
      <div className="mt-4 max-w-3xl space-y-6 text-slate-300">
        <p>{description1}</p>
      </div>
    </div>
  );
  // return (
  //   <div className="bg-slate-800 rounded-lg shadow-lg p-6 sm:p-8 w-full flex flex-col items-center space-y-4">
  //     <div className="w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full">
  //       <img src={imageSrc} alt={altText} className="object-cover" />
  //     </div>
  //     <h3 className="text-2xl font-semibold text-gray-50">Title</h3>
  //     <p className="text-gray-300 text-base sm:text-lg text-center">description</p>
  //   </div>
  // );
};
