import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(        
  <div>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()  
  const anecdotes = useSelector(state => state.anecdotes)
  return(
    <ul>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
         key={anecdote.id}
         anecdote={anecdote}
          handleClick={() => 
            dispatch(voteTo(anecdote.id))
          }
        />
      )}
    </ul>
  )
}

export default AnecdoteList