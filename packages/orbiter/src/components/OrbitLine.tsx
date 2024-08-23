import React from 'react';
import { Line } from "@react-three/drei";
import { useMemo } from "react";
import { Vector3 } from "three";

export type OrbitLineProps = {
  radius: number;
  center: Vector3;
  color: string;
};

export function OrbitLine({ radius, center, color = "white" }: OrbitLineProps) {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      pts.push(
        new Vector3(
          center.x + Math.cos(angle) * radius,
          center.y,
          center.z + Math.sin(angle) * radius
        )
      );
    }
    return pts;
  }, [radius, center]);

  return <Line points={points} color={color} lineWidth={0.5} />;
}
