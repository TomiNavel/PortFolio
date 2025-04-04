import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import { JSX } from "react";

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}
