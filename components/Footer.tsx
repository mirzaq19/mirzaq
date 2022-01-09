import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const socialMedia = [
    {
      icon: faGithub,
      link: "#",
    },
    {
      icon: faInstagram,
      link: "#",
    },
    {
      icon: faLinkedin,
      link: "#",
    },
    {
      icon: faYoutube,
      link: "#",
    },
  ];

  return (
    <footer className="bg-dark1">
      <Container className="py-5 text-center" isWide={true}>
        <p className="font-bold text-base md:text-lg">Reach me out</p>
        <div className="text-xl md:text-2xl flex justify-center gap-x-5 my-3">
          {socialMedia.map(({ icon, link }) => (
            <a
              href={link}
              className="hover:text-peach transition-all duration-300"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-300">
          &copy; 2022 | Made with{" "}
          <FontAwesomeIcon className="text-red-500" icon={faHeart} /> By{" "}
          <a
            href="#"
            className="border-transparent border-b-2 hover:border-gray-300 transition-all duration-300"
          >
            M. Auliya Mirzaq Romdloni
          </a>
        </p>
      </Container>
    </footer>
  );
}
