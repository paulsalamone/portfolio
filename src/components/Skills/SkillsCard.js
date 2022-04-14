import Rating from "./Rating";

const SkillsCard = (props) => {
  console.log(props.data);
  return (
    <>
      <div
        className="border-2 border-yellow-300 border-dotted rounded-lg py-6 px-10 
      h-[100%]
      "
      >
        <h3 className="text-white uppercase text-center mb-4 text-md tracking-wider font-heading font-bold">
          {props.name}
        </h3>

        <div>
          {props.data.map((e) => {
            return (
              <>
                <div>
                  {e.name !== null ? (
                    <div className="flex flex-row justify-between mb-2">
                      <p className="bg-yellow-300 font-heading font-semibold text-sm p-1 w-max">
                        {e.name}
                      </p>
                      <Rating rating={e.rating} />
                    </div>
                  ) : (
                    <p className="h-4"></p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
