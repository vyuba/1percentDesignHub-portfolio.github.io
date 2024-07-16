import { useState, useEffect } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import model from '/public/assets/human head.fbx';

function Home() {
  const [followerStyle, setFollowerStyle] = useState({
    position: 'absolute',
    width: '50px',
    height: '50px',
    backgroundColor: 'red',
    cursor: 'pointer',
    transition: 'all 0.5s ease-out',
    transform: 'translate(-50%,-50%)',
  });

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setFollowerStyle((prevStyle) => ({
        ...prevStyle,
        top: e.clientY + 'px',
        left: e.clientX + 'px',
      }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(7, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 6;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Create a renderer and append the canvas to the DOM
    const canvas = document.getElementById('humanHead');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);

    // Add orbit controls
    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;

    // Add lighting
    const hemiLight = new THREE.HemisphereLight(0x00ff00, 0x00000);
    scene.add(hemiLight);

    // Load the FBX model
    const fbxLoader = new FBXLoader();
    fbxLoader.load(
      model,
      (object) => {
        object.scale.set(0.01, 0.01, 0.01); // Adjust the scale if necessary
        object.position.set(0, -1.53, 0); // Center the model at the origin
        scene.add(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      (error) => {
        console.log(error);
      }
    );

    // Animation loop
    const animate = (t) => {
      requestAnimationFrame(animate);
      // controls.update();
      scene.rotation.y = t * 0.0005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const handleClick = () => {
    setIsFullscreen((prevFullscreen) => {
      const newFullscreen = !prevFullscreen;
      setFollowerStyle((prevStyle) => ({
        ...prevStyle,
        width: newFullscreen ? '100vw' : '50px',
        height: newFullscreen ? '100vh' : '50px',
      }));
      return newFullscreen;
    });
  };

  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='w-full h-[calc(100vh-200px)] relative overflow-hidden'>
        {/* <div
          className=''
          style={followerStyle}
          onClick={handleClick}
        >
        </div> */}
        {/* <Canvas>
          <mesh>
            <boxGeometry/>
          </mesh>
        </Canvas> */}
        <canvas className='bg-white' id='humanHead'></canvas>
      </div>
      <div className='animate-scroll'>
        <div className='font-Utara text-[100px] font-bold'>PORTFOLIO</div>
      </div>
    </div>
  );
}

export default Home;
