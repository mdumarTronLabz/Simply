export function ExpandIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        d="M10 19H5V14M14 5H19V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      className={className}
      aria-hidden="false"
    >
      <path d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z" />
    </svg>
  );
}

export function AddIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H11V21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21V13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H13V3Z"
        fill={color}
      />
    </svg>
  );
}

export function DeleteIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="false"
    >
      <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
    </svg>
  );
}

export function EditIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m3.99 16.854-1.314 3.504a.75.75 0 0 0 .966.965l3.503-1.314a3 3 0 0 0 1.068-.687L18.36 9.175s-.354-1.061-1.414-2.122c-1.06-1.06-2.122-1.414-2.122-1.414L4.677 15.786a3 3 0 0 0-.687 1.068zm12.249-12.63 1.383-1.383c.248-.248.579-.406.925-.348.487.08 1.232.322 1.934 1.025.703.703.945 1.447 1.025 1.934.058.346-.1.677-.348.925L19.774 7.76s-.353-1.06-1.414-2.12c-1.06-1.062-2.121-1.415-2.121-1.415z"
        fill={color}
      />
    </svg>
  );
}

export function CopyIcon({ size = 24, color = "#000000", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
        fill={color}
      />
      <path
        d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
        fill={color}
      />
    </svg>
  );
}

export function SearchIcon({
  size = 24,
  fillColor = "#2A4157",
  strokeColor = "#222222",
  className = "",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        d="M20 12C20 9.19974 20 7.79961 19.455 6.73005C18.9757 5.78924 18.2108 5.02433 17.27 4.54497C16.2004 4 14.8003 4 12 4C9.19974 4 7.79961 4 6.73005 4.54497C5.78924 5.02433 5.02433 5.78924 4.54497 6.73005C4 7.79961 4 9.19974 4 12V18C4 18.9428 4 19.4142 4.29289 19.7071C4.58579 20 5.05719 20 6 20H12C14.8003 20 16.2004 20 17.27 19.455C18.2108 18.9757 18.9757 18.2108 19.455 17.27C20 16.2004 20 14.8003 20 12Z"
        fill={fillColor}
        fillOpacity="0.24"
      />
      <path
        d="M8.5 8.5L15.5 8.5"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5L13.5 11.5"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16.5" cy="15.5" r="2" stroke={strokeColor} />
      <path d="M19 18L20.5 19.5" stroke={strokeColor} strokeLinecap="round" />
    </svg>
  );
}

export function BackIcon({ size = 24, color = "currentColor", className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="false"
    >
      <path
        d="M8.60112 16.5308C8.89426 16.8234 9.36913 16.823 9.66178 16.5299C9.95442 16.2367 9.95402 15.7619 9.66088 15.4692L8.60112 16.5308ZM5.52988 11.3452C5.23674 11.0526 4.76187 11.053 4.46922 11.3461C4.17658 11.6393 4.17698 12.1141 4.47012 12.4068L5.52988 11.3452ZM4.48682 11.3291C4.18475 11.6125 4.16964 12.0871 4.45306 12.3892C4.73648 12.6912 5.21111 12.7064 5.51318 12.4229L4.48682 11.3291ZM9.64418 8.54694C9.94625 8.26352 9.96136 7.78889 9.67794 7.48682C9.39452 7.18475 8.91989 7.16964 8.61782 7.45306L9.64418 8.54694ZM5 11.126C4.58579 11.126 4.25 11.4618 4.25 11.876C4.25 12.2902 4.58579 12.626 5 12.626V11.126ZM15.37 11.876L15.3723 11.126H15.37V11.876ZM17.9326 10.8234L18.4614 11.3553V11.3553L17.9326 10.8234ZM19.75 8.26907C19.7511 7.85486 19.4163 7.51815 19.0021 7.517C18.5879 7.51586 18.2511 7.85072 18.25 8.26493L19.75 8.26907ZM9.66088 15.4692L5.52988 11.3452L4.47012 12.4068L8.60112 16.5308L9.66088 15.4692ZM5.51318 12.4229L9.64418 8.54694L8.61782 7.45306L4.48682 11.3291L5.51318 12.4229ZM5 12.626H15.37V11.126H5V12.626ZM15.3677 12.626C16.5267 12.6295 17.6395 12.1724 18.4614 11.3553L17.4038 10.2916C16.8641 10.8282 16.1333 11.1283 15.3723 11.126L15.3677 12.626ZM18.4614 11.3553C19.2833 10.5382 19.7468 9.42801 19.75 8.26907L18.25 8.26493C18.2479 9.02598 17.9435 9.755 17.4038 10.2916L18.4614 11.3553Z"
        fill={color}
      />
    </svg>
  );
}
