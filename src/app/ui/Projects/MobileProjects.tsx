import Button from "@/app/ui/Button";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  buttons: Button[];
}

interface Button {
  text: string;
  link: string;
}

export function MobileProjects({
  title,
  description,
  image,
  buttons,
}: ProjectProps) {
  return (
    <div className="mb-16 grid grid-cols-1 md:grid-cols-2">
      <div className="image-wrapper mb-5 md:mb-0">
        <Image
          className="w-full"
          src={image}
          alt={title}
          width={500}
          height={500}
        />
      </div>
      <div className="text-left">
        <h2 className="mb-4 text-2xl font-semibold uppercase">{title}</h2>
        <p>{description}</p>
        <div className="flex gap-2 text-white sm:gap-8">
          {buttons.map((button) => (
            <Button
              text={button.text}
              variant="primary"
              link={button.link}
              key={button.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
