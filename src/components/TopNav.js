import { HashLink as Link } from "react-router-hash-link";
import TopIcons from "./TopIcons";
import TopHamburger from "./TopHamburger";

const TopNav = () => {
  return (
    <>
      <TopHamburger />
      <header className="hidden sm:block fixed top z-20 shadow-lg w-full border-b-[1px] border-yellow-300">
        <nav
          className="bg-stone-900 flex flex-col sm:flex-row justify-between items-center cursor-pointer 
        text-center sm:text-left
        transition-all"
        >
          <div className="bg-yellow-300 p-3 mb-2 sm:mb-0">
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
          <div className="bg-stone-900 flex flex-col sm:flex-row font-bold ">
            <div class="sm:border-l-2 border-stone-900 sm:border-dotted">
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
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted">
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
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted">
              <Link smooth to="#design">
                <a
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Design
                </a>
              </Link>
            </div>
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted">
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
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted">
              <Link smooth to="#contact">
                <a
                  href="#contact"
                  class="text-white font-heading text-xs mx-4 py-1 uppercase tracking-wide border-solid border-b-[1px] border-gray-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all
        sm:mr-20
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
