import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type SphereProps = {
  position: ThreeElements["mesh"]["position"];
  radius?: number;
  orbiting?: boolean
};

export default function Sphere({ position, radius=1, orbiting=false }: SphereProps) {
  const ref = useRef<THREE.Mesh>(null!);

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);


  useFrame(({ clock }) => {
    if (orbiting && ref.current) {
      const time = clock.getElapsedTime();
      const orbitRadius = 2; // The orbit radius
      // Update the position of the orbiting sphere
      ref.current.position.x = orbitRadius * Math.cos(time);
      ref.current.position.z = orbitRadius * Math.sin(time);
    }
  });

  useFrame((state, delta) => (ref.current.rotation.x += delta));

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
