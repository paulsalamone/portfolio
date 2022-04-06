import { WebDevData } from "../content/WebDevData";
import Card1 from "./Card1";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WebDev = () => {
  return (
    <>
      <div id="webdev" className="h-20"></div>

      <section className="flex flex-col items-center">
        {/* <div className=" mb-6 mt-10 bg-yellow-300 p-1 w-[90%]">
        <h2 className="text-gray-900 text-2xl text-center tracking-widest font-bold">
          WEB DEV
        </h2>
      </div> */}

        {/* <div className=" mb-6 mt-10 bg-yellow-300 p-1 w-[90%]"> */}
        <div className="flex flex-row items-center w-[90%] max-w-6xl align-middle ">
          <div className="border-b-2 border-dotted w-2/5"></div>
          <h2 className="text-white text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 w-1/5">
            WEB DEV
          </h2>
          <div className="border-b-2 border-dotted w-2/5"></div>
        </div>

        {/* </div> */}

        <div class="grid grid-cols-2 w-[90%] max-w-6xl">
          {WebDevData.map((e) => {
            return (
              <>
                <Card1 {...e} />
              </>
            );
          })}
        </div>
        <div id="design"></div>
      </section>
    </>
  );
};

export default WebDev;
