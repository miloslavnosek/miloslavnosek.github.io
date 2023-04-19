import React from 'react'

export const PlatformCard = ({ icon, description }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-opacity-5 bg-slate-800 rounded">
    <div className="w-20 h-20 overflow-hidden mb-4">
      <img src={icon} alt="tech-icon" />
    </div>
    <p className="text-center">{description}</p>
  </div>
)
