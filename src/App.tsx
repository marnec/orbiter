import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Sphere from "./Sphere";

function App() {
  return (
    <Canvas camera={{position: [0, 5, 10]}}>
      <OrbitControls />
      <ambientLight intensity={Math.PI / 2} />
      <pointLight
        position={[0, 0, 0]}
        decay={0}
        intensity={Math.PI}
      />
      
      <Sphere position={[0, 0, 0]}></Sphere>
      <Sphere position={[-2, 0, 0]} radius={0.5} orbiting={true}></Sphere>
    </Canvas>
  );
}

export default App;
