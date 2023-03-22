import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-5 bg-[rgb(36,36,36)] text-white h-screen" >
      <Header />
      <main className={styles.main}>
        <section id="hero">
          <Hero />
        </section>

        {/* ABOUT */}
        {/* EXPERIENCE */}
        {/* SKILLS */}
        {/* PROJECTS */}
        {/* CONTACT */}
      </main>
    </div>
  );
}
