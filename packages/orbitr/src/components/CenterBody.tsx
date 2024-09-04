import React, { useRef } from "react";
import { ReactElement } from "react";
import { StarProps } from "./Star";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export type CenterBodyProps = {
  children: ReactElement<StarProps>;
  wobbleSpeed?: number;
  wobbleAmplitude?: number;
};

export function CenterBody({
  children,
  wobbleSpeed = 0,
  wobbleAmplitude = 0,
}: CenterBodyProps) {
  let centerGroup = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const wobbleX = Math.sin(t * wobbleSpeed) * wobbleAmplitude;
    const wobbleZ = Math.cos(t * wobbleSpeed * 1.2) * wobbleAmplitude;

    centerGroup.current.position.x = wobbleX;
    centerGroup.current.position.z = wobbleZ;
  });

  return <group ref={centerGroup}>{children}</group>;
}
