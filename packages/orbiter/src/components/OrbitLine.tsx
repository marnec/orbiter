import React from "react";
import { Line } from "@react-three/drei";
import { useMemo } from "react";
import { Vector3 } from "three";

export type OrbitLineProps = {
  radius: number;
  color?: string;
  vertices?: number
};

export function OrbitLine({ radius, color='white', vertices=64 }: OrbitLineProps) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= vertices; i++) {
      const angle = (i / vertices) * 2 * Math.PI;
      pts.push(
        new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
      );
    }
    return pts;
  }, [radius]);

  return (
    <Line points={points} lineWidth={0.5} color={color}>
      <lineBasicMaterial></lineBasicMaterial>
    </Line>
  );
}
