import React from 'react';


function ScoreScreen({ startGame, points }) {
  return(
    <div className='card'>
      <h3>Score:{points}</h3>
      <h1>PLAY AGAIN?</h1>
      <button onClick={startGame} >Let's go!</button>
    </div>
  )
}

export default ScoreScreen;