import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import AnimatedCosmo from "../assets/cosmoModel/AnimatedCosmo";
import '../styles/home.scss';

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
