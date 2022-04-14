import SkillsData from "../../content/SkillsData";
import Rating from "./Rating";
import SkillsCard from "./SkillsCard";
import SectionHead from "../SectionHead";

const Skills = () => {
  console.log(SkillsData.frontend);
  return (
    <section id="skills" className="flex flex-col items-center  p-4 mt-2 ">
      <div className="flex flex-col mb-6 mt-10  p-1 w-full sm:w-[92%] items-center justify-center  ">
        <SectionHead name="SKILLS" dots={false} />

        <div className="h-content w-[375px] sm:w-[100%] flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1  ">
          <div>
            <SkillsCard data={SkillsData.frontend} name={"Frontend"} />
          </div>
          <div class="">
            <SkillsCard data={SkillsData.backend} name={"Backend"} />
          </div>
          <div class="sm:col-start-1 sm:col-end-3 md:col-start-3 md:col-end-4">
            <SkillsCard data={SkillsData.design} name={"Design"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
