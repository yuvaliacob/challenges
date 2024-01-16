import Image from "./Image.js";
import Link from "./Link.js";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <Link href="#">
      <Image className="round-image" src={logo} alt="logo" />
    </Link>
  );
}
