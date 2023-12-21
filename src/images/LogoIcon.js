import React from "react";

export default function LogoIcon({ color = "white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="68"
      viewBox="0 0 80 68"
      fill="none"
    >
      <g clip-path="url(#clip0_113_853)">
        <path
          d="M39.9599 4.20001L76.4799 64.04H3.43994L39.9599 4.20001Z"
          stroke={color}
          stroke-width="3.6"
          stroke-miterlimit="10"
        />
        <path
          d="M63.1598 42.52C63.1598 42.52 50.1198 55.04 39.9998 55.04C29.8798 55.04 16.7998 42.52 16.7998 42.52C16.7998 42.52 29.8398 30 39.9598 30C50.0798 30 63.1598 42.52 63.1598 42.52Z"
          stroke={color}
          stroke-width="3.6"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.31982 32.4L24.5198 10.96"
          stroke={color}
          stroke-width="3.6"
          stroke-miterlimit="10"
        />
        <path
          d="M78.5999 32.4L55.4399 10.96"
          stroke={color}
          stroke-width="3.6"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_113_853">
          <rect
            width="80"
            height="66.72"
            fill={color}
            transform="translate(0 0.640015)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
