import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5 bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0" >
      <Header />
      <main className={styles.main}>
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="skills" className="snap-center">
          <WorkExperience />
        </section>
        {/* PROJECTS */}
        {/* CONTACT */}
      </main>
    </div>
  );
}
