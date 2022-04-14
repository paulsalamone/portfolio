import { HashLink as Link } from "react-router-hash-link";
import TopIcons from "./TopIcons";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from "react";

export default function TopHamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  return (
    <div
      class="sm:hidden flex flex-col fixed w-[100%]"
      style={{ boxShadow: "0 0 10px rgba(0,0,0,0.4" }}
    >
      <div className=" bg-stone-900 sm:mb-0 border-b-[1px] border-yellow-300 flex flex-row justify-between items-center w-[100%] ">
        <div class="flex flew-row items-center">
          <div className="bg-yellow-300 p-2  sm:mb-0">
            <Link smooth to="#home" onClick={handleClose}>
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
          <Link
            smooth
            to="#home"
            class=" flex flex-row justify-between ml-3"
            onClick={handleClose}
          >
            <h1 class="text-md text-white first-letter:tracking-wider font-heading h-full border-b-2 hover:border-yellow-300 border-stone-900 mr-3 font-bold">
              PAUL SALAMONE
            </h1>
          </Link>
        </div>

        <div>
          <BiMenu
            class="mr-3 text-3xl active:text-white text-white hover:text-stone-900 hover:bg-yellow-300"
            onClick={handleMenu}
          />
        </div>
      </div>
      {/* MENU */}
      {menuOpen ? (
        <div>
          <div className="bg-stone-900 flex flex-col sm:flex-row font-bold pt-4 border-b-[1px] border-yellow-300">
            <div class="sm:border-l-2 border-stone-900 sm:border-dotted my-2">
              <Link smooth to="#home">
                <a
                  class="text-white font-heading text-lg font-light  mx-6  py-1 uppercase tracking-wide border-solid border-b-[1px] border-stone-900 hover:border-yellow-300 
				hover:text-yellow-300
				transition-all "
                >
                  Home
                </a>
              </Link>
            </div>
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted my-2">
              <Link smooth to="#webdev">
                <a
                  href="#webdev"
                  class="text-white font-heading text-lg font-light  mx-6  py-1 uppercase tracking-wide border-solid border-b-[1px] border-stone-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Web Dev
                </a>
              </Link>
            </div>
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted my-2">
              <Link smooth to="#design">
                <a
                  class="text-white font-heading text-lg font-light  mx-6  py-1 uppercase tracking-wide border-solid border-b-[1px] border-stone-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Design
                </a>
              </Link>
            </div>
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted my-2">
              <Link smooth to="#skills">
                <a
                  href="#skills"
                  class="text-white font-heading text-lg font-light  mx-6  py-1 uppercase tracking-wide border-solid border-b-[1px] border-stone-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all"
                >
                  Skills
                </a>
              </Link>
            </div>
            <div class="sm:border-l-2 sm:border-yellow-300 sm:border-dotted my-2">
              <Link smooth to="#contact">
                <a
                  href="#contact"
                  class="text-white font-heading text-lg font-light  mx-6  py-1 uppercase tracking-wide border-solid border-b-[1px] border-stone-900 hover:border-yellow-300 hover:text-yellow-300
				transition-all
        sm:mr-20
        "
                >
                  Contact
                </a>
              </Link>
            </div>
            <div class="ml-5 mt-2 mb-5">
              <TopIcons />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
