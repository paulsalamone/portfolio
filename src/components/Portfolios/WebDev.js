import { WebDevData } from "../../content/WebDevData";
import Card1 from "./Card1";
import CardFeature from "./CardFeature";
import { AnimationOnScroll } from "react-animation-on-scroll";
import SectionHead from "../SectionHead";
const WebDev = () => {
  return (
    <>
      <div id="webdev" className="h-4 sm:h-16"></div>
      <SectionHead name="WEB NAV" dots={true} />

      <section className="flex flex-col items-center">
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
