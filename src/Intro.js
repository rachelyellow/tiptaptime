import React from 'react';

function Intro({ startGame }) {

  return(
    <div className='card'>
      <h1>TipTapTime</h1>
      <p>How fast can YOU type? See how many words you can type correctly before the timer runs out!</p>
      <button onClick={startGame} >START GAME</button>
    </div>
  )
}

export default Intro;