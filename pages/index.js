import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Pic from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/1.png";
import web2 from "../public/testing.PNG";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import { useState } from "react";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>MinePortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen ">
          <nav className="p-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons"> Renzxje</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Thanh Luong
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-6 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              Freelancer providing services for programming and design content
              needs. Join me down below and let`s get cracking!!!!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white md:text-6xl lg:text-7x`x`xxl">
            <a
              href="https://www.facebook.com/no1rennz/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/thanh-luong-4417b3252/ "
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/renzisheree/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full  w-60 h-60 mt-20 overflow-hidden md:h-90 md:w-90 ">
            <Pic src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-white">
              Ho Chi Minh City University of Foreign Languages and Information
              Technology (HUFLIT) student ,
              <span className="text-teal-600 font-bold">100% performance</span>{" "}
              Looking For A jobs in Ho Chi Minh City, Ho Chi Minh City, Vietnam.
            </p>
          </div>

          <div className="lg:flex gap-12 ">
            <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Pic
                className="inline-block"
                src={design}
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-medium pt-8 pd-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                {" "}
                Creating elegant designs suited for your need{" "}
              </p>
              <h4 className="py-4 text-teal-600 text-2xl">
                Design tools i use
              </h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Canva</p>
            </div>
            <div>
              <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Pic
                  className="inline-block"
                  src={code}
                  width={100}
                  height={100}
                />
                <h3 className="text-2xl font-medium pt-8 pd-2">
                  Coding Performance
                </h3>
                <p className="py-2"> Alway learning </p>
                <h4 className="py-4 text-teal-600 text-2xl">Languages</h4>
                <p className="text-gray-800 py-1">HTML-CSS=JS</p>
                <p className="text-gray-800 py-1">React Tailwind</p>
                <p className="text-gray-800 py-1">C#</p>
              </div>
            </div>
            <div>
              <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <Pic
                  className="inline-block"
                  src={consulting}
                  width={100}
                  height={100}
                />
                <h3 className="text-2xl font-medium pt-8 pd-2">
                  Positive Attitude
                </h3>
                <p className="py-2"> Always bring Possitive</p>
                <h4 className="py-4 text-teal-600 text-2xl">Maxim live</h4>
                <p className="text-gray-800 py-1">Happy</p>
                <p className="text-gray-800 py-1">Lively</p>
                <p className="text-gray-800 py-1">Code</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-medium dark:text-white">
              Portofolio
            </h3>
            <p className="py-2 text-gray-500 dark:text-white">
              {" "}
              Here is some of my Project :{" "}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg : flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a
                href="https://github.com/renzisheree/RenZ-portfolio"
                rel="noreferrer"
                target="_blank"
              >
                <Pic
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/2 flex-1 ">
              <a
                href="https://github.com/bablackk/cemmery-web"
                rel="noreferrer"
                target="_blank"
              >
                <Pic
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/2 flex-1 ">
              <Pic
                src={web3}
                className="rounded-lg object-cover"
                width={"100"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Pic
                src={web4}
                className="rounded-lg object-cover"
                width={"100"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Pic
                src={web5}
                className="rounded-lg object-cover"
                width={"100"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Pic
                src={web6}
                className="rounded-lg object-cover"
                width={"100"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
          <div className="text-center text-2xl dark:text-white ">-2023-</div>
        </section>
      </main>
    </div>
  );
}
