import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Image from "next/image";
import { GetStaticProps } from "next";
import { fetchExperiences, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/helpers/fetchFromEndpoints";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Technology[];
  projects: Project[];
  socials: Social[];
}

export const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <main className={styles.main}>
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contact" className="snap-start">
          <ContactMe />
        </section>

        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <a href="#hero">
              <Image className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/profile.jpg" alt="Logo" width={200} height={200} />
            </a>
          </div>
        </footer>
      </main> 
    </div>
  );
}
export default Home;


export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperiences();
  const projects = await fetchProjects();
  const skills = await fetchSkills();
  const socials = await fetchSocials();

  return {
    props: {
      pageInfo, experiences, projects, skills, socials
    },
    revalidate: 10
  }
}
