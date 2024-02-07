import Image from "next/image";

type ChildProps = {
  socials: SocialLink[];
};

type SocialLink = {
  name: string;
  icon: string;
  link: string;
};

export function AboutLinks({ socials }: ChildProps) {
  return socials.map((social) => (
    <li
      key={social.name}
      className="h-16 w-16 transition-all duration-300 hover:scale-125"
    >
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image src={social.icon} alt={social.name} width={80} height={80} />
      </a>
    </li>
  ));
}
