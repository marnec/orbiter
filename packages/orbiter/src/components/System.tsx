import React from 'react';
import { Planet, PlanetProps } from "./Planet";
import { Star, StarProps } from "./Star";

type SystemProps = {
  center: StarProps;
  bodies: PlanetProps[];
};

export function System({ center, bodies }: SystemProps) {
  return (
    <group>
      <Star {...center} />
      {bodies.map((body, index) => (
        <Planet key={index} {...body} />
      ))}
    </group>
  );
}
