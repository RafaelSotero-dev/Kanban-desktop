type Props = {
  inx: string
}

export function Confirm({ inx }: Props) {
  return (
    <svg
      id={inx}
      width="12"
      height="12"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Shape" clip-path="url(#clip0_1_63)">
        <path
          id={inx}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.625 0.65625C6.5025 0.65625 6.39312 0.707812 6.31437 0.792188L3.125 4.21406L1.68562 2.66719C1.60687 2.58281 1.4975 2.53125 1.375 2.53125C1.13437 2.53125 0.9375 2.74219 0.9375 3C0.9375 3.13125 0.985625 3.24844 1.06437 3.33281L2.81437 5.20781C2.89312 5.29219 3.0025 5.34375 3.125 5.34375C3.2475 5.34375 3.35687 5.29219 3.43562 5.20781L6.93562 1.45781C7.01437 1.37344 7.0625 1.25625 7.0625 1.125C7.0625 0.867188 6.86562 0.65625 6.625 0.65625Z"
          fill="#6D6E6F"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_63">
          <rect
            width="7"
            height="5"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
