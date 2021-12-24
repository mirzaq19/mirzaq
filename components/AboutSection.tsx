import Image from "next/image";
import Container from "./Container";

export default function AboutSection() {
  return (
    <div className="bg-dark2">
      <Container className="py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">
            About Me
          </h1>
          <hr className="w-5/12 sm:w-4/12 lg:w-2/12 my-3 border-2 border-peach" />
        </div>
        <div className="my-5 lg:my-10">
          <p className="text-center text-sm sm:text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-peach  via-peach to-grape">
            Whether something is good or not depends on the perspective of the
            person who sees it
          </p>
          <p className="text-center text-xs sm:text-base my-3">
            {"~ My Motivation ~"}
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:gap-x-10 lg:px-20 2xl:px-60">
          <div className="md:w-4/6 text-xs sm:text-base lg:text-lg flex flex-col gap-y-3">
            <p>
              Hello! My name is Mirzaq and let me talk about myself. I decided
              to start exploring about web development in August 2021 especially
              on front-end development. I&apos;ve tried to take various courses
              on web development such as on youtube and online learning
              platforms like Dicoding.
            </p>
            <p>
              There are so many things to learn about website development, but
              with enthusiasm I will try to learn it. With trial and error I
              will try to continue to improve my ability to make myself better
            </p>
            <p>
              And by looking at the times that are now entering the 4.0
              industrial revolution, I don&apos;t only have programming skills.
              I also have several skills such as video editing, graphic design,
              and UI/UX design.
            </p>
          </div>
          <div className="md:w-2/6 text-center p-8 md:p-0">
            <Image
              src="/assets/img/myself.webp"
              alt="My Foto Profile"
              width={250}
              height={340}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
