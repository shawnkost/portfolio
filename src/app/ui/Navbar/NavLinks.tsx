type ChildProps = {
  links: Link[];
};

type Link = {
  id: string;
  title: string;
};

export function NavLinks({ links }: ChildProps): JSXElement {
  return links.map((link) => (
    <li
      key={link.id}
      className={`${"text-white"} cursor-pointer hover:text-primary transition-colors duration-300`}
    >
      <a href={`#${link.id}`}>{link.title}</a>
    </li>
  ));
}
