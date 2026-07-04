import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import type { Group } from "three";
import slimeAsset from "@/assets/cute_slime.glb.asset.json";

// Preload the asset globally 
useGLTF.preload(slimeAsset.url);

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: unknown) { console.warn("Model failed to load:", error); }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

function StaticSlimeModel() {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(slimeAsset.url);

  // Optimized smooth, slow frame loop calculation free of dynamic state properties
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.25; // Slow aesthetic spin speed
  });

  return (
    <group ref={ref} scale={1.1} position={[0, -0.2, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export function SlimeViewer() {
  return (
    <ErrorBoundary fallback={<div className="w-full h-full min-h-[300px] flex items-center justify-center text-black/50 dark:text-white/50">Model Unavailable</div>}>
      <Canvas
        camera={{ position: [0, 0.5, 3.5], fov: 40 }}
        dpr={1} // Performance fix: locked to standard resolution layout mapping
        gl={{ 
          antialias: false, // Performance fix: removes jagged pixel cleanup iterations
          alpha: true, 
          powerPreference: "high-performance" // Performance fix: forces discrete GPU usage
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 4, 2]} intensity={1.2} />
        
        <Suspense fallback={null}>
          <StaticSlimeModel />
          {/* Using a lightweight standard environmental light framework instead of multi-pass shadows */}
          <Environment preset="apartment" />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
}