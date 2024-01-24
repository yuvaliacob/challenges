import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function TheTwoTowers() {
  let volumeTwo = volumes[1];
  console.log("Volume 2: ", volumes[1]);

  console.log("Cover image: ", volumeTwo.cover);
  return (
    <>
      <Head>
        <title>{volumeTwo.title}</title>
      </Head>
      <main>
        <Link href={"/volumes"}>
          <span>← All Volumes</span>
        </Link>
        <h1>{volumeTwo.title}</h1>
        <p>{volumeTwo.description}</p>
        <ul>
          {volumeTwo.books.map((book) => (
            <li key={book.ordinal}>{`${book.ordinal}: ${book.title}`}</li>
          ))}
        </ul>
        <div>
          <Image
            src={volumeTwo.cover}
            alt={volumeTwo.title}
            width={140}
            height={230}
          />
        </div>
      </main>
    </>
  );
}
