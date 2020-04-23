import React from 'react';
import { Fragment } from 'react';
import { Voteincrement } from '../reducers/anecdoteReducer';
import { useSelector, useDispatch } from 'react-redux';

const AnecdoteList = () => {
  //Sort by higest number of votes
  const anecdotes = useSelector((state) => state).sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(Voteincrement(id));
  };
  return (
    <Fragment>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AnecdoteList;
