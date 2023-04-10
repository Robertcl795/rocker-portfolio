import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Image from "next/image";
import '../styles/globals.scss'

import { fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/helpers/fetchFromEndpoints";

const inter = Inter({ subsets: ["latin"] });

export const Home = async() => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  return (
    <div className="bg-darkBlue-950 text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-ice-500">
      <Header socials={socials} />
      <main>
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </main> 
    </div>
  );
}
export default Home;

