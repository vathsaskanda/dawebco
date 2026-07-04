import React, { Suspense, useRef, useState } from "react";

class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: unknown) { console.warn("Model failed to load:", error); }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, ContactShadows, Bounds } from "@react-three/drei";
import type { Group } from "three";
import slimeAsset from "@/assets/cute_slime.glb.asset.json";

useGLTF.preload(slimeAsset.url);

function SlimeModel({
  hovered,
  clicked,
  onHover,
  onClick,
}: {
  hovered: boolean;
  clicked: boolean;
  onHover: (h: boolean) => void;
  onClick: () => void;
}) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(slimeAsset.url);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * (hovered ? 0.9 : 0.35);
    const t = state.clock.getElapsedTime();
    const bounce = Math.sin(t * 2) * 0.05;
    const squish = clicked ? 0.85 : hovered ? 1.08 : 1;
    ref.current.position.y = bounce;
    ref.current.scale.setScalar(squish);
  });

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        onHover(false);
        document.body.style.cursor = "auto";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <primitive object={scene} />
    </group>
  );
}

export function SlimeViewer() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <ErrorBoundary fallback={<div className="w-full h-full min-h-[300px] flex items-center justify-center text-black/50 dark:text-white/50">Model Unavailable</div>}>
    <Canvas
      camera={{ position: [0, 0.5, 4], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.1} castShadow />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.4}>
          <SlimeModel
            hovered={hovered}
            clicked={clicked}
            onHover={setHovered}
            onClick={() => {
              setClicked(true);
              setTimeout(() => setClicked(false), 220);
            }}
          />
        </Bounds>
        <ContactShadows
          position={[0, -1.1, 0]}
          opacity={0.35}
          scale={6}
          blur={2.6}
          far={2}
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
    </ErrorBoundary>
  );
}