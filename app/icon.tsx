import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Google requires favicon size to be a multiple of 48px square
export const size = {
  width: 48,
  height: 48,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="48" height="48">
          <g transform="translate(10, 10)">
            <circle cx="80" cy="80" r="48" fill="#ff7900" />
            <path d="M 80 52 L 85 62 L 94 58 L 94 68 L 104 68 L 100 77 L 109 82 L 100 87 L 104 96 L 94 96 L 94 106 L 85 102 L 80 112 L 75 102 L 66 106 L 66 96 L 56 96 L 60 87 L 51 82 L 60 77 L 56 68 L 66 68 L 66 58 L 75 62 Z" fill="#000000" />
            <circle cx="80" cy="80" r="13" fill="#ff7900" />
          </g>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
