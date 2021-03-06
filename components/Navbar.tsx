import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
export default function Navbar() {
  return (
    <nav className="bg-dark1 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 py-4 w-full sticky top-0 z-10">
      <Container className="flex gap-x-3" isWide={true}>
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src="/assets/img/logo.webp"
              alt="Mirzaq's Portfolio"
              width={40}
              height={40}
            />
          </a>
        </Link>
        <ul className="flex items-center text-xs sm:text-base">
          <li className="p-2">
            <Link href="#hero">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#skill">
              <a>Skill</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#portfolio">
              <a>Projects</a>
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
