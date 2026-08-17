"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <h1>useRouter Demo</h1>

      <div className="flex gap-10 mt-10">
        <button onClick={() => router.push("/about")}>
          Go to About
        </button>


        <button onClick={() => router.replace("/dashboard")}>
          Replace (Dashboard)
        </button>

        <button onClick={() => router.back()}>
          Back
        </button>

        <button onClick={() => router.forward()}>
          Forward
        </button>

        <button onClick={() => router.refresh()}>
          Refresh
        </button>

        <button onClick={() => router.push("/login")}>
          login
        </button>

      </div>
    </main>
  );
}