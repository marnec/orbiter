import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import { OrbitLine } from "./OrbitLine";

export type PlanetProps = {
  size: number;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  centerPosition: [number, number, number];
};

export function Planet({
  size,
  color,
  orbitRadius,
  orbitSpeed,
  centerPosition,
}: PlanetProps) {
  const ref = useRef<Mesh>(null);
  const orbitCenter = new Vector3(...centerPosition);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * orbitSpeed;

    if (!ref?.current) return;

    ref.current.position.x = orbitCenter.x + Math.cos(t) * orbitRadius;
    ref.current.position.y = orbitCenter.y;
    ref.current.position.z = orbitCenter.z + Math.sin(t) * orbitRadius;
  });

  return (
    <>
      <Sphere ref={ref} args={[size, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>

      <OrbitLine radius={orbitRadius} center={orbitCenter} color="black" />
    </>
  );
}
