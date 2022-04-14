export default function SectionHead({ name, dots }) {
  return (
    <>
      <div className="flex flex-row items-center w-[90%] max-w-6xl align-middle justify-center">
        {dots ? (
          <div className="border-b-2 border-dotted w-1/3 md:w-2/5"></div>
        ) : (
          <div className=" w-1/3 md:w-2/5"></div>
        )}

        <h2
          className="text-white text-lg sm:text-2xl lg:text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 sm:w-1/3 md:w-1/5
  "
        >
          {name}
        </h2>

        {dots ? (
          <div className="border-b-2 border-dotted w-1/3 md:w-2/5"></div>
        ) : (
          <div className=" w-1/3 md:w-2/5"></div>
        )}
      </div>
    </>
  );
}
