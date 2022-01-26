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
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Speaker />
      <Supported />
      <Prizes />
      <Schedule />
      <Mentor />
      <Sponsors />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
};
export default App;
