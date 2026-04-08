import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const HomePage = () => {
  return (
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;
