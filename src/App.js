import Schedule from "./components/schedule";
import Supported from "./components/supported";
import Nav from './components/nav';
import Landing from './components/landing';
import Prize from './components/Prize'

const App = () => {
  return (
    <div className="font-sans">
      <Nav/>
      <Landing/>
      <Supported />
      <Schedule />
      <Prize />
    </div>
  );
};
export default App;
