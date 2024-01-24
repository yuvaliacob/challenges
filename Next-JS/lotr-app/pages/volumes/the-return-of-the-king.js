import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function TheReturnOfTheKing() {
  let volumeThree = volumes[2];
  console.log("Volume 3: ", volumes[2]);

  console.log("Cover image: ", volumeThree.cover);
  return (
    <>
      <Head>
        <title>{volumeThree.title}</title>
      </Head>
      <main>
        <Link href={"/volumes"}>
          <span>← All Volumes</span>
        </Link>
        <h1>{volumeThree.title}</h1>
        <p>{volumeThree.description}</p>
        <ul>
          {volumeThree.books.map((book) => (
            <li key={book.ordinal}>{`${book.ordinal}: ${book.title}`}</li>
          ))}
        </ul>
        <div>
          <Image
            src={volumeThree.cover}
            alt={volumeThree.title}
            width={140}
            height={230}
          />
        </div>
      </main>
    </>
  );
}
