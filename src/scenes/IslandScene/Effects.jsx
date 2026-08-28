import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Effects() {
  return (
    <EffectComposer>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.3}
        luminanceSmoothing={0.9}
      />
    </EffectComposer>
  );
}

export default Effects;