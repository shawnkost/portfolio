import Image from "next/image";
import Button from "../Button";

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  buttons: {
    text: string;
    link: string;
  }[];
};

function ProjectComponent({
  project,
  imageFirst,
}: {
  project: ProjectProps;
  imageFirst: boolean;
}) {
  return (
    <div className="mb-16 grid grid-cols-1 md:grid-cols-2" key={project.title}>
      {imageFirst && (
        <div className="image-wrapper mb-5 md:mb-0">
          <Image
            className="w-full"
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
      )}
      <div className={imageFirst ? "text-left" : "text-right"}>
        <h2 className="mb-4 text-2xl font-semibold uppercase">
          {project.title}
        </h2>
        <p>{project.description}</p>
        <div
          className={
            imageFirst
              ? "flex gap-8 font-semibold text-white"
              : "flex justify-end gap-8 font-semibold text-white"
          }
        >
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
      {!imageFirst && (
        <div className="image-wrapper mb-5 md:mb-0">
          <Image
            className="w-full"
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
}

export default ProjectComponent;
