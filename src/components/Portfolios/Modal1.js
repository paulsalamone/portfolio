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
border-8 border-yellow-300
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

              <div class="flex flex-col items-center">
                <h2 class="mt-3 mb-5  text-4xl font-heading font-bold  text-center">
                  {modal.name}
                </h2>
                <p class="w-[55%] text-center mb-5">{modal.description}</p>

                <div class="grid grid-cols-3 gap-2 w-[90%]">
                  <div className="mb-4">
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
                  <div>
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
                  <div>
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-2 w-[90%]">
                  <div className="mb-4">
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
                  <div>
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
                  <div>
                    <img src={modal.img} class="mb-2" />
                    <p class="text-center">Caption for this sub-image</p>
                  </div>
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
