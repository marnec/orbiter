import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { System } from "obiter";
import "./App.css";

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 10] }}>
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight position={[0, 0, 0]} decay={0} intensity={Math.PI} />

      <System
        center={{ size: 2, position: [0, 0, 0] }}
        bodies={[
          {
            size: 0.5,
            color: "orange",
            orbitRadius: 3,
            orbitSpeed: 1,
            centerPosition: [0, 0, 0],
          },
          {
            size: 0.6,
            color: "orange",
            orbitRadius: 5,
            orbitSpeed: 0.5,
            centerPosition: [0, 0, 0],
          },
        ]}
      />
    </Canvas>
  );
}

export default App;
