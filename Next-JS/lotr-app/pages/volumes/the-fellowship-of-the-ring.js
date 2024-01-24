import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function TheFellowshipOfTheRing() {
  let volumeOne = volumes[0];
  console.log("Volume 2: ", volumes[0]);

  console.log("Cover image: ", volumeOne.cover);
  return (
    <>
      <Head>
        <title>{volumeOne.title}</title>
      </Head>
      <main>
        <Link href={"/volumes"}>
          <span>← All Volumes</span>
        </Link>
        <h1>{volumeOne.title}</h1>
        <p>{volumeOne.description}</p>
        <ul>
          {volumeOne.books.map((book) => (
            <li key={book.ordinal}>{`${book.ordinal}: ${book.title}`}</li>
          ))}
        </ul>
        <div>
          <Image
            src={volumeOne.cover}
            alt={volumeOne.title}
            width={140}
            height={230}
          />
        </div>
      </main>
    </>
  );
}
