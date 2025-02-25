"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const setImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="aspect-square relative">
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90"
          onClick={previousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className="object-cover"
      />
      {images.length > 1 && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImage(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
