const Categories = (props) => {
  return (
    <>
      <div className="flex flex-row flex-wrap my-1 ">
        {props.categories.map((e) => {
          return (
            <div className="bg-yellow-300 mr-1 mb-1 p-1 uppercase font-heading text-xs font-bold text-gray-700 tracking-wide">
              {e}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
