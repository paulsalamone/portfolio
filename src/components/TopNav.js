import { HashLink as Link } from "react-router-hash-link";
import TopIcons from "./TopIcons";

const TopNav = () => {
  return (
    <>
      <header className="fixed top z-20 shadow-lg w-full border-b-[1px] border-yellow-300">
        <nav className="bg-stone-900 flex justify-between items-center cursor-pointer transition-all">
          <div className="bg-yellow-300 p-3">
            <Link smooth to="#home">
              <h1 class="text-2xl font-heading font-black h-full border-b-2 border-yellow-300 hover:border-stone-900">
                <a>
                  P
                  <span class="font-sans" style={{ fontSize: "1.7rem" }}>
                    S
                  </span>
                </a>
              </h1>
            </Link>
          </div>
          <div className="bg-gray-900 flex font-bold ">
            <div class="border-l-2 border-gray-900 border-dotted">
              <Link smooth to="#home">
                <a
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 
				hover:text-yellow-300
				transition-all "
                >
                  Home
                </a>
              </Link>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <Link smooth to="#webdev">
                <a
                  href="#webdev"
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Web Dev
                </a>
              </Link>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <Link smooth to="#design">
                <a
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Design
                </a>
              </Link>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <Link smooth to="#skills">
                <a
                  href="#skills"
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Skills
                </a>
              </Link>
            </div>
            <div class="border-l-2 border-yellow-300 border-dotted">
              <Link smooth to="#contact">
                <a
                  href="#contact"
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all
        mr-20
        "
                >
                  Contact
                </a>
              </Link>
            </div>
            <div>
              <TopIcons />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default TopNav;
