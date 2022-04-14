import Categories from "./Categories";

const CardFeature = (props) => {
  return (
    <>
      <div className="bg-yellow-300 m-2 p-2 col-span-2">
        <div
          className="bg-white h-full p-5 flex flex-col 
          sm:flex-row"
        >
          <div className="p-5 sm:w-2/5">
            <h2>FEATURED:</h2>
            <h2 className="font-heading font-bold text-3xl mt-2 ">
              {props.name}
            </h2>
            <Categories categories={props.categories} />

            <p className="leading-tight mt-3 mb-2 text-lg">
              {props.description}
            </p>
            <p>
              <a
                href={props.link}
                class="text-stone-400 font-semibold mb-8 underline underline-offset-2 "
              >
                Go to site
              </a>
            </p>
            <p className="tracking-wide text-xs font-bold text-gray-700 font-heading bg-gray-300 w-max px-1 mt-8 mb-1">
              TECH STACK:
            </p>
            <p className="text-sm">{props.stack.join(", ")}</p>
          </div>
          <div class="sm:w-3/5 ">
            <img
              src={props.img}
              alt={props.name}
              className="hidden sm:block border-2 border-gray-300 w-[100%] "
            />
            <div class="flex flex-col sm:flex-row  justify-between  mt-1 w-[100%]">
              <div class="sm:w-[49.5%]">
                <img
                  src={props.img2}
                  alt={props.name}
                  className="border-2 border-gray-300  "
                />
              </div>
              <div class="sm:w-[49.5%]">
                <img
                  src={props.img3}
                  alt={props.name}
                  className="border-2 border-gray-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
