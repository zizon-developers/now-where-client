import React from 'react';

interface ArrowIconProps {
  d: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ d }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-600"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={d}
    />
  </svg>
);

export default ArrowIcon;
