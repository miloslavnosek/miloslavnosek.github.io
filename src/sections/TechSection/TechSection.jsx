import React from 'react';
import { TechCard } from '../../components/TechCard/TechCard'

import * as nodeSvg from '/assets/node.svg';
import * as goSvg from '/assets/go.svg';

export const TechSection = () => {
  return (
    <section id="tech" className="px-8 mt-20 grid sm:mt-32 md:mt-40 md:text-left">
      <div className="pt-5 pb-5 text-center">
        <h2 className="text-3xl font-bold">Technologies I enjoy</h2>
      </div>
      <div className="grid grid-cols-1 gap-10">
        <TechCard
          imageSrc={nodeSvg}
          altText="Node.js"
          description1="Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead."
        />
        <TechCard
          imageSrc={goSvg}
          altText="Go"
          description1="Wrestling with a bunch of complex media queries in your CSS sucks, so Tailwind lets you build responsive designs right in your HTML instead."
        />
      </div>
    </section>
  );
};
