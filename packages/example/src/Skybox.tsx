import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "skybox1.png", //left/right
    "skybox3.png", // down/up
    "skybox5.png", // down/up
    "skybox6.png", //left/right
    "skybox2.png", //front/back
    "skybox4.png", //front/back
  ]);

  scene.background = texture;
  return null;
}
