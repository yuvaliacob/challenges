import Link from "next/link";

export default function HomePage() {
  return (
    <Link href={"/volumes"}>
      <h1>LOTR Volumes</h1>
    </Link>
  );
}
