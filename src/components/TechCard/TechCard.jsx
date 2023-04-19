import React from 'react'

export const TechCard = ({ imageSrc, altText, align = 'left', children }) => {
  return (
    <div
      className="w-7xl px-4 sm:px-6 md:px-8 bg-opacity-5 bg-slate-800 rounded pt-5 pb-5 grid md:grid-cols-2 md:grid-rows-1 justify-items-center">
      {align === 'left' ? (
        <>
          <div className="w-1/3 md:order-1">
            <img src={imageSrc} alt={altText} />
          </div>
          <div className="mt-4 space-y-6 text-slate-300 md:order-2">
            {children}
          </div>
        </>
      ) : (
        <>
          <div className="w-1/3 py-10 md:order-2">
            <img src={imageSrc} alt={altText} />
          </div>
          <div className="mt-4 space-y-6 text-slate-300 md:order-1">
            {children}
          </div>
        </>
      )}
    </div>
  )
}
