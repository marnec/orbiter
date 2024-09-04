import { Sphere } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import type { SelectiveBloomEffect } from "postprocessing";
import React, { useRef } from "react";
import { Mesh, PointLight } from "three";

export const starTypes = [
  "mainSequence",
  "giant",
  "supergiant",
  "dwarf",
  "neutron",
] as const;

export type StarType = (typeof starTypes)[number];

export type StarProps = {
  type?: StarType; // Add other star types as needed
  size?: number;
  color?: string;
  emissiveColor?: string;
  emissiveIntensity?: number;
  bloomIntensity?: number;
  bloomRadius?: number;
  lightDecay?: number;
  lightIntensity?: number;
};

export const Star = ({
  type = "mainSequence",
  size,
  color,
  emissiveColor,
  emissiveIntensity,
  bloomIntensity,
  bloomRadius,
  lightDecay,
  lightIntensity,
}: StarProps) => {
  let mesh = useRef<Mesh>(null!);
  let starLight = useRef<PointLight>(null!);
  let bloom = useRef<SelectiveBloomEffect>(null!);

  const defaults = starDefaults[type];

  return (
    <group>
      <EffectComposer>
        <SelectiveBloom
          ref={bloom}
          mipmapBlur
          lights={[starLight]}
          selection={[mesh]}
          luminanceThreshold={0.8}
          intensity={bloomIntensity ?? defaults.bloomIntensity}
          radius={bloomRadius ?? defaults.bloomRadius}
        />
      </EffectComposer>
      <pointLight
        decay={lightDecay ?? defaults.lightDecay}
        intensity={lightIntensity ?? defaults.lightIntensity}
        ref={starLight}
      />
      <Sphere args={[size ?? defaults.size, 32, 32]} ref={mesh}>
        <meshStandardMaterial
          color={color ?? defaults.color}
          emissive={emissiveColor ?? defaults.emissiveColor}
          emissiveIntensity={emissiveIntensity ?? defaults.emissiveIntensity}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};

// Set default properties based on the star type
export const starDefaults = {
  mainSequence: {
    size: 1,
    color: "#ffcc99", // Soft yellow-orange (hex code)
    emissiveColor: "#ff9900", // Warm orange (hex code)
    emissiveIntensity: 4,
    bloomIntensity: 1.8,
    bloomRadius: 0.5,
    lightDecay: 0.1,
    lightIntensity: Math.PI,
  },
  giant: {
    size: 3,
    color: "#ff6666", // Warm red (hex code)
    emissiveColor: "#ff3300", // Deep red-orange (hex code)
    emissiveIntensity: 6,
    bloomIntensity: 2.2,
    bloomRadius: 0.55,
    lightDecay: 0.2,
    lightIntensity: Math.PI * 1.5,
  },
  supergiant: {
    size: 5,
    color: "#6699ff", // Light blue (hex code)
    emissiveColor: "#3366ff", // Bright blue (hex code)
    emissiveIntensity: 8,
    bloomIntensity: 2.5,
    bloomRadius: 0.6,
    lightDecay: 0.3,
    lightIntensity: Math.PI * 2,
  },
  dwarf: {
    size: 0.5,
    color: "#cc6666", // Muted red (hex code)
    emissiveColor: "#cc3333", // Dark red (hex code)
    emissiveIntensity: 5,
    bloomIntensity: 1,
    bloomRadius: 0.3,
    lightDecay: 0.05,
    lightIntensity: Math.PI / 1,
  },
  neutron: {
    size: 0.3,
    color: "#ccccff", // Pale white-blue (hex code)
    emissiveColor: "#9999ff", // Soft bluish white (hex code)
    emissiveIntensity: 10,
    bloomIntensity: 3.2,
    bloomRadius: 0.25,
    lightDecay: 0.4,
    lightIntensity: Math.PI * 3,
  },
} as const satisfies Record<StarType, Omit<StarProps, "type">>;
