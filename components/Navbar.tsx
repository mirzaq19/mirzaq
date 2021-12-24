import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-dark1 py-4 w-full">
      <div className="flex gap-x-3 mx-5 sm:mx-10">
        <a className="navbar-brand" href="/">
          <Image
            src="/assets/img/logo.webp"
            alt="Mirzaq's Portfolio"
            width={40}
            height={40}
          />
        </a>
        <ul className="flex items-center text-white text-xs sm:text-base">
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
