import React from "react";
import { Sphere } from "@react-three/drei";
import { Vector3 } from "@react-three/fiber";

export type StarProps = {
  size: number;
  position: Vector3;
};

export function Star({ size, position }: StarProps) {
  return (
    <Sphere args={[size, 32, 32]} position={position}>
      <meshStandardMaterial color="orange" />
    </Sphere>
  );
}
