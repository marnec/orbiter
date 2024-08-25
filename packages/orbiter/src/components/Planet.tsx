import { Sphere } from "@react-three/drei";
import React from "react";

export type PlanetProps = {
  size: number;
  color: string;
};

export function Planet({ size, color }: PlanetProps) {
  return (
    <Sphere args={[size, 32, 32]}>
      <meshStandardMaterial color={color} />
    </Sphere>
  );
}
