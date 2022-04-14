import { useState, useContext } from "react";
import { DesignData } from "../../content/DesignData";
import Card2 from "./Card2";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Modal1 from "./Modal1";
import { ModalContext } from "../../contexts/ModalContext";
import { HiArrowNarrowRight as Arrow } from "react-icons/hi";
import SectionHead from "../SectionHead";

const Design = (props) => {
  const [modal, setModal] = useContext(ModalContext);
  console.log("Design says modal is " + modal);

  return (
    <>
      <Modal1 />

      <section className="flex flex-col items-center mt-20">
        <SectionHead name="DESIGN" dots={true} />

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[90%] max-w-6xl">
          {DesignData.map((e) => {
            return (
              <>
                <Card2 {...e} />
              </>
            );
          })}
        </div>
        <div
          class="bg-stone-900 text-white  text-center
        p-3 sm:p-5 mt-2 text-lg sm:text-xl flex flex-col sm:flex-row justify-center items-center w-[90%] max-w-6xl
        "
        >
          See more on my
          <a
            href="https://www.behance.net/paulsalamone"
            class="flex flex-row items-center sm:ml-3"
          >
            <span class="text-yellow-300 flex flex-row items-center ">
              Behance Portfolio
              <Arrow class="ml-1" />
            </span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Design;
