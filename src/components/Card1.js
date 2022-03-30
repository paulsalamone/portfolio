const Card1 = (props) => {
  return (
    <>
      <div
        className="bg-yellow-300 m-2 p-2 
	  hover:translate-x-[-1px] 
	  hover:translate-y-[-1px] 
	  active:translate-x-[1px] 
	  active:translate-y-[1px] 
	  transition-all
	  cursor-pointer"
      >
        <div className="bg-white h-full p-5">
          <img
            src={props.img}
            alt={props.name}
            className="border-2 border-gray-300 "
          />
          <div className="p-5">
            <h2 className="font-heading font-bold text-3xl mt-2 ">
              {props.name}
            </h2>
            <div className="flex my-1">
              {props.categories.map((e) => {
                return (
                  <div className="bg-yellow-300 mr-1 p-1 uppercase font-heading text-xs font-bold text-gray-700 tracking-wide">
                    {e}
                  </div>
                );
              })}
            </div>
            <p className="leading-tight mt-3 mb-4 text-lg">
              {props.description}
            </p>
            <p className="tracking-wide text-xs font-bold text-gray-700 font-heading bg-gray-300 w-max px-1 mt-2 mb-1">
              TECH STACK:
            </p>
            <p className="text-sm">{props.stack.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
