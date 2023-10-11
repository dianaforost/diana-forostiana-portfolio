const TelegramIcon = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className: string;
}) => {
  return (
    <a href="https://t.me/dianaforost">
      <svg
        width={width}
        height={height}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.47 42.71a2.23 2.23 0 0 0 2.076.273 2.176 2.176 0 0 0 1.358-1.575c1.63-7.658 5.582-27.04 7.065-34.005a1.464 1.464 0 0 0-.488-1.421 1.501 1.501 0 0 0-1.494-.263c-7.862 2.91-32.074 11.994-41.97 15.656a1.55 1.55 0 0 0-1.016 1.498c.022.664.468 1.24 1.112 1.433 4.438 1.327 10.263 3.174 10.263 3.174s2.723 8.222 4.142 12.403c.178.525.589.938 1.13 1.08.54.141 1.118-.007 1.521-.388l5.805-5.48s6.698 4.91 10.497 7.616ZM13.828 26.443l3.148 10.383.7-6.575L36.77 13.026a.52.52 0 0 0 .062-.707.533.533 0 0 0-.705-.12L13.827 26.442Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h45v45H0z" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
};
export default TelegramIcon;
