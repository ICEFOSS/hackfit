import Landing from "./components/landing";
import Prize from "./components/prizes";
import Prizes from "./components/Prize";
import Nav from "./components/nav";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
      <Prizes />
     </div>
  );
};
export default App;
