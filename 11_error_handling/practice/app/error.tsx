"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  return (
    <main>
      <h1>Something went wrong 😔</h1>

      <p>{error.message}</p>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </main>
  );
}