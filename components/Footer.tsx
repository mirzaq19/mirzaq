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
      link: "https://github.com/mirzaq19",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/mirzaq_arjap/",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/m-auliya-mirzaq-romdloni-971974189/",
    },
    {
      icon: faYoutube,
      link: "https://www.youtube.com/channel/UCK1-Vc_p0KBi1re-ojVvYlQ",
    },
  ];

  return (
    <footer className="bg-dark1">
      <Container className="py-5 text-center" isWide={true}>
        <p className="font-bold text-base md:text-lg">Reach me out</p>
        <div className="text-xl md:text-2xl flex justify-center gap-x-5 my-3">
          {socialMedia.map(({ icon, link }, idx) => (
            <a
              href={link}
              target={link.startsWith("http") ? "_blank" : ""}
              className="hover:text-peach transition-all duration-300"
              key={idx}
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-300">
          &copy; 2022 | Made with{" "}
          <FontAwesomeIcon className="text-red-500" icon={faHeart} /> By{" "}
          <a
            href="https://github.com/mirzaq19"
            target="_blank"
            className="border-transparent border-b-2 hover:border-gray-300 transition-all duration-300"
          >
            M. Auliya Mirzaq Romdloni
          </a>
        </p>
      </Container>
    </footer>
  );
}
