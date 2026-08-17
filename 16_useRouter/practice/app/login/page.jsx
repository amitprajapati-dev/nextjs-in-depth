"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin() {
    alert("Login Successful!");

    router.push("/dashboard");
    router.replace("/dashboard");
  }

  return (
    <>
      <h1 className="mb-5">Login Page</h1>

      <button className="p-5 bg-red-500" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}