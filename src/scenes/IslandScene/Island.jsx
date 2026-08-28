import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";

import FloatingIsland from "./FloatingIsland";

function Island() {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>

      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Environment preset="sunset" />

      <FloatingIsland />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />

    </Canvas>
  );
}

export default Island;