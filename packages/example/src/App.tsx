import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  CenterBody,
  OrbitingBody,
  Planet,
  Star,
  starDefaults,
  System,
} from "obiter";
import Skybox from "./Skybox";
import "./App.css";
import { Vector3 } from "three";
import { useControls } from "leva";
import { StarType } from "obiter/dist/components/Star";

function App() {
  let { starType } = useControls({
    starType: { value: "mainSequence", options: Object.keys(starDefaults) },
  });

  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <Skybox />

      <System
        position={new Vector3(0, 0, 0)}
        centerBody={
          <CenterBody wobbleSpeed={2} wobbleAmplitude={0.05}>
            <Star type={starType as StarType} />
          </CenterBody>
        }
        orbitingBodies={[
          <OrbitingBody orbitRadius={3} orbitSpeed={1}>
            <Planet size={0.3} color={"orange"} />
          </OrbitingBody>,
          <OrbitingBody orbitRadius={5} orbitSpeed={0.5}>
            <Planet size={0.4} color={"orange"} />
          </OrbitingBody>,
        ]}
      />
    </Canvas>
  );
}

export default App;
