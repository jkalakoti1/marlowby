"use client";
import { useState } from "react";
import { Photo } from "@/components/photo";
const images = [
  ["hero-box", "The complete Austin box concept"],
  ["coffee", "Coffee detail"],
  ["honey", "Honey detail"],
  ["pecans", "Regional snack detail"],
  ["ceramic", "Ceramic cup detail"],
];
export function Gallery() {
  const [index, setIndex] = useState(0);
  return (
    <div className="gallery">
      <div className="gallery-main">
        <Photo
          src={`/images/${images[index][0]}.webp`}
          alt={images[index][1]}
          width={900}
          height={675}
          priority
        />
      </div>
      <div className="gallery-thumbs" aria-label="Box gallery">
        {images.map(([src, alt], i) => (
          <button
            key={src}
            aria-label={`Show ${alt.toLowerCase()}`}
            aria-pressed={i === index}
            onClick={(e) => {
              setIndex(i);
              e.currentTarget.scrollIntoView({
                block: "nearest",
                inline: "nearest",
              });
            }}
            className={i === index ? "active" : ""}
          >
            <Photo
              src={`/images/${src}.webp`}
              alt=""
              width={140}
              height={105}
              className="thumb-img"
            />
          </button>
        ))}
      </div>
      <p className="small gallery-caption" aria-live="polite">
        {images[index][1]} · Illustrative imagery
      </p>
    </div>
  );
}