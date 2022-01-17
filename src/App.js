import Landing from "./components/landing";
import Prizes from "./components/Prize";
import Nav from "./components/nav";
import Faq from "./components/faq";
import Supported from "./components/supported";
import Schedule from "./components/schedule";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Supported />
      <Prizes />
      <Schedule />
      <Faq />
    </div>
  );
};
export default App;
