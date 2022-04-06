import BracketL from "../assets/bracket-L.svg";
import BracketR from "../assets/bracket-R.svg";
import Paul from "../assets/paul-portrait.svg";

const Hero = () => {
  return (
    <section class="w-full p-5 " id="home">
      <div class="h-14"></div>
      <div class="h-80 p-4">
        {/* <img src={BracketL} class="h-60" /> */}

        <div class="flex  ">
          <h1 class="text-white text-4xl drop-shadow-lg p-4 pl-10 w-2/3 leading-[50px] ">
            <span class="font-heading font-bold text-5xl  max-w-sm">
              Hi, I’m Paul,{" "}
            </span>
            <br />
            <span class="font-sans">
              a{" "}
              <span class="bg-yellow-300 text-gray-800 font-bold px-1">
                {" "}
                frontend developer*
              </span>{" "}
              and{" "}
              <span class="bg-yellow-300 text-gray-800 font-bold px-1">
                graphic & web designer
              </span>{" "}
              living in Berlin, 🇩🇪
            </span>
            . In my free time I do{" "}
            <span class="bg-yellow-300 text-gray-800 font-bold px-1">
              comedy
            </span>
            .
            <h2 className="text-2xl mt-10">
              *Top skills: HTML, CSS, Javascript, React, TailwindCSS, p5.js
            </h2>
          </h1>
          <img src={Paul} class="h-60 w-1/3" />
        </div>
        {/* <img src={BracketR} class="h-60" /> */}
      </div>
    </section>
  );
};

export default Hero;
