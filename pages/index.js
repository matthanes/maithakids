import Head from "next/head";
import { useState } from "react";
import Shuffle from "../components/Shuffle";
import Button from "../components/Button";

// getstaticprops store CHILD_ARRAY from env
export async function getStaticProps() {
  const CHILD_ARRAY = process.env.CHILD_ARRAY;
  return {
    props: {
      CHILD_ARRAY,
    },
  };
}


export default function Home({CHILD_ARRAY}) {
  const kidList=CHILD_ARRAY.split(', ');
  const [kids, setKids] = useState(kidList);
  const [showing, setShowing] = useState(true);

  return (
    <>
      <Head>
        <title>Random Kid Order</title>
        <meta
          name="description"
          content="Generate a random order of your kids' activities."
        />
      </Head>

      <main className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-white font-semibold text-5xl text-center mb-8 ">Random Kid Order</h1>

        <ul className={`${showing ? "hidden" : "flex"} flex-col justify-center items-center gap-3`}>
          {kids.map((kid, index) => (
            <li key={index}><Button text={kid} /> </li>
          ))}
        </ul>

        <h2 className="lg:inline-flex lg:w-auto mt-12 text-4xl px-6 py-4 rounded text-white font-bold items-center justify-center w-fit bg-violet-700 hover:bg-violet-900 transition duration-500"  onClick={() => {
          setShowing(false);
          setKids(Shuffle(kidList));
        }}>Shuffle</h2>
      </main>

    </>
  );
}
