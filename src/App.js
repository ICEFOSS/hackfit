import Landing from "./components/landing";
import Prizes from "./components/Prize";
import Nav from "./components/nav";
import Speaker from "./components/speaker";
import Faq from "./components/faq";
import Supported from "./components/supported";
import Mentor from './components/mentor'
import Schedule from "./components/schedule";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";
import About from "./components/about";

import './App.css';
const App = () => {
  return (
    <div className="font-sans text-white bg-green-600">
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Nav />
      </section>
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Landing />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <About />
      </section>
      <div className="spacer layer1" />
      <section className=' from-brochgreen to-green-600 bg-gradient-to-t'>
        <Supported />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Prizes />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Speaker />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Schedule />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Mentor />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Sponsors />
      </section>
      <div className="spacer layer1" />
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Faq />
      </section>
      <section className='from-brochgreen to-green-600 bg-gradient-to-t'>
        <Footer />
      </section>
    </div>
  );
};
export default App;
