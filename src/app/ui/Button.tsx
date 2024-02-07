interface ChildProps {
  text: string;
  variant: string;
  link: string;
  border?: boolean;
}

interface ButtonProps {
  text: string;
  link: string;
  border?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ text, link, border }) => {
  return (
    <a
      className={`mt-7 inline-block max-w-full rounded-full ${
        border ? "border-2 border-primary" : ""
      } bg-primary px-7 py-3 text-xl transition-colors duration-300 hover:bg-white hover:text-primary md:text-2xl`}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

const SecondaryButton: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <a
      className="mt-7 inline-block max-w-[220px] rounded-full border-4 border-solid border-primary bg-secondary px-5 py-3 text-2xl text-white transition-colors
      duration-300 hover:text-secondary"
      href={link}
    >
      {text}
    </a>
  );
};

const Button: React.FC<ChildProps> = ({ text, variant, link, border }) => {
  switch (variant.toLowerCase()) {
    case "primary":
      return <PrimaryButton text={text} link={link} border={border} />;
    case "secondary":
      return <SecondaryButton text={text} link={link} />;
  }
  return null;
};

export default Button;
