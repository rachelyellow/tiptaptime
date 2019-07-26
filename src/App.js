import React, { useState } from 'react';
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

  const APIkey = 'LHRWKSPG';

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
      APIkey={APIkey} 
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
