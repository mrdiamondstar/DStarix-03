export default function Loading() {
  return (
    <div className="flex min-h-[60svh] items-center justify-center">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-accent-gradient blur-sm opacity-70" />
        <div className="absolute inset-1.5 rounded-full bg-white" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-electric" />
      </div>
    </div>
  );
}
