import Landing from "./components/landing";
import Prize from "./components/prizes";
import Prizes from "./components/Prize";
import Nav from "./components/nav";
import Faq from "./components/faq";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
      <Prizes />
      <Faq />
     </div>
  );
};
export default App;
