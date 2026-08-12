import Image from "next/image";

export default function Home() {
  console.log("Step 1");

throw new Error("Database Connection Failed!"); // throw custom error

console.log("Step 2");
  const user = null;
  return (
    <div className="">Home page {user.name}</div>
  );
}
