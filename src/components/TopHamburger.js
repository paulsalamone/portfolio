import { HashLink as Link } from "react-router-hash-link";
import TopIcons from "./TopIcons";
import { BiMenu } from "react-icons/bi";
export default function TopHamburger() {
  return (
    <div className="sm:hidden bg-yellow-300 p-3 mb-2 sm:mb-0 ">
      <Link smooth to="#home" class=" flex flex-row justify-between">
        <h1 class="text-2xl tracking-wider  h-full border-b-2 border-yellow-300 hover:border-stone-900">
          <span class="mr-2  font-heading font-black">PAUL</span>
          <span class="font-sans font-semibold" style={{ fontSize: "1.7rem" }}>
            SALAMONE
          </span>
        </h1>
        <BiMenu class="text-3xl hover:bg-white" />
      </Link>
    </div>
  );
}
