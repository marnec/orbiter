import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function Skybox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/skybox/1.png", //left/right
    "/skybox/3.png", // down/up
    "/skybox/5.png", // down/up
    "/skybox/6.png", //left/right
    "/skybox/2.png", //front/back
    "/skybox/4.png", //front/back
  ]);

  scene.background = texture;
  return null;
}
