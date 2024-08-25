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
  let { starType } = useControls("Star", {
    starType: {
      value: "mainSequence",
      options: Object.keys(starDefaults),
      label: "Star type",
    },
    wobbleSpeed: {
      value: 2,
      min: 0,
      max: 5,
      label: "Wobble speed",
    },
    wobbleAmplitude: {
      value: 0.05,
      min: 0,
      max: 0.3,
      label: "Wobble speed",
    },
  });

  let planetControls = [];
  for (let i = 1; i < 3; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let planetCtrl = useControls(`Planets.Planet ${i}`, {
      orbitRadius: {
        value: i * 2,
        min: 1,
        max: 10,
        label: "Orbit radius",
      },
      orbitSpeed: { value: 2 / i, min: 0.1, max: 10, label: "Orbit speed" },
      size: { value: i * 0.1, min: 0.1, max: 3, label: "Planet size" },
      color: "#bd7901"
    });

    planetControls.push(planetCtrl);
  }

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
        orbitingBodies={planetControls.map((planet) => (
          <OrbitingBody
            orbitRadius={planet.orbitRadius}
            orbitSpeed={planet.orbitSpeed}
          >
            <Planet size={planet.size} color={planet.color} />
          </OrbitingBody>
        ))}
      />
    </Canvas>
  );
}

export default App;
