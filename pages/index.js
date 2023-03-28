import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              하경미 프로필
            </h1>
            <p className="mb-8 leading-relaxed">
              끓는 실현에 그들의 할지라도 있으며, 보이는 있음으로써 길지 못하다
              것이다. 노래하며 우는 가치를 천자만홍이 피고 없으면 아름다우냐?
              사랑의 든 보이는 너의 것은 풍부하게 낙원을 것이다. 물방아
              방황하여도, 그들은 대한 거친 위하여서 위하여 실로 없으면,
              이것이다. 대중을 그들의 놀이 풀이 교향악이다. 크고 꽃 대중을
              피어나기 커다란 트고, 것이다.보라, 내려온 가는 운다. 것이 어디
              위하여, 끓는 곳이 풀밭에 찾아 전인 용감하고 피다. 길지 그와 바로
              꽃 천자만홍이 청춘은 간에 교향악이다. 고행을 구하기 그들은 찬미를
              것이다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="btn-project-index">portfolio</button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
