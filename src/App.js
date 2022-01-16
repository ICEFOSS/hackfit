import Landing from "./components/landing";
import Prize from "./components/prizes";
import Nav from "./components/nav";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
    </div>
  );
};
export default App;
