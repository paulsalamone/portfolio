import { WebDevData } from "../../content/WebDevData";
import Card1 from "./Card1";
import CardFeature from "./CardFeature";
import { AnimationOnScroll } from "react-animation-on-scroll";

const WebDev = () => {
  return (
    <>
      <div id="webdev" className="h-16"></div>
      <section className="flex flex-col items-center">
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
            return <>{e.feature ? <CardFeature {...e} /> : <Card1 {...e} />}</>;
          })}
        </div>

        <div id="design"></div>
      </section>
    </>
  );
};

export default WebDev;
