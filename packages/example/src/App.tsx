import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import {
  CenterBody,
  OrbitingBody,
  Planet,
  planetTypes,
  Star,
  System,
} from "obiter";
import { StarType, starTypes } from "obiter/dist/components/Star";
import { Vector3 } from "three";
import "./App.css";
import Skybox from "./Skybox";
import { planetDefaults, PlanetType } from "obiter/dist/components/Planet";

function App() {
  let { starType } = useControls("Star", {
    starType: {
      value: "mainSequence",
      options: starTypes,
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
  for (let i = 0; i < planetTypes.length; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let planetCtrl = useControls(`Planets.${planetTypes[i]}`, {
      orbitRadius: {
        value: (i + 1) * 2 + planetDefaults[planetTypes[i]].size / 2,
        min: 1,
        max: 10,
        label: "Orbit radius",
      },
      orbitSpeed: {
        value: 1 / (i + 1),
        min: 0.1,
        max: 10,
        label: "Orbit speed",
      },
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
        orbitingBodies={planetControls.map((planet, i) => (
          <OrbitingBody
            orbitRadius={planet.orbitRadius}
            orbitSpeed={planet.orbitSpeed}
          >
            <Planet type={planetTypes[i]} />
          </OrbitingBody>
        ))}
      />
    </Canvas>
  );
}

export default App;
