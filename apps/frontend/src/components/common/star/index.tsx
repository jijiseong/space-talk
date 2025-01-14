interface StarProps {
  position: [number, number, number];
  distance: number;
  intensity: number;
  size: number;
  color: string;
}

function Star({ position, distance, intensity, size, color }: StarProps) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 36, 36]} />
      <meshStandardMaterial color={color} />
      <pointLight intensity={intensity} distance={distance} color={'white'} />
    </mesh>
  );
}

export default Star;
