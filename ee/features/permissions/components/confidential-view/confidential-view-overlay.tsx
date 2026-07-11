export function ConfidentialViewOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-50 bg-[repeating-linear-gradient(-28deg,rgba(0,0,0,0.05)_0,rgba(0,0,0,0.05)_1px,transparent_1px,transparent_72px)]"
    />
  );
}
