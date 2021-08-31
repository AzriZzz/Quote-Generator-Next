import Head from "next/head";
import { quotes } from "../data.ts";
import { useState } from "react";

export default function Home() {
  const [renderQuote, setRenderQuote] = useState("");
  const [renderAuthor, setRenderAuthor] = useState("");


  const randomQuote = () => {
    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];

    setRenderQuote(quote);
    setRenderAuthor(author);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Quote Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col px-20 text-center">
        <div className="w-full h-[500px] flex items-center border-8 border-borderBlue rounded-lg my-5 py-5">
          <p>
            {renderQuote} <br />
            {renderAuthor}
          </p>
        </div>
      </main>
      <button
          onClick={() => randomQuote()}
          className="p-3 mt-5 text-white rounded-lg bg-vibrantBlue"
      >
        Generate Quote
      </button>
    </div>
  );
}
