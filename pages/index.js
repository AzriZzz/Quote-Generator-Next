import Head from "next/head";
import { quotes } from "../data.ts";

export default function Home() {
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Quote Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col px-20 text-center">
        <div className="w-full h-[500px] flex items-center border-8 border-borderBlue rounded-lg my-5 py-5" >
          <p>
            {quote} <br/>
            {author}
          </p>
        </div>

      </main>
        <button className="p-3 mt-5 text-white rounded-lg bg-vibrantBlue">
          Generate Quote
        </button>
    </div>
  );
}
