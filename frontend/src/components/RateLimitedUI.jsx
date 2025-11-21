export default function Ratelimitedui() {
  return (
    <div className="bg-neutral-950 text-neutral-200 flex items-center justify-center min-h-screen px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl mb-4">⏳</div>

        <h1 className="text-3xl font-semibold mb-2">You’re Being Rate Limited</h1>

        <p className="text-neutral-400 mb-6">
          You’ve sent too many requests in a short period of time.
          Please slow down and try again in a moment.
        </p>

        <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 text-left text-sm font-mono">
          <p className="text-neutral-500">Error:</p>
          <p className="text-neutral-300">429 — Too Many Requests</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-6 px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
