// BMW-inspired sporty sedan, top view, nose points right
export default function Car({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 310 120" aria-hidden="true">
      <defs>
        <linearGradient id="paint" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a3a8f" />
          <stop offset="0.6" stopColor="#1c69d4" />
          <stop offset="1" stopColor="#3d8cf0" />
        </linearGradient>
        <clipPath id="body">
          <path d="M12 38C12 26 28 16 58 15L218 15C256 16 282 32 296 52L298 60L296 68C282 88 256 104 218 105L58 105C28 104 12 94 12 82Z" />
        </clipPath>
      </defs>

      {/* wheels */}
      <g fill="#0b0b0e">
        <rect x="52" y="4" width="48" height="20" rx="8" />
        <rect x="52" y="96" width="48" height="20" rx="8" />
        <rect x="200" y="4" width="48" height="20" rx="8" />
        <rect x="200" y="96" width="48" height="20" rx="8" />
      </g>

      {/* body */}
      <path d="M12 38C12 26 28 16 58 15L218 15C256 16 282 32 296 52L298 60L296 68C282 88 256 104 218 105L58 105C28 104 12 94 12 82Z" fill="url(#paint)" />

      {/* M-style stripes on hood and trunk */}
      <g clipPath="url(#body)">
        <rect x="205" y="51" width="100" height="4" fill="#81c4ff" />
        <rect x="205" y="56" width="100" height="4" fill="#1b2f8f" />
        <rect x="205" y="61" width="100" height="4" fill="#e22d2d" />
        <rect x="0" y="51" width="60" height="4" fill="#81c4ff" />
        <rect x="0" y="56" width="60" height="4" fill="#1b2f8f" />
        <rect x="0" y="61" width="60" height="4" fill="#e22d2d" />
      </g>

      {/* glass + roof */}
      <path d="M92 32C110 26 172 26 198 36L208 46L208 74L198 84C172 94 110 94 92 88Z" fill="#0d1522" />
      <path d="M108 37C130 34 160 34 178 39L186 47L186 73L178 81C160 86 130 86 108 83Z" fill="#2a7de1" />
      <path d="M112 42C135 39 160 39 176 43" stroke="#fff" strokeOpacity=".35" strokeWidth="2" fill="none" />

      {/* mirrors */}
      <ellipse cx="206" cy="13" rx="9" ry="4" fill="#0a3a8f" />
      <ellipse cx="206" cy="107" rx="9" ry="4" fill="#0a3a8f" />

      {/* headlights */}
      <path d="M258 28L288 44L268 46Z" fill="#e8f6ff" stroke="#7fd3ff" strokeWidth="1.5" />
      <path d="M258 92L288 76L268 74Z" fill="#e8f6ff" stroke="#7fd3ff" strokeWidth="1.5" />

      {/* taillights */}
      <path d="M12 38L26 32L26 46L14 48Z" fill="#ff1f1f" />
      <path d="M12 82L26 88L26 74L14 72Z" fill="#ff1f1f" />
    </svg>
  );
}
