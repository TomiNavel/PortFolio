import Navbar from "../components/navbar";
import Intro from "./intro";
import Skills from "./skills";
import Projects from "./projects";
import ContactForm from "./contact-form";
import Footer from "../components/footer";

export default function Portfolio() {
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
