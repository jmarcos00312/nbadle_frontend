import './styles/App.css';
// eslint-disable-next-line no-unused-vars
import moment from 'moment-timezone';
import PlayerCard from './Components/PlayerCard';

const Header = () => {
  return <h1 style={{
    color: "Red"
  }}>
    Hello react!
  </h1>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <Footer /> */}
      </header>
      <PlayerCard />
    </div>
  );
}

export default App;
