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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-red-300">
      <Head>
        <title>Quote Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex px-20 ">
        <div className="flex justify-center items-center bg-white flex-col w-96 h-[500px] border-8 border-borderBlue rounded-lg my-5 py-5">
          <h1 className="mb-10 text-2xl font-semibold px-14">{renderQuote}</h1>
          <p className="relative italic font-bold text-red-500 left-20 bottom-6">
            {renderAuthor}
          </p>
        </div>
      </main>
      <button
        onClick={() => randomQuote()}
        className="p-3 mt-5 text-white transition duration-150 ease-out rounded-lg bg-vibrantBlue hover:bg-blue-400 active:bg-gray-400 active:shadow-sm"
      >
        Generate Quote
      </button>
    </div>
  );
}
