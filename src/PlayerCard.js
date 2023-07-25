import React, { useState, useEffect } from 'react';


function PlayerCard(props) {

    const [inputValue, setInputValue] = useState("")
    const [blurAmount, setBlurAmmount] = useState(10)
    const [playerWon, setPlayerWon] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [hint, setHint] = useState(0)
    const player_name = 'Joel Embiid'


    const imgBlur = {
        filter: `blur(${blurAmount}px)`,
        transform: "scale(3)",
        border: '5px solid black', // Example border style
        padding: '20px', // Example padding
        margin: '100px', // Example margin
    };

    const handleSubmit = (submit) => {
        if (inputValue === player_name) {
            setIsGameOver(true)
            setPlayerWon(true)
            setHint(0)
        }
        setHint(hint => hint + 1)
        setBlurAmmount(x => x - 2)
        setInputValue("")

        if (hint >= 5) {
            setPlayerWon(false)
            setIsGameOver(true)
        }
    }
    const handleEnterPress = (e) => (e.key === 'Enter' && handleSubmit(inputValue));

    const hint_1 = <div>
        Stats
        <ul>PPG: 33.1</ul>
        <ul>RPG: 10.2</ul>
        <ul>APG: 4.2</ul>
        <ul>BPG: 1.7</ul>
        <ul>SPG: 1</ul>
        <ul>TPG: 3.4</ul>
        <ul>FPG: 3.1</ul>
        <ul>MPG: 34.6</ul>
    </div>
    const hint_2 = <div><h5>Weight: 280 LBS</h5> <h5> Height: 7' 0"</h5></div>
    const hint_3 = <div>College: Kansas</div>
    const hint_4 = <div>Position: C</div>
    const hint_5 = <div>Team: Philadelphia 76ers</div>


    return (
        <div className="player_card" style={player_card_style}>
            <div className="img_container">
                <img style={imgBlur} className="player_img" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop" alt="Player's profile img" />
            </div>
            {hint >= 1 && <div className='hint_1'>{hint_1}</div>}
            {hint >= 2 && <div className='hint_2'> {hint_2}</div>}
            {hint >= 3 && <div className='hint_3'>{hint_3}</div>}
            {hint >= 4 && <div className='hint_4'>{hint_4}</div>}
            {hint >= 5 && <div className='hint_5'>{hint_5}</div>}
            <div>you have guessed: {hint} times</div>
            <button onClick={handleSubmit}></button>
            <div className='input_form'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleEnterPress}
                />
                <button onClick={() => handleSubmit(inputValue)}>Submit</button>
            </div>
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