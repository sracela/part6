import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { voteTo } from '../reducers/anecdoteReducer'
import { setNotification, deleteNotification } from '../reducers/notificationReducer'

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

// const onVote = (dispatch, anecdote) => { 

//   dispatch(voteTo(anecdote))
//   dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
//   // dispatch(setNotification(`You voted "${anecdote.content}"`))
//   // setTimeout(() => {
//   //     dispatch(deleteNotification())
//   //   }, 5000)
// }

const AnecdoteList = ( props ) => {
  const dispatch = useDispatch() 
  // const anecdotes = useSelector(({ filter, anecdotes }) => {
  //   if ( filter === '' ) {
  //     return anecdotes
  //   }
  //   return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
  // })

  const onVote = (anecdote) => { 
    props.voteTo(anecdote)
    props.setNotification(`You voted '${anecdote.content}'`, 5)
  }
  

  // const anecdotesToShow =  () => {
  //   if (props.filter === '') {
  //     return props.anecdotes
  //   }
  //   return props.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
  // }
  return(
    <ul>
      {/* {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote => */}
      {props.anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
         key={anecdote.id}
         anecdote={anecdote}
          handleClick={() => onVote(anecdote)}
        />
      )}
    </ul>
  )
}

// export default AnecdoteList


const mapStateToProps = (state) => {
  if (state.filter === "") {
    return {
      anecdotes: state.anecdotes
    }
  }
  return {anecdotes: state.anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))}
}

const mapDispatchToProps = {
  voteTo,
  setNotification
}

const ConnectedNotes = connect(mapStateToProps, 
  mapDispatchToProps)(AnecdoteList)
export default ConnectedNotes