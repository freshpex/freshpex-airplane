export const Arrow = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 9 16"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 8H8M8 8L1 1.5M8 8L1 14.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
