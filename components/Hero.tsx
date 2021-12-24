import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-dark1 via-dark1 to-dark3">
      <Container className="py-12">
        <div className="flex flex-col-reverse md:flex-row gap-y-5 sm:gap-y-10 md:gap-y-0 md:gap-x-20">
          <div className="md:w-1/2 flex items-center">
            <div>
              <div className="text-xl sm:text-2xl sm:gap-y-1 lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold flex flex-col lg:gap-y-3">
                <h1>Hello, Friends !</h1>
                <h1>My Name is</h1>
                <h1 className="text-transparent bg-cover xl:pb-2 bg-clip-text bg-gradient-to-r from-peach to-grape">
                  M. Auliya Mirzaq Romdloni
                </h1>
              </div>
              <div className="text-xs sm:text-base md:text-base lg:text-lg">
                <p className="font-light my-2 tracking-widest ">
                  Front End Enthusiast | Web Developer
                </p>
                <p>
                  Hi guys let me introduce myself, my name is M. Auliya Mirzaq
                  Romdloni and you can call me{" "}
                  <span className="text-pink-500 font-semibold">Mirzaq</span>.
                  I&apos;m undergraduate student at Institut Teknologi Sepuluh
                  Nopember.
                </p>
                <Link href="#">
                  <a className="font-bold border inline-block border-white px-4 py-3 rounded-md mt-4 hover:bg-white hover:text-dark1 transition-all duration-300">
                    About Me
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 px-10 md:p-0 text-center md:text-right">
            <Image
              src="/assets/img/hero.webp"
              alt="Mirzaq's Portfolio"
              width={400}
              height={430}
            />
          </div>
        </div>
        <div className="mt-10 text-lg sm:text-2xl">
          <div className="flex gap-x-4 sm:gap-x-5 my-3">
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
          </div>
          <p className="text-sm font-semibold sm:text-xl">
            Download{" "}
            <a
              title="Download My Curriculum Vitae"
              href="#"
              className="text-peach"
            >
              Curriculum Vitae
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}
