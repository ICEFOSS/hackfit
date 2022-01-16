import Landing from "./components/landing";
import Prize from "./components/prizes";
import Nav from "./components/nav";
import Schedule from "./components/schedule"
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
      <Schedule/>
    </div>
  );
};
export default App;
