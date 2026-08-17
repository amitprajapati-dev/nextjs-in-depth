import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>

      <div className="flex gap-10">
        {/* with link component*/}
        <Link href="/about">
          About
        </Link>

        {/* with a tag */}
        <a href="/contact">Contact</a>
      </div>
    </main>
  );
}