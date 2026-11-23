"use client";
/* Images are pre-optimized local WebP assets with intrinsic dimensions and fallback behavior. */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
export function Photo({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  style,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      className={className}
      style={style}
      src={failed ? "/images/fallback.svg" : src}
      alt={failed ? `${alt} — image unavailable` : alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
