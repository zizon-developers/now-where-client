import { useState } from 'react';
import { ReactComponent as LeftArrowIcon } from '../assets/arrow-icon/arrow_left_icon.svg';
import { ReactComponent as RightArrowIcon } from '../assets/arrow-icon/arrow_right_icon.svg';
import { cn } from 'libs/utils';

type CarouselItem = {
  id: number;
  src: string;
};

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    src: '/carousel-images/1.png',
  },
  {
    id: 2,
    src: '/carousel-images/2.png',
  },
  {
    id: 3,
    src: '/carousel-images/3.png',
  },
];

const PayLinkGuideCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const loadNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const loadPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="relative min-w-[280px] min-h-[280px] mb-4 group transition-transform">
        <img
          src={carouselItems[currentImageIndex].src}
          alt="Image"
          className="rounded-lg shadow-lg w-full h-full sm:h-64 object-cover transform transition-transform duration-500"
          style={{
            transform: `translateX(-${currentImageIndex * 1}%)`,
          }}
        />
        <button
          onClick={loadPrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <LeftArrowIcon
            width="25"
            height="25"
          />
        </button>
        <button
          onClick={loadNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <RightArrowIcon
            width="25"
            height="25"
          />
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-11">
        {carouselItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setCurrentImageIndex(item.id - 1)}
            className={cn(
              'w-3 h-3 rounded-full cursor-pointer',
              item.id - 1 === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PayLinkGuideCarousel;
