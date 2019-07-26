import React, { useState, useEffect } from 'react';
import Intro from './Intro.js'
import Game from './Game.js'
import ScoreScreen from './ScoreScreen.js'
import WordList from './WordList.js'
import './App.css';


function App() {
  const [gameStatus, setStatus] = useState('before');
  const [typedWords, setTypedWords] = useState([]);
  const [points, addPoints] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sessionKey, setSessionKey] = useState(null);


  useEffect(() => {
    async function getAPIkey() {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://random-word-api.herokuapp.com/key?`);
      const newKey = await response.text();
      setSessionKey(newKey);
    }
    getAPIkey();
  }, []);


  const startGame = () => {
    setStatus('inProgress');
    // resets score to zero and empties list of typed words
    addPoints(0);
    setWordCount(0);
    setTypedWords([]);
    setTimeout(function() {
      setStatus('end');
    }, 30000);
  }

  return (
    <div className="App">
      {gameStatus === 'before' && <Intro startGame={startGame} />}
      {gameStatus === 'inProgress' && <Game
      APIkey={sessionKey} 
      points={points}
      addPoints={addPoints}
      wordCount={wordCount}
      setWordCount={setWordCount}
      typedWords={typedWords}
      setTypedWords={setTypedWords} />}
      {gameStatus === 'end' && <ScoreScreen startGame={startGame} points={points} typedWords={typedWords} wordCount={wordCount} />}
      {wordCount > 0 ? <WordList typedWords={typedWords} wordCount={wordCount} /> : null}
    </div>
  );
}

export default App;
