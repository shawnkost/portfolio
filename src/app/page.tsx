import { NavBar } from "@/app/ui/Navbar/Navbar";
import AboutMe from "./ui/About/AboutMe";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <div className="home-gradient bg-cover bg-center bg-no-repeat">
          <section>
            <AboutMe />
          </section>
        </div>
      </main>
    </>
  );
}
