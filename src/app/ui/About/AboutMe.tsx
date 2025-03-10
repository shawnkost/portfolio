import { aboutMe, socials } from "@/app/lib/constants";
import Button from "@/app/ui/Button";
import Image from "next/image";
import { AboutLinks } from "./AboutLinks";

export function AboutMe() {
  return (
    <div id="about" className="mb-6 w-full scroll-mt-20  px-6 md:scroll-mt-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center md:flex-nowrap">
        <div
          className="mb-6 font-semibold
uppercase text-white md:w-3/4 lg:w-2/3"
        >
          <h1 className="text-4xl">{aboutMe.intro}</h1>
          <h2 className="text-7xl">{aboutMe.name}</h2>
          <h2 className="text-3xl">
            {aboutMe.titleIntro}{" "}
            <span className="text-primary">{aboutMe.title}</span>
          </h2>
          <p className="mt-8 font-light normal-case text-white">
            {aboutMe.description}
          </p>
          <Button
            text="My Resume"
            variant="primary"
            link="https://drive.google.com/file/d/1nxPEIsTcV2Qs-R6IYqn7blexT0mgehXW/view?usp=sharing"
            border={false}
          />
        </div>
        <div>
          <Image
            src="/me.png"
            alt="myself"
            height={922}
            width={983}
            className="mb-6"
          />
        </div>
        <ul className="md:justify-normal flex w-full flex-row  justify-center gap-5 md:w-auto md:flex-col">
          <AboutLinks socials={socials} />
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
