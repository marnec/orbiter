import { useMemo } from "react";
import * as THREE from "three";

export const Starfield = () => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={10000}
          itemSize={3}
          array={particles}
        />
      </bufferGeometry>
      <pointsMaterial color="0x888888" />
    </points>
  );
};
