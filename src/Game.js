import React, { useState, useEffect } from 'react';
import Timer from './Timer.js'

function Game({ APIkey, points, addPoints, typedWords, setTypedWords, wordCount, setWordCount }) {

  const [word, setWord] = useState(null);
  const [input, setInput] = useState('');

  async function fetchData() {
    const response = await fetch(`https://random-word-api.herokuapp.com/word?key=${APIkey}&number=1`);
    const word = await response.json();
    setWord(word[0]);
  }

  const submitInput = e => {
    e.preventDefault();
    if (input === word) {
      setInput('');
      fetchData();
      addPoints(points + word.length);
      setWordCount(wordCount + 1);
      const newList = [...typedWords, input];
      setTypedWords(newList);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <div className='card'>
      <Timer />
      <form onSubmit={submitInput} >
        <h1>{word ? word : 'Loading...' }</h1>
        <input
        value={input}
        autoFocus={true}
        style={{ color: input === word ? 'green' : 'black' }}
        onChange={e => setInput(e.target.value)} ></input>
      </form>
      <h3>Score: {points}</h3>
    </div>
  )
}

export default Game;