import SkillsData from "../content/SkillsData";
import Rating from "./Rating";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  console.log(SkillsData.frontend);
  return (
    <section className="flex flex-col items-center  p-4 mt-2">
      <div className=" mb-6 mt-10  p-1 w-[92%] items-center ">
        <h2 className="text-white text-3xl text-center tracking-widest font-medium mt-5 mb-4 mx-3">
          SKILLS
        </h2>
        <div className="h-content w-full grid grid-cols-3 gap-1  ">
          <SkillsCard data={SkillsData.frontend} name={"Frontend"} />
          <SkillsCard data={SkillsData.backend} name={"Backend"} />
          <SkillsCard data={SkillsData.design} name={"Design"} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
