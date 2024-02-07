import AboutMe from "@/app/ui/About/AboutMe";
import { Contact } from "@/app/ui/Contact/Contact";
import { NavBar } from "@/app/ui/Navbar/Navbar";
import MyProjects from "@/app/ui/Projects/MyProjects";
import MySkills from "@/app/ui/Skills/MySkills";

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
        <section>
          <Contact />
        </section>
      </main>
    </>
  );
}
