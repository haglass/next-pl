import Head from "next/head";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Head>
        <title>하경미 포트폴리오</title>
        <meta
          name="description"
          content="프론프네드 개발자 하경미 포트로리오"
        />
        <meta name="keyword" content="React.js,portfolio,하경미" />
        <like rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/profile">
              <a className="mr-5 hover:text-gray-900">Profile</a>
            </Link>
            <Link href="/portfolio">
              <a className="mr-5 hover:text-gray-900">Portfolio</a>
            </Link>
            <Link href="/life">
              <a className="mr-5 hover:text-gray-900">Life</a>
            </Link>
            <Link href="/vision">
              <a className="mr-5 hover:text-gray-900">Vision</a>
            </Link>
          </nav>
          {/* 다크모드 적용 */}
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Haglass
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
