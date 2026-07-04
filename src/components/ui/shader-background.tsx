"use client";
import { cn } from "@/lib/utils";
import React, { type ReactNode, useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const ShaderBackground = ({
  className,
  children,
  ...props
}: ShaderBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-black text-white overflow-hidden",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 pointer-events-none">
          {mounted && (
            <MeshGradient
              style={{ width: "100%", height: "100%" }}
              colors={["#000000", "#1a1a1a", "#2a2a2a", "#ffffff", "#0a0a0a"]}
              speed={0.6}
              distortion={1}
              swirl={0.8}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>
        <div className="relative z-10 w-full h-full">{children}</div>
      </div>
    </main>
  );
};