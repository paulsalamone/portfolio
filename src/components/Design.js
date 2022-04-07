import { useState, useContext } from "react";
import { DesignData } from "../content/DesignData";
import Card2 from "./Card2";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import Modal1 from "./Modal1";
import { ModalContext } from "../contexts/ModalContext";
const Design = (props) => {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <>
      <Modal1 />

      <section className="flex flex-col items-center mt-20">
        <div className="flex flex-row items-center w-[90%] max-w-6xl align-middle ">
          <div className="border-b-2 border-dotted w-2/5"></div>
          <h2 className="text-white text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 w-1/5">
            DESIGN
          </h2>
          <div className="border-b-2 border-dotted w-2/5"></div>
        </div>

        <div class="grid grid-cols-3 w-[90%] max-w-6xl">
          {DesignData.map((e) => {
            return (
              <>
                <Card2 {...e} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Design;
