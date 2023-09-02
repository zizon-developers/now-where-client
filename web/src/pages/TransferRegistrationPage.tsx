import { useState, ChangeEvent, FormEvent } from 'react';
import Service from '../services/index';
import { API_HOST } from '../config';
import Pathname from '../constants/Pathname';

const TransferRegistrationPage = () => {
  const [link, setLink] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: string[] = [
    '/carousel-images/1.png',
    '/carousel-images/2.png',
    '/carousel-images/3.png',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const extractedValue: string = extractValueFromLink(link);

    try {
      const response = await Service.post(`${API_HOST}/users/pay-id`, null, {
        params: { id: extractedValue },
      });

      console.log('서버 응답:', response.data);
      alert('송금 링크가 성공적으로 등록되었습니다.');
      window.location.href = Pathname.MY_PAGE;
    } catch (error) {
      console.error('서버 요청 실패:', error);
      alert('송금 링크 등록에 실패했습니다.');
    }
  };

  const extractValueFromLink = (link: string): string => {
    const parts: string[] = link.split('/');
    const extractedValue: string = parts[parts.length - 1];
    return extractedValue;
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="flex items-center mb-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-16 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <h1 className="text-2xl font-semibold flex-grow">송금 링크 등록</h1>
      </div>

      {/* 이미지 캐러셀 */}
      <div className=" relative w-[280px] h-[280px] mb-4 ml-8">
        <img
          src={images[currentImageIndex]}
          alt="Image"
          className="rounded-lg shadow-lg w-full h-full sm:h-64 object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          {/* 이전 이미지로 이동하는 버튼 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          {/* 다음 이미지로 이동하는 버튼 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center space-x-2 mt-11">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentImageIndex ? 'bg-red-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4 mt-12">
        <h2 className="text-xl font-semibold">송금 링크</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border rounded-lg w-full py-4 px-3 mr-1 focus:outline-none focus:border-red-500"
            placeholder="송금 링크를 여기에 붙여넣거나 입력해주세요."
            value={link}
            onChange={handleLinkChange}
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-400 text-white py-2 px-6 rounded-md"
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default TransferRegistrationPage;
