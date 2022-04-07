import PureModal from "react-pure-modal";
import { useState, useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import "./Modal.css";

import { GrFormClose as Close } from "react-icons/gr";

const Modal1 = (props) => {
  const [modal, setModal] = useContext(ModalContext);

  //   name: "Important Startup News",
  //   categories: ["logo", "editorial", "social media"],
  //   description:
  // 	'A short-lived satirical startup news channel created with my associate Christoph "Pitch Doctor" Sollich',
  //   stack: ["Illustrator", "Photoshop"],
  //   img: "/images/isn1.png",
  //   year: 2021,

  return (
    <div class="overflow-y-auto ">
      <PureModal
        replace="true"
        class="h-full border-8 overflow-y-auto"
        isOpen={modal.trigger}
        width="95%"
        scrollable="true"
        // footer={<>footer</>}
        onClose={() => {
          setModal({ ...modal, trigger: false });
          return true;
        }}
      >
        <div
          class="bg-yellow-300  p-3   
mt-10 mb-10"
        >
          <div
            class="bg-white min-h-screen 
		  overflow-auto
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
              <h2 class="mt-3 mb-5  text-3xl font-heading font-bold  text-center">
                {modal.name}
              </h2>
              <p class="w-[55%] text-center mb-5">{modal.description}</p>

              {/* GALLERY */}
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
      </PureModal>
    </div>
  );
};

export default Modal1;
