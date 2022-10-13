import { FC } from 'react';

interface IComponentProps {
  color?: string;
}

export const Mail: FC<IComponentProps> = ({ color }) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill={color ? color : 'white'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_17_424)">
      <path
        d="M14.7544 1.91406L10.2399 7.44276L14.7544 12.9714C14.8361 12.7611 14.8855 12.5289 14.8855 12.2805V2.60497C14.8855 2.35663 14.8361 2.12442 14.7544 1.91406Z"
        fill={color ? color : 'white'}
      />
      <path
        d="M8.3679 8.23005L14.1378 1.15399C13.9671 1.05329 13.7787 0.992371 13.5772 0.992371H1.30833C1.10686 0.992371 0.918463 1.05329 0.747803 1.15399L6.51768 8.23005C7.02791 8.85896 7.85766 8.85896 8.3679 8.23005Z"
        fill={color ? color : 'white'}
      />
      <path
        d="M0.13112 1.91406C0.0494245 2.12442 0 2.35663 0 2.60497V12.2805C0 12.5289 0.0494245 12.7611 0.13112 12.9714L4.64561 7.44276L0.13112 1.91406Z"
        fill={color ? color : 'white'}
      />
      <path
        d="M8.98454 8.99012C8.13444 10.038 6.75113 10.038 5.90132 8.99012L5.26229 8.20282L0.747803 13.7315C0.918463 13.8322 1.10686 13.8931 1.30833 13.8931H13.5772C13.7787 13.8931 13.9671 13.8322 14.1378 13.7315L9.62328 8.20282L8.98454 8.99012Z"
        fill={color ? color : 'white'}
      />
    </g>
    <defs>
      <clipPath id="clip0_17_424">
        <rect
          width="14.8855"
          height="12.9008"
          fill="white"
          transform="translate(0 0.992371)"
        />
      </clipPath>
    </defs>
  </svg>
);