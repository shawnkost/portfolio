import { NavBar } from "@/app/ui/Navbar/Navbar";
import AboutMe from "./ui/About/AboutMe";
import MyProjects from "./ui/Projects/MyProjects";
import MySkills from "./ui/Skills/MySkills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="home-gradient bg-cover bg-center bg-no-repeat">
          <section>
            <AboutMe />
          </section>
          <section>
            <MySkills />
          </section>
        </div>
        <section>
          <MyProjects />
        </section>
      </main>
    </>
  );
}
