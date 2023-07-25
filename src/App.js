import './App.css';
import moment from 'moment-timezone';
import PlayerCard from './PlayerCard';

const Header = () => {
  return <h1 style={{
    color: "Red"
  }}>
    Hello react!
  </h1>
}

const Footer = () => {
  const now = moment().tz("CST");
  const hour = now.hour(); // Get the current hour
  const open = 9
  const close = 12
  const isOpen = hour >= open && hour <= close

  return (
    <div className="">
      <footer className="foot"> {new Date().toLocaleString() + ": "}
        {isOpen ?
          (<h1>
            We are open!
          </h1>) : (
            <h1>We are closed!</h1>
          )
        }
      </footer>
    </div>)
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Footer />
      </header>
      <PlayerCard />
    </div>
  );
}

export default App;
