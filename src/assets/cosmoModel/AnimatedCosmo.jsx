// src/components/AnimatedCosmo.js
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Cosmo from './Cosmo';

const AnimatedCosmo = () => {
  const cosmoRef = useRef();

  useFrame(() => {
    if (cosmoRef.current) {
      cosmoRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={cosmoRef}>
      <Cosmo />
    </group>
  );
};

export default AnimatedCosmo;
