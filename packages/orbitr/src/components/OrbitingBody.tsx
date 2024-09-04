import { useFrame } from "@react-three/fiber";
import React, { ReactElement, useRef } from "react";
import { Group, Object3D } from "three";
import { OrbitLine } from "./OrbitLine";
import { PlanetProps } from "./Planet";

export type OrbitingBodyProps = {
  children: ReactElement<PlanetProps, React.JSXElementConstructor<Object3D>>;
  orbitSpeed: number;
  orbitRadius: number;
};

export function OrbitingBody({
  children,
  orbitSpeed,
  orbitRadius,
}: OrbitingBodyProps) {
  const ref = useRef<Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * orbitSpeed;

    ref.current.position.x = Math.cos(t) * orbitRadius;
    ref.current.position.y = 0;
    ref.current.position.z = Math.sin(t) * orbitRadius;
  });

  return (
    <>
      <group ref={ref}>{children}</group>
      <OrbitLine radius={orbitRadius} />
    </>
  );
}
