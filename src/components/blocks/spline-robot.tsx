import { Component, Suspense, useEffect, useState, type ReactNode } from "react";
import Spline from "@splinetool/react-spline";

interface SplineRobotProps {
  className?: string;
}

class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.warn("Spline failed to load:", error);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export function SplineRobot({ className }: SplineRobotProps) {
  const [mounted, setMounted] = useState(false);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    setMounted(true);
    setWebglOk(hasWebGL());
  }, []);

  const fallback = <div className={`w-full h-full ${className ?? ""}`} />;

  if (!mounted || !webglOk) {
    return fallback;
  }

  return (
    <SplineErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <Spline
          scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
          className={className}
          onError={() => setWebglOk(false)}
        />
      </Suspense>
    </SplineErrorBoundary>
  );
}