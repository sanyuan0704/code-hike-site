import Head from "next/head";
import Link from "next/link";
import { CodeHikeLogo, GitHubLink, TwitterLink } from "../../src/logo";

import fs from "fs";
import { remarkCodeHike } from "@code-hike/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";
import { useMemo } from "react";

const section = [
  ["Introduction", "introduction"],
  ["Installation", "installation"],
  ["Codeblocks", "codeblocks"],
  ["Annotations", "annotations"],
  ["<CH.Code>", "ch-code"],
  ["<CH.Section>", "ch-section"],
  ["<CH.Scrollycoding>", "ch-scrollycoding"],
  ["<CH.Spotlight>", "ch-spotlight"],
  ["<CH.Slideshow>", "ch-slideshow"],
  // ["Roadmap", "roadmap"],
  // ["Changelog", "changelog"],
  ["Troubleshooting", "troubleshooting"],
];

export async function getStaticPaths() {
  return {
    paths: section.map(([, name]) => ({ params: { slug: name } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const filename = context.params.slug || "introduction";
  const mdxSource = await fs.promises.readFile(
    `./docs/${filename}.mdx`,
    "utf8"
  );

  const theme = await import(`shiki/themes/github-dark.json`).then(
    (module) => module.default
  );

  const previewSource = await bundleMDX(mdxSource, {
    esbuildOptions(options) {
      options.platform = "node";
      return options;
    },
    xdmOptions(options) {
      options.remarkPlugins = [[remarkCodeHike, { theme }]];
      return options;
    },
  });

  return {
    props: {
      previewSource: previewSource.code,
      slug: filename,
    },
  };
}

export default function Page({ slug, previewSource }) {
  return (
    <div>
      <Head>
        <title>Code Hike - Docs</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <div className="sticky top-0">
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-4 text-gray-800 bg-white z-10 3cols:bg-transparent">
          <Link href="/">
            <a className="flex items-center gap-2 mr-auto ml-4">
              <CodeHikeLogo className="block h-10 w-10 text-blue-600" />
              <h1 className="text-3xl font-bold">Code Hike</h1>
            </a>
          </Link>

          <input placeholder="Search" className="w-40" />
          <TwitterLink className="hover:text-gray-500 transition-colors duration-200" />
          <GitHubLink className="hover:text-gray-500 transition-colors duration-200 mr-4" />
        </nav>
      </div>
      <div className="max-w-7xl mx-auto flex">
        <aside className="w-64 sticky top-16 self-start shrink-0 hidden 2cols:block">
          <Sidebar current={slug} />
        </aside>
        <article className="min-w-0 flex-1">
          <main
            className="mx-auto px-8 pt-4 prose"
            style={{ width: "80ch", maxWidth: "80ch" }}
          >
            <MDXComponent code={previewSource} />
          </main>
        </article>
        <aside className="w-64 top-16 shrink-0 hidden 3cols:block"></aside>
      </div>
    </div>
  );
}

function MDXComponent({ code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component />;
}
function Sidebar({ current }) {
  return (
    <ul className="p-4 text-gray-700 text-sm">
      {section.map(([item, slug]) => (
        <li
          key={item}
          className={
            "-ml-2 rounded " +
            (slug === current ? "bg-blue-100 text-black" : "hover:bg-gray-100")
          }
        >
          <Link href={`/docs/${slug}`}>
            <a className="block w-full select-none py-2 my-1 pl-2">{item}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
