import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Code Hike - Not just a syntax highlighter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center max-w-3xl">
        <h1 className="text-6xl font-bold mt-16 mb-24">
          Not just a{" "}
          <span className="text-blue-600 font-bold">syntax highlighter</span>.
        </h1>

        <HomeDemo />

        <p className="text-2xl my-16  text-justify">
          Code Hike helps you build the best{" "}
          <span className="text-blue-600">code walkthroughs for the web</span>.
          Blogs, docs, tutorials, even coding videos. Code Hike helps you build
          the best code walkthroughs for the web. Blogs, docs, tutorials, even
          coding videos.
        </p>

        {/* <p className="mt-3 text-2xl">
          Get started by running{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            yarn add @codehike/mdx
          </code>
        </p> */}

        <Demos />
      </main>
    </div>
  );
}

function Demos() {
  return (
    <>
      <h2 className="mt-16 text-4xl font-bold">Explore the demos</h2>
      <div className="flex gap-6 w-full my-16">
        <div className="bg-gray-300 h-48 rounded w-64 shadow-md" />
        <div className="bg-gray-300 h-48 rounded w-64 shadow-md" />
        <div className="bg-gray-300 h-48 rounded w-64 shadow-md" />
        <div className="bg-gray-300 h-48 rounded w-64 shadow-md" />
      </div>
    </>
  );
}

function HomeDemo() {
  return (
    <div className="flex gap-6 w-full">
      <div className="bg-gray-300 h-80 rounded flex-1 shadow-lg">Write MDX</div>
      <div className="bg-gray-300 h-80 rounded flex-1 shadow-lg">
        Get a React component
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="flex w-full max-w-3xl pt-8 pb-8 items-center gap-4 text-gray-700 ">
      <h1 className="text-3xl font-bold mr-auto">Code Hike</h1>
      <a
        href="https://twitter.com/codehike_"
        className="hover:text-gray-500 transition-colors duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width={24}
          height={24}
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          data-v-313be23b
        >
          <path
            d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://github.com/code-hike/codehike"
        className="hover:text-gray-500 transition-colors duration-200"
      >
        <svg width={24} height={24} viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
    </nav>
  );
}
