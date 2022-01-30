import Landing from "./components/landing";
import Nav from "./components/nav";
import ProbState from "./components/prob_statement";
import About from "./components/about";
import Supporter from "./components/supporter";
import Prizes from "./components/Prize";
import Speaker from "./components/speaker";
import Schedule from "./components/schedule";
import Mentor from './components/mentor'
import Sponsors from "./components/sponsors";
import Faq from "./components/faq";
import Footer from "./components/footer";
import LazyLoad from 'react-lazyload';
import './styles/App.css';

const App = () => {
  return (
    <div className="text-white bg-green-600">

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Nav />
        </section>
      </LazyLoad>

      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Landing />
      </section>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <ProbState />
        </section>
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <About />
        </section>
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className=' from-brochgreen to-green-600 bg-gradient-to-t'>
          <Supporter />
        </section>
      </LazyLoad>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Prizes />
        </section>
      </LazyLoad>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Speaker />
        </section>
      </LazyLoad>

      <LazyLoad height={400} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Schedule />
        </section>
      </LazyLoad>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Mentor />
        </section>
      </LazyLoad>

      <LazyLoad height={400} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Sponsors />
        </section>
      </LazyLoad>

      <LazyLoad height={200} offset={300} once>
        <div className="spacer layer1" />
      </LazyLoad>

      <LazyLoad height={300} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Faq />
        </section>
      </LazyLoad>

      <LazyLoad height={200} offset={300} once>
        <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
          <Footer />
        </section>
      </LazyLoad>
    </div>
  );
};
export default App;
