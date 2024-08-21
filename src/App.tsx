import { Canvas } from '@react-three/fiber';
import './App.css';
import Sphere from './Sphere';

function App() {
  return (
    <Canvas>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[10, 10, 10]} angle={Math.PI/2} decay={0} intensity={Math.PI} />
    <Sphere position={[10, 10, 10]}></Sphere>
    <Sphere position={[-1.2, 0, 0]} />
  </Canvas>
  );
}

export default App;
