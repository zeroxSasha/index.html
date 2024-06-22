import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export function startHomeAnimation() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    let object;
    
    let controls;
    
    let objToRender = 'eye';
    
    const loader = new GLTFLoader();
    
    loader.load(
        `src/assets/models/${objToRender}/scene.gltf`,
        function (gltf) {
            object = gltf.scene;
            scene.add(object);
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.error(error);
        }
        );
        
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(300, 300);
        
        document.getElementById("container3D").appendChild(renderer.domElement);
        
        camera.position.z = 50;
        
        const topLight = new THREE.DirectionalLight(0xffffff, 1);
        topLight.position.set(500, 500, 500);
        topLight.castShadow = true;
        scene.add(topLight);
        
        const ambientLight = new THREE.AmbientLight(0x333333, 1);
        scene.add(ambientLight);
        
        
        
        function animate() {
            renderer.render(scene, camera);
        }
        console.log('hello')
        
        /*  window.addEventListener("resize", function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }); 
        */
       
       animate();
}