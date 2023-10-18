import { useState } from "react";
import Champion from './Champion';

import {allChampions } from "./champions.js";
const answer = allChampions[Math.floor(Math.random() * allChampions.length)];

function Play() {
  const [input, setInput] = useState('');
  const [matchedChampions, setMatchedChampion] = useState([]);

  const writeChampion = (e) => {
    setInput(e.target.value);
  };

  const searchChampion = () => {
    const foundChampion = allChampions.find(champion => champion.name.toLowerCase() === input.toLowerCase());
    setMatchedChampion([foundChampion, ...matchedChampions]);
    setInput('');
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      searchChampion();
    }
  }

  const renderChampions = () => {
    if (!matchedChampions) return null;
    return matchedChampions.map((champion, index) => <Champion key={index} champion={champion} answer={answer} />);
  };

  return(
    <>
      <section className="form">
        <div className="play">
          <input type="text" value={input} onChange={writeChampion} onKeyUp={pressEnter}/>
          <button onClick={searchChampion}>Tentez ma chance !</button>
        </div>
      </section>
      <h2>{answer.name}</h2>
      {renderChampions()}
    </>

  )
}

export default Play;
