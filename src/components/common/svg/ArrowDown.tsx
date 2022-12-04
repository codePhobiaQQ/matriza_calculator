import React from "react";

interface ArrowDownI {
  clickHandler: () => void;
  isActive: boolean;
}

const ArrowDown = ({ clickHandler, isActive }: ArrowDownI) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      className={isActive ? "active" : ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 1.5C11.9616 4.23367 10.5384 5.76633 8 8.5L1.5 1.5"
        stroke="#582734"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
