import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Environment, OrbitControls } from "@react-three/drei";
import '../styles/home.scss';

const Cosmo = () => {
  const gltf = useLoader(GLTFLoader, "./Cosmo/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={1.2} position={[0, -1.2, 0]} />
    </>
  );
};

function AnimatedCosmo() {
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
}

const Home = () => {
  return (
    <main className="Home">
      <div className="Home__text-block">
        <div className="Home__title">
          <h2 className="Home__title__item">0xSasha</h2>
        </div>
        <div className="Home__description">
          <p className="Home__description__item">Software Engineer</p>
        </div>
      </div>
      <div className="Home__container3D">
        <Canvas>
          <ambientLight intensity={1} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <AnimatedCosmo />
          </Suspense>
          <Environment preset='sunset' />
        </Canvas>
      </div>
    </main>
  )
}

export default Home;
