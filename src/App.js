import Schedule from "./components/schedule";
import Supported from "./components/supported";
import Nav from './components/nav';
import Landing from './components/landing';
import Mentor from './components/mentor'

const App = () => {
  return (
    <div className="font-sans">
      <Nav/>
      <Landing/>
      <Supported />
      <Schedule />
      <Mentor />
    </div>
  );
};
export default App;
