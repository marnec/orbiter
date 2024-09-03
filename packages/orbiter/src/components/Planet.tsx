import { Sphere } from "@react-three/drei";
import React from "react";

export type PlanetProps = {
  type?: PlanetType;
  size?: number;
  color?: string;
  roughness?: number;
  metalness?: number;
  emissiveColor?: string;
  emissiveIntensity?: number;
};

export function Planet({
  type = planetTypes[0],
  size,
  color,
  roughness,
  metalness,
  emissiveColor,
  emissiveIntensity,
}: PlanetProps) {
  let defaults = planetDefaults[type];

  return (
    <Sphere args={[size ?? defaults.size, 32, 32]}>
      <meshStandardMaterial
        color={color ?? defaults.color}
        roughness={roughness ?? defaults.roughness}
        metalness={metalness ?? defaults.metalness}
        emissive={emissiveColor ?? defaults.emissiveColor}
        emissiveIntensity={emissiveIntensity ?? defaults.emissiveIntensity}
      />
    </Sphere>
  );
}

export const planetTypes = [
  "terrestrial",
  "gasGiant",
  "iceGiant",
  "dwarf",
] as const;

export type PlanetType = (typeof planetTypes)[number];

export const planetDefaults = {
  terrestrial: {
    size: 0.08 * 5,
    color: "#a0522d",
    roughness: 0.8,
    metalness: 0.1,
    emissiveColor: "#000000", // No glow
    emissiveIntensity: 0,
  },
  gasGiant: {
    size: 0.12 * 5,
    color: "#ffcc66", // Pale orange with banding (hex code)
    roughness: 0.6,
    metalness: 0.2,
    emissiveColor: "#000000",
    emissiveIntensity: 0,
  },
  iceGiant: {
    size: 0.08 * 5,
    color: "#6699ff", // Cool blue (hex code)
    roughness: 0.5,
    metalness: 0.3,
    emissiveColor: "#000033", // Slight bluish glow
    emissiveIntensity: 0.2,
  },
  dwarf: {
    size: 0.005 * 10,
    color: "#999999", // Muted gray (hex code)
    roughness: 0.9,
    metalness: 0.1,
    emissiveColor: "#000000",
    emissiveIntensity: 0,
  },
} as const satisfies Record<PlanetType, Omit<PlanetProps, "type">>;
