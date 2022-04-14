export default function SectionHead({ name, dots }) {
  return (
    <>
      {dots ? (
        <div className="flex flex-col sm:flex-row items-center w-[90%] max-w-6xl align-middle  ">
          <div className="sm:border-b-2 sm:border-dotted sm:w-1/3 md:w-2/5"></div>
          <h2
            className="text-white text-2xl lg:text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 sm:w-1/3 md:w-1/5
  "
          >
            {name}
          </h2>
          <div className="sm:border-b-2 sm:border-dotted sm:w-1/3 md:w-2/5"></div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center w-[90%] max-w-6xl align-middle ">
          <div className=""></div>
          <h2
            className="text-white text-2xl text-center tracking-widest font-medium mt-5 mb-4 mx-3 
  "
          >
            {name}
          </h2>
          <div className=""></div>
        </div>
      )}
    </>
  );
}
