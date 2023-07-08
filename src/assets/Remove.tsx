import { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  idx: string
}

export function Remove({ idx }: Props) {
  return (
    <svg
      className="hover:z-10 w-full"
      id={idx}
      width="20"
      height="20"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Vector_Vector" clip-path="url(#clip0_1_70)">
        <g id="Clip path group">
          <mask
            id="mask0_1_70"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="15"
            height="15"
          >
            <g id="clip0_224_25310">
              <path id="Vector" d="M15 0H0V15H15V0Z" fill="white" />
            </g>
          </mask>
          <g mask="url(#mask0_1_70)">
            <g id="Group">
              <path
                id={idx}
                d="M11.875 4.00625L10.9938 3.125L7.5 6.61875L4.00625 3.125L3.125 4.00625L6.61875 7.5L3.125 10.9938L4.00625 11.875L7.5 8.38125L10.9938 11.875L11.875 10.9938L8.38125 7.5L11.875 4.00625Z"
                fill="#1B1C1D"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1_70">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
