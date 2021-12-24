import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-dark1 py-4 w-full sticky top-0 z-10">
      <div className="flex gap-x-3 container mx-auto px-6">
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
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#">
              <a>Skill</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#">
              <a>Projects</a>
            </Link>
          </li>
          <li className="p-2">
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
