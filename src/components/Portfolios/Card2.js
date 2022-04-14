import Modal1 from "./Modal1";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import Categories from "./Categories";

const Card2 = (props) => {
  const [modal, setModal] = useContext(ModalContext);
  console.log("Card2 says modal is " + modal);
  return (
    <>
      <div
        className="box-border bg-yellow-300 
        m-2 p-2
	    hover:translate-x-[-1px] 
		hover:translate-y-[-1px] 
hover:shadow-3xl
    active:translate-x-[1px] 
		active:translate-y-[1px] 
		transition-all
		cursor-pointer
    
		"
        onClick={() =>
          setModal({
            trigger: true,
            name: props.name,
            categories: props.categories,
            description: props.description,
            stack: props.stack,
            img: props.img,
            year: props.year,
            subtitle1: props.subtitle1,
            caption1: props.caption1,
            img1: props.img1,
            subtitle2: props.subtitle2,
            caption2: props.caption2,
            img2: props.img2,
            subtitle3: props.subtitle3,
            caption3: props.caption3,
            img3: props.img3,
          })
        }
      >
        <div
          className="bg-white h-full p-2 flex flex-col
          items-center
          border-white border-[1px]
        box-border hover:border-[1px] hover:border-yellow-500
        "
        >
          <div class="h-auto w-[80%] sm:w-[90%] mt-3">
            <img
              src={props.img}
              alt={props.name}
              className="border-2 border-gray-300 w-[100%] hover:border-gray-500 "
            />
            {/* <div class="bg-stone-900 h-full relative z-50 top-[-225px]"></div> */}
          </div>

          <div className="p-2 sm:p-4 text-gray-900">
            <h2 className="font-heading font-bold text-2xl sm:text-2xl mt-2 ">
              {props.name}
            </h2>
            <Categories categories={props.categories} />

            <p className="leading-tight mt-3 mb-4 text-md sm:text-lg">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
