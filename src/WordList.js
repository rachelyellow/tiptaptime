import React from 'react';
import ListItem from './ListItem.js'

function WordList({ typedWords, wordCount }) {
  return(
    <div id='wordList' className='card'>
      <h2>Words Typed: {wordCount}</h2>
      {typedWords.length > 0 ? typedWords.map((correctWord, index) => {
        return(
          <ListItem key={index} word={correctWord} />)
        })
        : null }
    </div>
  )
}

export default WordList;