import AboutMe from "@/app/ui/About/AboutMe";
import { Contact } from "@/app/ui/Contact/Contact";
import { NavBar } from "@/app/ui/Navbar/Navbar";
import MyProjects from "@/app/ui/Projects/MyProjects";
import MySkills from "@/app/ui/Skills/MySkills";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="fcefbfa2-de35-4c1c-8247-d8cd31747fd6"
        ></script>
      </Head>
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
