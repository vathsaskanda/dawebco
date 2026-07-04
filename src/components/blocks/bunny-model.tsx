import React, { Suspense, useEffect, useRef, useState } from "react";

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: unknown) { console.warn("Model failed to load:", error); }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import type { Group } from "three";
import bunnyAsset from "@/assets/round_bunny.glb.asset.json";

function Bunny({ autoRotate }: { autoRotate: boolean }) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(bunnyAsset.url);
  useFrame((_, delta) => {
    if (autoRotate && ref.current) ref.current.rotation.y += delta * 0.4;
  });
  return (
    <group ref={ref} position={[0, -0.75, 0]} scale={0.95}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(bunnyAsset.url);

export function BunnyModel({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={className} />;
  return (
    <div className={className}>
      <ErrorBoundary fallback={<div className="w-full h-full min-h-[300px] flex items-center justify-center text-black/50 dark:text-white/50">Model Unavailable</div>}>
        <Canvas camera={{ position: [1.5, 0.6, 5.5], fov: 30 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 4, 2]} intensity={1.1} />
        <Suspense fallback={null}>
          <Bunny autoRotate={!interacting} />
          <Environment preset="apartment" />
          <ContactShadows position={[0, -1.2, 0]} opacity={0.35} blur={2.4} far={2} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.1}
            onStart={() => {
              if (idleTimeoutRef.current) {
                clearTimeout(idleTimeoutRef.current);
                idleTimeoutRef.current = null;
              }
              setInteracting(true);
            }}
            onEnd={() => {
              idleTimeoutRef.current = setTimeout(() => {
                setInteracting(false);
              }, 800);
            }}
          />
        </Suspense>
      </Canvas>
      </ErrorBoundary>
    </div>
  );
}