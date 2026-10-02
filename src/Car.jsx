// Top-view car (nose points right), inline SVG so no image file is needed
export default function Car({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 260 120" aria-hidden="true">
      <g transform="translate(260 0) rotate(90)">
        <rect x="4" y="40" width="16" height="42" rx="6" fill="#111" />
        <rect x="100" y="40" width="16" height="42" rx="6" fill="#111" />
        <rect x="2" y="168" width="18" height="48" rx="6" fill="#111" />
        <rect x="100" y="168" width="18" height="48" rx="6" fill="#111" />
        <path d="M60 4C86 4 100 22 102 56L108 120L104 200C102 238 84 256 60 256C36 256 18 238 16 200L12 120L18 56C20 22 34 4 60 4Z" fill="#f2761e" />
        <path d="M36 92C40 80 80 80 84 92L88 128L84 152C70 158 50 158 36 152L32 128Z" fill="#10141c" />
        <path d="M42 170H78L82 214C70 220 50 220 38 214Z" fill="#c9500f" />
        <path d="M30 28L44 22L40 40ZM90 28L76 22L80 40Z" fill="#fff" opacity=".85" />
        <path d="M26 232L40 236L36 246ZM94 232L80 236L84 246Z" fill="#b00020" />
      </g>
    </svg>
  );
}
