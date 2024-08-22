import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import Sphere from "./Sphere";
import { useRef } from "react";

function App() {
  let orbitingSphereRef = useRef()

  useFrame(({ clock }) => {
    let time = clock.getElapsedTime();
    let radius = 2

    

  });
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={Math.PI / 2}
        decay={0}
        intensity={Math.PI}
      />
      <Sphere position={[0, 0, 0]}></Sphere>
      <Sphere position={[-2, 0, 0]} radius={0.5} orbitingRef={orbitingSphereRef}></Sphere>
    </Canvas>
  );
}

export default App;
