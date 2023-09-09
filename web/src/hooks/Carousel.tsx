import { useState } from 'react';
import { LeftArrowIcon, RightArrowIcon } from '../assets/ArrowIcon';
import { cn } from 'libs/utils';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: string[] = [
    '/carousel-images/1.png',
    '/carousel-images/2.png',
    '/carousel-images/3.png',
  ];

  const loadNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const loadPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div>
      <div className="relative min-w-[280px] min-h-[280px] mb-4 group transition-transform">
        <img
          src={images[currentImageIndex]}
          alt="Image"
          className="rounded-lg shadow-lg w-full h-full sm:h-64 object-cover transform transition-transform duration-500"
          style={{ transform: `translateX(-${currentImageIndex * 1}%)` }}
        />
        <button
          onClick={loadPrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <LeftArrowIcon />
        </button>
        <button
          onClick={loadNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <RightArrowIcon />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-11">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              'w-3 h-3 rounded-full cursor-pointer',
              index === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
