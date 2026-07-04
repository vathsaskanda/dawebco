import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import type { Group } from "three";
import bunnyAsset from "@/assets/round_bunny.glb.asset.json";

// Preload asset globally
useGLTF.preload(bunnyAsset.url);

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: unknown) { console.warn("Model failed to load:", error); }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

function Bunny({ autoRotate }: { autoRotate: boolean }) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(bunnyAsset.url);
  
  useFrame((_, delta) => {
    if (autoRotate && ref.current) {
      ref.current.rotation.y += delta * 0.25; // Smooth, slow idle spin speed
    }
  });

  return (
    <group ref={ref} position={[0, -0.6, 0]} scale={0.95}>
      <primitive object={scene} />
    </group>
  );
}

export function BunnyModel({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const idleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);

    // Completely freezes canvas execution loops when scrolled off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  if (!mounted) return <div className={className} />;

  return (
    <div ref={containerRef} className={className}>
      <ErrorBoundary fallback={<div className="w-full h-full min-h-[300px] flex items-center justify-center text-black/50 dark:text-white/50">Model Unavailable</div>}>
        {isInView ? (
          <Canvas 
            camera={{ position: [1.5, 0.6, 5.5], fov: 30 }} 
            dpr={1} // Performance optimization: locked to standard viewport pixel scales
            gl={{ 
              antialias: false, // Performance optimization: removes expensive edge passes
              alpha: true,
              powerPreference: "high-performance" // Performance optimization: forces hardware GPU acceleration
            }}
            style={{ width: "100%", height: "100%", background: "transparent" }}
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 4, 2]} intensity={1.2} />
            
            <Suspense fallback={null}>
              <Bunny autoRotate={!interacting} />
              <Environment preset="apartment" />
              
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
                  }, 1200); // Wait 1.2s after user interaction ends before resuming idle rotation
                }}
              />
            </Suspense>
          </Canvas>
        ) : (
          <div className="w-full h-full min-h-[300px]" />
        )}
      </ErrorBoundary>
    </div>
  );
}