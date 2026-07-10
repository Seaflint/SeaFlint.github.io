import React from "react";

// Default gallery images (Unsplash) used when no `images` prop is provided.
const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
];

interface ImageAutoSliderProps {
  /** Image URLs to scroll. Defaults to a set of Unsplash images. */
  images?: string[];
  /** Tailwind classes controlling each tile's size / aspect ratio. */
  tileClassName?: string;
  /** Seconds for one full loop of the marquee. */
  speedSeconds?: number;
}

export const ImageAutoSlider = ({
  images = DEFAULT_IMAGES,
  tileClassName = "w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80",
  speedSeconds = 20,
}: ImageAutoSliderProps) => {
  // Duplicate images for a seamless loop.
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes image-auto-slider-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: image-auto-slider-scroll ${speedSeconds}s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="scroll-container w-full">
        <div className="infinite-scroll flex gap-6 w-max">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className={`image-item flex-shrink-0 ${tileClassName} rounded-xl overflow-hidden shadow-2xl`}
            >
              <img
                src={image}
                alt={`Gallery image ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
