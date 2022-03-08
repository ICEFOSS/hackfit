import Landing from "./components/landing";
import Nav from "./components/nav1";
import ProbState from "./components/prob_statement";
import About from "./components/about";
import Supporter from "./components/supporter";
import Prizes from "./components/Prize";
import Speaker from "./components/speaker";
import Schedule from "./components/schedule";
import Mentor from "./components/mentor";
import Sponsors from "./components/sponsors";
import Faq from "./components/faq";
import Footer from "./components/footer";
import LazyLoad from "react-lazyload";
import "./styles/App.css";

const App = () => {
  return (
    <div className="text-white bg-green-600">
      <LazyLoad height={300} offset={300} once>
        <section className="from-brochgreen to-green-600 bg-gradient-to-t">
          <Nav />
        </section>
      </LazyLoad>

      <section className="from-brochgreen to-green-600 bg-gradient-to-t">
        <Landing />
      </section>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="PStatement"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <ProbState />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="About"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36 lg:ml-0">
            <About />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className=" from-brochgreen to-green-600 bg-gradient-to-t"
        id="Supporters"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <Supporter />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="Prizes"
      >
        <LazyLoad height={300} offset={300} once>
          <section className=" ml-0 md:ml-36">
            <Prizes />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="Speakers"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <Speaker />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={400} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="Schedule"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <Schedule />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="Mentors"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <Mentor />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={400} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="Sponsors"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="ml-0 md:ml-36">
            <Sponsors />
          </section>
        </LazyLoad>
      </section>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>
      <section
        className="from-brochgreen to-green-600 bg-gradient-to-t"
        id="FAQ"
      >
        <LazyLoad height={300} offset={300} once>
          <section className="text-gray-700 ml-0 md:ml-36">
            <Faq />
          </section>
        </LazyLoad>
      </section>

      <section className="from-brochgreen to-green-600 bg-gradient-to-t">
        <LazyLoad height={200} offset={300} once>
          <Footer />
        </LazyLoad>
      </section>
    </div>
  );
};
export default App;
