import { skills } from "@/app/lib/constants";

const MySkills: React.FC = () => {
  return (
    <div
      className="md:scroll-mt-18 mx-auto mt-3 max-w-screen-2xl scroll-mt-20 rounded-[67px] bg-secondary py-7 px-6"
      id="skills"
    >
      <div className="mx-auto max-w-7xl py-8">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-left">
          My Skills
        </h2>
        <div className="grid grid-cols-1 place-content-center content-center gap-5 text-center uppercase sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.text}
              className="mt-7 inline-block rounded-full border-4 border-solid border-primary bg-secondary px-5 py-3 text-2xl text-white transition-colors
      duration-300"
            >
              <p>{skill.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
