import './App.css';
import IntroPage from './IntroPage/IntroPage';
import Break from '../components/Break/Break';
import ThirdPage from './ThirdPage/ThirdPage';
import SecondPage from './SecondPage/SecondPage';
import FourthPage from './FourthPage/FourthPage';

function App() {
  return (
    <div className="App">
      <IntroPage/>
      <Break/>
      <SecondPage/>
      <Break/>
      <ThirdPage/>
      <Break/>
      <FourthPage/>
    </div>
  );
}

export default App;
