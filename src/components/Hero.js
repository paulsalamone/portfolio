import BracketL from "../assets/bracket-L.svg";
import BracketR from "../assets/bracket-R.svg";
import Paul from "../assets/paul-portrait.svg";

const Hero = () => {
  return (
    <section
      class="w-full p-5 flex flex-col items-center 
    max-w-[1800px] 
    "
      id="home"
    >
      <div id="top-spacer" class="mt-64 sm:mt-20"></div>

      <div id="parent" class=" flex flex-row  w-[90%]">
        {/* sm: 640
md: 768
lg: 1024
xl: 1280
2xl: 1536 */}

        <div
          id="text"
          class=" flex flex-col w-[100%] sm:w-[70%] text-white
          
          sm:p-5
          md:-10
          lg:p-20  
          
          leading-normal

          text-xl
          md:text-2xl
          lg:text-3xl
          xl:text-4xl
          2xl:text-5xl 2xl:leading-normal
          max-w-[1100px]
         "
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4" }}
        >
          <p
            class="font-heading font-bold text-[1.5em] 
            md:mb-4
          lg:mb-8"
          >
            Hi, I'm Paul,
          </p>
          <p>
            a{" "}
            <span class="bg-yellow-300 text-black px-1">
              frontend developer
            </span>{" "}
            and{" "}
            <span class="bg-yellow-300 text-black px-1">graphic designer</span>{" "}
            living in Berlin, 🇩🇪.{" "}
          </p>
          <p class="mt-6">
            In my free time I do{" "}
            <span class="bg-yellow-300 text-black px-1">comedy</span>.
          </p>
        </div>

        <div id="image" class="w-[0%] sm:w-[30%]">
          <img src={Paul} class="hidden sm:block w-full max-h-[370px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
