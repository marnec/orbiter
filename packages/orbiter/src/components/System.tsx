import { CenterProps } from "@react-three/drei";
import React, { ReactElement } from "react";
import { Vector3 } from "three";
import { CenterBody } from "./CenterBody";
import { OrbitingBody, OrbitingBodyProps } from "./OrbitingBody";

type SystemProps = {
  position: Vector3;
  centerBody: ReactElement<
    CenterProps,
    React.JSXElementConstructor<typeof CenterBody>
  >;
  orbitingBodies: ReactElement<
    OrbitingBodyProps,
    React.JSXElementConstructor<typeof OrbitingBody>
  >[];
};

export function System({ centerBody, orbitingBodies, position }: SystemProps) {
  return (
    <group position={position}>
      {centerBody}
      {orbitingBodies.map((body, index) => (
        <group key={index}>{body}</group>
      ))}
    </group>
  );
}
