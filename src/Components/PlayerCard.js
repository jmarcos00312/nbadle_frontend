// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "../styles/playerCard.css";

function PlayerCard(props) {
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [blurAmount, setBlurAmmount] = useState(10);
  // eslint-disable-next-line no-unused-vars
  const [playerWon, setPlayerWon] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isGameOver, setIsGameOver] = useState(false);
  const [hint, setHint] = useState(0);
  const player_name = "Joel Embiid";

  const imgBlur = {
    filter: `blur(${blurAmount}px)`, // Use the blurAmount value here
    marginTop: "60px",
    transform: "scale(2)",
  };

  const handleSubmit = (submit) => {
    if (inputValue.toLowerCase() === player_name.toLowerCase()) {
      setIsGameOver(true);
      setPlayerWon(true);
      setBlurAmmount(10);
      setHint(0);
    } else {
      setHint((hint) => hint + 1);
      setBlurAmmount((x) => x - 2);
    }
    setInputValue("");

    if (hint > 5) {
      setPlayerWon(false);
      setIsGameOver(true);
    }
  };

  const handleEnterPress = (e) => e.key === "Enter" && handleSubmit(inputValue);

  const handlePlayAgain = () => {
    setPlayerWon(false);
    setIsGameOver(false);
    setHint(0);
    setInputValue("");
    setBlurAmmount(10);
  };

  const hint_1 = (
    <div className="hint_1">
      {/* <h2>Hint 1</h2> */}
      <h4 className="hint_header">Hint</h4>
      <div>
        <h3>Stats</h3>
        <ul>
          <li>PPG: 33.1</li>
          <li>RPG: 10.2</li>
          <li>APG: 4.2</li>
          <li>BPG: 1.7</li>
          <li>SPG: 1</li>
          <li>TPG: 3.4</li>
          <li>FPG: 3.1</li>
          <li>MPG: 34.6</li>
        </ul>
      </div>
    </div>
  );
  const hint_2 = (
    <div className="hint_2">
      {" "}
      <h4 className="hint_header">Hint</h4>
      <h5>Weight: 280 LBS</h5> <h5> Height: 7' 0"</h5>
    </div>
  );
  const hint_3 = (
    <div className="hint_3">
      {" "}
      <h4 className="hint_header">Hint</h4> <h5>College: Kansas</h5>
    </div>
  );
  const hint_4 = (
    <div className="hint_4">
      {" "}
      <h4 className="hint_header">Hint</h4> <h5>Position: C</h5>
    </div>
  );
  const hint_5 = (
    <div className="hint_5">
      {" "}
      <h4 className="hint_header">Hint</h4>
      <h5>Team: Philadelphia 76ers</h5>
    </div>
  );

  return (
    <div className="player_card">
      {console.log(hint)}
      <div className="img_container">
        <img
          style={imgBlur}
          src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop"
          alt="Player's profile img"
        />
      </div>
      {/* =============================================== */}
      <div className="hint_container">
        {hint >= 1 && <div className="hint_1_cont">{hint_1}</div>}

        {hint >= 2 && <div className="hint_2_cont">{hint_2}</div>}

        {hint >= 3 && <div className="hint_3_cont">{hint_3}</div>}

        {hint >= 4 && <div className="hint_4_cont">{hint_4}</div>}

        {hint >= 5 && <div className="hint_5_cont">{hint_5}</div>}
      </div>

      {playerWon ? (
        <div>
          <h1>You Win</h1>
          <button onClick={handlePlayAgain} className="submit_btn">
            Play Another
          </button>
        </div>
      ) : isGameOver ? (
        <div>
          <h1>You Lost</h1>
          <button onClick={handlePlayAgain} className="submit_btn">
            Play Another
          </button>
        </div>
      ) : (
        <div>
          <div className={`player_card_guide ${hint > 0 ? "hint-up" : ""}`}>
            You've guessed: {hint} times
          </div>

          {hint !== 6 && (
            <div className="input_and_button_form">
              <input
                className="input_form"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleEnterPress}
              />
              <button
                onClick={() => handleSubmit(inputValue)}
                className="submit_btn"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
