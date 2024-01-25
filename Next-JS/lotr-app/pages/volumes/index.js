import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { introduction } from "../../resources/lib/data";

import { volumes } from "../../resources/lib/data.js";

export default function Volumes() {
  let volume = volumes[0];
  console.log("Data.js (volumes): ", volume);
  return (
    <>
      <h1>Lord of the Rings</h1>

      {introduction}

      <h2>All Volumes</h2>

      <ul>
        {volumes.map((volume, slug) => (
          <Link href={`/volumes/${volume.slug.toLowerCase()}`} key={slug}>
            <li>{volume.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
}
