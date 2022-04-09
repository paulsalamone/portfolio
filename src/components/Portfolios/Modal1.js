import PureModal from "react-pure-modal";
import { useState, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import "./Modal.css";

import { GrFormClose as Close } from "react-icons/gr";

const Modal1 = (props) => {
  const [modal, setModal] = useContext(ModalContext);

  const onClose = () => {
    setModal({ ...modal, trigger: false });
    return true;
  };

  console.log("Modal1 says modal is " + modal);

  return (
    <div>
      {modal.trigger ? (
        <div
          class="
         top 
        bg-[rgba(0,0,0,0.5)] px-20 py-10  w-[100%] h-[100%] z-40
        flex justify-center items-center fixed
        "
        >
          <div
            class="bg-white  p-3   
mt-10 mb-10 overflow-y-auto absolute z-50 top-[-20px] w-[95%] h-[95%]
border-4 border-yellow-300
"
          >
            <div
              class="bg-white min-h-screen 
		  overflow-y-auto
		  "
            >
              <div class="flex flex-row justify-end ">
                <button
                  onClick={() => {
                    setModal({ ...modal, trigger: false });

                    return true;
                  }}
                >
                  <Close class="text-4xl hover:bg-yellow-200 m-2" />
                </button>
              </div>
              <p class="text-center text-xl text-stone-400 mb-2">DESIGN</p>

              <div class="flex flex-col items-center">
                <h2 class="mt-3 mb-5  text-4xl font-heading font-bold  text-center text-yellow-300 absolute ">
                  {modal.name}
                </h2>
                <h2 class="mt-3 mb-5  text-4xl font-heading font-bold  text-center relative z-50 translate-x-[-3px] translate-y-[-3px]">
                  {modal.name}
                </h2>
                <p class="w-[65%] text-center mb-7 text-lg">
                  {modal.description}
                </p>
              </div>

              {/* SECTION 1 */}
              <div class="flex flex-column items-center justify-center mb-10">
                <div class="flex flex-row w-[80%] mt-5">
                  <img src={modal.img1} class="w-1/2" />
                  <div class="ml-7 mt-16 w-1/2">
                    <h3 class="text-black font-heading font-semibold text-2xl my-4">
                      {modal.subtitle1}
                    </h3>
                    <p class="text-lg">{modal.caption1}</p>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div class="flex flex-col items-center mt-14">
                <div class="text-center w-[90%] flex flex-col items-center ">
                  <h3 class="text-black font-heading font-semibold text-2xl my-4">
                    {modal.subtitle2}
                  </h3>
                  <p class="w-[65%] text-center mb-7 text-lg">
                    {modal.caption2}
                  </p>
                  <img src={modal.img2} class="mt-4" />
                </div>
              </div>
              {/* SECTION 3 */}
              <div class="flex flex-col items-center mt-14">
                <div class="text-center w-[90%] flex flex-col items-center mb-10 ">
                  <h3 class="text-black font-heading font-semibold text-2xl my-4">
                    {modal.subtitle3}
                  </h3>
                  <p class="w-[65%] text-center mb-7 text-lg">
                    {modal.caption3}
                  </p>
                  {modal.img3.map((e) => {
                    return (
                      <>
                        <img
                          src={e.src}
                          alt={modal.subtitle3}
                          class="w-[50%] mt-5 mb-2 border-2 shadow-md"
                        />
                        <p class="text-sm mb-5 text-stone-400">{e.caption}</p>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal1;
