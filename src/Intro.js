import React from 'react';

function Intro({ startGame }) {

  return(
    <div className='card'>
      <h1>Tip Tap Time</h1>
      <h5>How fast can YOU type? See how many words you can type correctly before the timer runs out!</h5>
      <button onClick={startGame} >START GAME</button>
    </div>
  )
}

export default Intro;