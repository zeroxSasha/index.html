import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Cosmo = () => {
  const gltf = useLoader(GLTFLoader, `${import.meta.env.BASE_URL}Cosmo/scene.gltf`);
  return (
    <>
      <primitive object={gltf.scene} scale={1.35} position={[0, -1.5, 0]} />
    </>
  );
};

export default Cosmo;
