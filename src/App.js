import Landing from "./components/landing";
import Prize from "./components/prizes";
import Nav from "./components/nav";
import Faq from "./components/faq";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
      <Faq />
    </div>
  );
};
export default App;
