import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const EmailIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 75.294 75.294"
    width="1em"
    {...props}
  >
    <path d="M66.097 12.089h-56.9C4.126 12.089 0 16.215 0 21.286v32.722c0 5.071 4.126 9.197 9.197 9.197h56.9c5.071 0 9.197-4.126 9.197-9.197V21.287c.001-5.072-4.125-9.198-9.197-9.198zm-4.494 6L37.647 33.523 13.691 18.089h47.912zm4.494 39.117h-56.9A3.201 3.201 0 0 1 6 54.009V21.457l29.796 19.16c.04.025.083.042.124.065.043.024.087.047.131.069.231.119.469.215.712.278.025.007.05.01.075.016.267.063.537.102.807.102h.006c.27 0 .54-.038.807-.102.025-.006.05-.009.075-.016.243-.063.48-.159.712-.278a3.27 3.27 0 0 0 .131-.069c.041-.023.084-.04.124-.065l29.796-19.16v32.551a3.204 3.204 0 0 1-3.199 3.198z" />
  </svg>
);

export const PhoneIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 95.6 95.6"
    width="1em"
    {...props}
  >
    <path d="M65.199 0H30.4c-6.947 0-12.6 5.652-12.6 12.6v70.399c0 6.948 5.652 12.601 12.6 12.601h34.8c6.948 0 12.601-5.652 12.601-12.601V12.6C77.8 5.653 72.148 0 65.199 0zM71.8 82.999a6.608 6.608 0 0 1-6.601 6.601H30.4a6.608 6.608 0 0 1-6.6-6.601V12.6c0-3.639 2.96-6.6 6.6-6.6h34.8c3.64 0 6.601 2.96 6.601 6.6L71.8 82.999z" />
    <path d="M62.925 9.325H32.674c-1.695 0-3.074 1.315-3.074 2.93V69.44c0 1.614 1.379 2.93 3.074 2.93h30.251c1.696 0 3.075-1.315 3.075-2.93V12.255c0-1.614-1.379-2.93-3.075-2.93zM60 66.369H35.6V15.325H60v51.044z" />
    <circle cx="47.801" cy="81.154" r="5.421" />
  </svg>
);
