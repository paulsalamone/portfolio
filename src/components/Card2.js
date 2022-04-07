import Modal1 from "./Modal1";
import { ModalContext } from "../contexts/ModalContext";
import { useContext } from "react";
const Card2 = (props) => {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <>
      <div
        className="bg-yellow-300 m-2 p-2
	    hover:translate-x-[-1px] 
		hover:translate-y-[-1px] 
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
          })
        }
      >
        <div className="bg-white h-full p-2 flex flex-col">
          <img
            src={props.img}
            alt={props.name}
            className="border-2 border-gray-300 h-max "
          />

          <div className="w-2/3 p-4 text-gray-900">
            <h2 className="font-heading font-bold text-3xl mt-2 ">
              {props.name}
            </h2>
            <div className="flex flex-row flex-wrap my-1 ">
              {props.categories.map((e) => {
                return (
                  <div className="bg-yellow-300 mr-1 mb-1 p-1 uppercase font-heading text-xs font-bold text-gray-700 tracking-wide">
                    {e}
                  </div>
                );
              })}
            </div>
            <p className="leading-tight mt-3 mb-4 text-lg">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
