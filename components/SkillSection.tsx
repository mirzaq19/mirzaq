import Image from "next/image";
import TitleSection from "./TitleSection";
import Container from "./Container";
import CardSkill from "./CardSkill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrawPolygon,
  faMobileAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

export default function SkillSection() {
  return (
    <div className="bg-dark1">
      <Container>
        <TitleSection title="My Skill" />
        <p className="text-xs sm:text-base lg:text-lg text-center mt-5 mb-10">
          When creating projects, there are several technologies in web
          development that I usually use. Below are some of the ones I usually
          use
        </p>
        <div className="grid grid-cols-3 px-10 justify-center sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-10 xl:gap-16 xl:px-20 2xl:px-56">
          <Image
            src="/assets/techstack/VScode_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/HTML_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/CSS_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Sass_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Javascript_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/React_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Illustrator_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
          <Image
            src="/assets/techstack/Figma_techstack.webp"
            alt="CSS"
            layout="responsive"
            draggable={false}
            width={50}
            height={50}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-20 px-10 gap-y-14 sm:gap-y-20 sm:pt-12 lg:gap-y-0 lg:flex-row lg:pt-14 lg:gap-x-10 xl:gap-x-20 xl:px-20 2xl:px-52">
          <CardSkill title="Graphic Design" icon={faDrawPolygon}>
            In the field of graphic design, I usually make designs for assets on
            my website or projects using Adobe Illustrator
          </CardSkill>
          <CardSkill title="UI/UX Design" icon={faMobileAlt}>
            In the field of UI/UX design I also have experience in using design
            platforms such as figma. This website is one that I designed using
            figma
          </CardSkill>
          <CardSkill title="Web Development" icon={faLaptopCode}>
            In the field of web development, when I work on projects I am also
            familiar with several technologies such as HTML, CSS, Javascript,
            Typescript, React, and so on.
          </CardSkill>
        </div>
      </Container>
    </div>
  );
}
