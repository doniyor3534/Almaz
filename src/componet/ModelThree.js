import React, { Suspense, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sword.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Artorias_Sword_Sword_Cylinder.geometry}
        material={materials["Degradable Metal"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/sword.glb");

const ModelThree = () => {
  return (
    <div className="threejs">
      <Canvas camera={{ fov: 70, position: [0, 0, 15] }}>
        <Suspense fallback={null}>
          <directionalLight intensity={0.5} position={[0, 0, 50]} />
          <ambientLight intensity={0.2} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelThree;
