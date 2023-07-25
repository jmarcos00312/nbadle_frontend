// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../styles/playerCard.css'

function PlayerCard(props) {

    const [inputValue, setInputValue] = useState("")
    const [blurAmount, setBlurAmmount] = useState(10)
    // eslint-disable-next-line no-unused-vars
    const [playerWon, setPlayerWon] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [isGameOver, setIsGameOver] = useState(false)
    const [hint, setHint] = useState(0)
    const player_name = 'Joel Embiid'


    const imgBlur = {
        filter: playerWon ? 'none' : 'blur(10px)',
        transform: 'scale(3)',
        border: '5px solid black', // Example border style
        padding: '20px', // Example padding
        margin: '100px', // Example margin
    };

    const handleSubmit = (submit) => {
        if (inputValue.toLowerCase() === player_name.toLowerCase()) {
            setIsGameOver(true)
            setPlayerWon(true)
            setHint(0)
            setBlurAmmount(10)
        }
        setHint(hint => hint + 1)
        setBlurAmmount(x => x - 2)
        setInputValue("")

        if (hint >= 4) {
            setPlayerWon(false)
            setIsGameOver(true)
        }
    }
    const handleEnterPress = (e) => (e.key === 'Enter' && handleSubmit(inputValue));

    const handlePlayAgain = () => {
        setPlayerWon(false)
        setIsGameOver(false)
        setHint(0)
        setInputValue("")
        setBlurAmmount(10)
    }

    const hint_1 = <div className="hint_1">
        <h2>Stats</h2>
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
    const hint_2 = <div className='hint_2'><h5>Weight: 280 LBS</h5> <h5> Height: 7' 0"</h5></div>
    const hint_3 = <div className='hint_3'>College: Kansas</div>
    const hint_4 = <div className='hint_4'>Position: C</div>
    const hint_5 = <div className='hint_5'>Team: Philadelphia 76ers</div>


    return (
        <div className="player_card" style={player_card_style}>
            <div className="img_container">
                <img
                    style={imgBlur}
                    className="player_img"
                    src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop"
                    alt="Player's profile img"
                />
            </div>
            {hint >= 1 && hint_1}
            {hint >= 2 && hint_2}
            {hint >= 3 && hint_3}
            {hint >= 4 && hint_4}
            {hint >= 5 && hint_5}
            {playerWon ? (
                <div>
                    <h1>You Win</h1>
                    <button onClick={handlePlayAgain}>Play Another</button>
                </div>
            ) :
                (
                    <div>
            <div>you have guessed: {hint} times</div>
                    <button onClick={() => handleSubmit(inputValue)}>Submit</button>
                        {hint !== 6 && (
                            <div className="input_form">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleEnterPress}
                                />
                                <button onClick={() => handleSubmit(inputValue)}>Submit</button>
                            </div>
                        )}
                    </div>
            )
            }
            {hint === 6 && <div>Game Over</div>}
        </div>
    );
}

const player_card_style = {
    border: '1px solid #ccc', // Example border style
    padding: '10px', // Example padding
    margin: '10px', // Example margin
}

export default PlayerCard;

    // https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop
    // Joel Embiid
    // mpg = 34.6 rpg = 10.2 apg = 4.2 spg = 1	 bpg = 1.7 TPG = 3.4 fpg = 3.1 ppg = 33.1	
        // 7' 0" 280 lbs
