import Landing from "./components/landing";
import Prize from "./components/prizes";
import Nav from "./components/nav";
import Speaker from "./components/speaker";
const App = () => {
  return (
    <div className="font-sans text-white bg-brochgreen">
      <Nav />
      <Landing />
      <Prize />
      <Speaker />
    </div>
  );
};
export default App;
