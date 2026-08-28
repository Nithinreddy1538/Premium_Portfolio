function FloatingIsland() {
  return (
    <mesh position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#64ffda"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

export default FloatingIsland;