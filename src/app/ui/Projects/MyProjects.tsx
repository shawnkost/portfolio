"use client";

import { projects } from "@/app/lib/constants";
import { useEffect, useState } from "react";
import { MobileProjects } from "./MobileProjects";
import ProjectComponent from "./ProjectComponent";

const MyProjects: React.FC = () => {
  const [mobile, isMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 768) {
        isMobile(true);
      } else {
        isMobile(false);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", onResize);
    };
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
            } else {
              return (
                <ProjectComponent
                  key={project.title}
                  project={project}
                  imageFirst={i % 2 === 0}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
