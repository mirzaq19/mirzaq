import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-dark1 py-4 w-full sticky top-0 z-10">
      <div className="flex gap-x-3 container mx-auto px-6">
        <a className="navbar-brand" href="/">
          <Image
            src="/assets/img/logo.webp"
            alt="Mirzaq's Portfolio"
            width={40}
            height={40}
          />
        </a>
        <ul className="flex items-center text-xs sm:text-base">
          <li className="p-2">
            <a href="#">About</a>
          </li>
          <li className="p-2">
            <a href="#">Skill</a>
          </li>
          <li className="p-2">
            <a href="#">Projects</a>
          </li>
          <li className="p-2">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
