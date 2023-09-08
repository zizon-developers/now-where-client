import { useState } from 'react';
import { cn } from 'libs/utils';
import ArrowIcon from 'components/ArrowIcon';
import PayLinkForm from 'hooks/PayLinkFrom';
import image1 from '/carousel-images/1.png';
import image2 from '/carousel-images/2.png';
import image3 from '/carousel-images/3.png';

const PayLinkPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const loadNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const loadPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center mb-14">
        <ArrowIcon d="M15 19l-7-7 7-7" />
        <h1 className="text-2xl font-semibold flex-grow ml-20">송금 링크 등록</h1>
      </div>

      <div className="relative min-w-[280px] min-h-[280px] mb-4 group transition-transform">
        <img
          src={currentImageIndex === 0 ? image1 : currentImageIndex === 1 ? image2 : image3}
          alt="Image"
          className="rounded-lg shadow-lg w-full h-full sm:h-64 object-cover transform transition-transform duration-500"
          style={{ transform: `translateX(-${currentImageIndex * 1}%)` }}
        />
        <button
          onClick={loadPrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ArrowIcon d="M15 19l-7-7 7-7" />
        </button>
        <button
          onClick={loadNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ArrowIcon d="M9 5l7 7-7 7" />
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

      <div className="flex justify-between items-center mb-4 mt-12">
        <h2 className="text-xl font-semibold">송금 링크</h2>
      </div>

      <PayLinkForm />
    </div>
  );
};

export default PayLinkPage;
