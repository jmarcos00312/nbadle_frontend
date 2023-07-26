import './styles/App.css';
// eslint-disable-next-line no-unused-vars
import moment from 'moment-timezone';
import PlayerCard from './Components/PlayerCard';

const Header = () => {
  return (
    <h1 style={{
      color: "#FDB927",
      fontFamily: "Montserrat",
      fontWeight: "Bold", // or "bold" for a bold font
      width: "100%",
      marginLeft: "3em",
      marginRight: "3em",
      marginTop: "0",
      marginBottom: "0"

    }}>
      NBADLE
    </h1>
  );
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
