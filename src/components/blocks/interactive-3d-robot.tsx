import { Component, Suspense, useEffect, useState, useRef, type ReactNode } from "react";
import Spline from "@splinetool/react-spline";

interface InteractiveRobotSplineProps {
  scene?: string;
  className?: string;
}

const DEFAULT_SCENE = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

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

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const [mounted, setMounted] = useState(false);
  const [webglOk, setWebglOk] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    setWebglOk(hasWebGL());

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
    };
  }, []);

  const loader = (
    <div className={`w-full h-full flex items-center justify-center ${className ?? ""}`}>
      <svg
        className="animate-spin h-5 w-5 text-white/60"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
        />
      </svg>
    </div>
  );

  const emptyFallback = <div className={`w-full h-full ${className ?? ""}`} />;

  if (!mounted) return loader;
  if (!webglOk) return emptyFallback;

  return (
    <div ref={containerRef} className="w-full h-full min-h-[inherit]">
      <SplineErrorBoundary fallback={emptyFallback}>
        <Suspense fallback={loader}>
          {isInView ? (
            <Spline
              scene={scene || DEFAULT_SCENE}
              className={className}
              onError={() => setWebglOk(false)}
            />
          ) : (
            emptyFallback
          )}
        </Suspense>
      </SplineErrorBoundary>
    </div>
  );
}