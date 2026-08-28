function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[10, 10, 5]}
        intensity={2.5}
        castShadow
      />

      <pointLight
        position={[-5, 5, -5]}
        color="#64ffda"
        intensity={2}
      />

      <pointLight
        position={[5, 3, 5]}
        color="#ffb347"
        intensity={1.5}
      />
    </>
  );
}

export default Lights;