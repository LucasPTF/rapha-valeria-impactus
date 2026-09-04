export function ImpactusMark({ className = "" }: { className?: string }) {
  return (
    <span className={`impactus-mark ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none" focusable="false">
        <path
          className="impactus-mark-link"
          d="M21 37.5 28.5 29M38.5 29.5 44 36"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="17" cy="42" r="8" stroke="currentColor" strokeWidth="4" />
        <circle cx="34" cy="23" r="10" stroke="currentColor" strokeWidth="4" />
        <circle cx="48" cy="41" r="8" stroke="currentColor" strokeWidth="4" />
        <circle className="impactus-mark-core" cx="34" cy="23" r="3.5" />
      </svg>
    </span>
  );
}
