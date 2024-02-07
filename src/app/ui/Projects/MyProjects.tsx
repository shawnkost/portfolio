"use client";

import { projects } from "@/app/lib/constants";
import Button from "@/app/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MobileProjects } from "./MobileProjects";

const MyProjects: React.FC = () => {
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (screen.width <= 768) {
        isMobile(true);
      } else {
        isMobile(false);
      }
    };

    window.addEventListener("resize", onResize);
  }, []);

  return (
    <div
      id="projects"
      className="project-container mt-14 scroll-mt-28 px-6 text-center"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold uppercase">Projects</h2>
        <p className="mt-4 font-light">
          Here&apos;s a small collection of some awesome websites and creations
          I&apos;ve made.
        </p>
        <div className="mt-10">
          {projects.map((project, i) => {
            if (mobile) {
              return (
                <MobileProjects
                  key={project.title}
                  title={project.title}
                  image={project.image}
                  buttons={project.buttons}
                  description={project.description}
                />
              );
            } else if (i % 2 === 0) {
              return (
                <div
                  className="mb-16 grid grid-cols-1 md:grid-cols-2"
                  key={project.title}
                >
                  <div className="image-wrapper mb-5 md:mb-0">
                    <Image
                      className="w-full"
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="text-left">
                    <h2 className="mb-4 text-2xl font-semibold uppercase">
                      {project.title}
                    </h2>
                    <p>{project.description}</p>
                    <div className="flex gap-8 font-semibold text-white">
                      {project.buttons.map((button) => (
                        <Button
                          text={button.text}
                          variant="primary"
                          link={button.link}
                          key={button.text}
                          border={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className="mb-16 grid grid-cols-1 md:grid-cols-2"
                  key={project.title}
                >
                  <div className="text-right">
                    <h2 className="mb-4 text-2xl font-semibold uppercase">
                      {project.title}
                    </h2>
                    <p>{project.description}</p>
                    <div className="flex justify-end gap-8 font-semibold text-white">
                      {project.buttons.map((button) => (
                        <Button
                          text={button.text}
                          variant="primary"
                          link={button.link}
                          key={button.text}
                          border={true}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="image-wrapper mb-5 md:mb-0">
                    <Image
                      className="w-full"
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
