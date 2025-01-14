'use client';

import Scene from '@/components/common/scene';
import Star from '@/components/common/star';
import { Sphere, Stars } from '@react-three/drei';

export default function Home() {
  return (
    <Scene>
      <Stars
        radius={100}
        depth={50}
        count={10000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Sphere position={[-4, 0, 0]}>
        <meshStandardMaterial color="gray" />
      </Sphere>

      <Star
        position={[0, 0, 0]}
        distance={100}
        intensity={100}
        size={1}
        color={'white'}
      />
    </Scene>
  );
}
