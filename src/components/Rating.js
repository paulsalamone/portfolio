const Rating = (props) => {
  let stars = [];
  let blanks = [];
  let totals = [];

  for (let i = 0; i < props.rating; i++) {
    stars.push("x");
  }

  for (let i = 0; i < 5 - props.rating; i++) {
    blanks.push("-");
  }

  totals = stars.concat(blanks);

  return (
    <div className="flex flew-row text-white ">
      {totals.map((e) => {
        return (
          <div className="font-bold text-2xl bg-color-white w-3">
            {e === "x" ? (
              <p className="text-white">|</p>
            ) : (
              <p className="text-stone-700">|</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
