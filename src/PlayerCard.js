import React, { useState } from 'react';


function PlayerCard(props) {

    const [inputValue, setInputValue] = useState("")
    const [playerWon, setPlayerWon] = useState(false)
    const [isGameOver, setIsGameOver] = useState(false)
    const [hint, setHint] = useState(0)

    // https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop
    // Joel Embiid

    const blurAmount = 10;

    const imgBlur = {
        filter: `blur(${blurAmount}px)`,
        transform: "scale(3)",
        border: '5px solid black', // Example border style
        padding: '20px', // Example padding
        margin: '100px', // Example margin
    };

    // mpg = 34.6 rpg = 10.2 apg = 4.2 spg = 1	 bpg = 1.7 TPG = 3.4 fpg = 3.1 ppg = 33.1			
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

    // 7' 0" 280 lbs
    const hint_2 = <div>
        Weight: 280 lbs
        Height: 7' 0"
    </div>

    const hint_3 = <div>
        College: Kansas

    </div>
    // Kansas     Philadelphia 76ers C
    const hint_4 = <div>
        Position: C
    </div>
    const hint_5 = <div>
        Team: Philadelphia 76ers
    </div>
    const player_name = 'Joel Embiid'

    const handleSubmit = (submit) => {
        if (inputValue === player_name) {
            setIsGameOver(true)
            setPlayerWon(true)
        }
        setHint(hint => hint + 1)
        setInputValue("")
    }

    return (
        <div className="player_card" style={player_card_style}>
            <div className="img_container">
                <img style={imgBlur} className="player_img" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059318.png&h=80&w=110&scale=crop" alt="Player's profile img" />
            </div>
            <div className='hint_1'>
                {/* {hint_1} */}
            </div>
            <div className='hint_2'>
                {hint_2}
            </div>
            <div className='hint_3'>
                {hint_3}
            </div>
            <div className='hint_4'>
                {hint_4}
            </div>
            <div className='hint_5'>
                {hint_5}
            </div>
            {hint}
            <button onClick={handleSubmit}></button>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => handleSubmit(inputValue)}>Submit</button>
        </div>
    );
}

const player_card_style = {
    border: '1px solid #ccc', // Example border style
    padding: '10px', // Example padding
    margin: '10px', // Example margin
}

export default PlayerCard;