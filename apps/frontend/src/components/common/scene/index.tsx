'use client';

import { Canvas } from '@react-three/fiber';
import * as styles from './index.css';

function Scene({ children }: { children: React.ReactNode }) {
  return (
    <Canvas className={styles.canvas}>
      <ambientLight intensity={0.15} />
      {children}
    </Canvas>
  );
}

export default Scene;
