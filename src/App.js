import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Voteincrement } from './reducers/anecdoteReducer';
import { createAnecdote } from './reducers/anecdoteReducer';

const App = () => {
  //Sort by higest number of votes
  const anecdotes = useSelector((state) => state).sort((a, b) =>
    a.votes > b.votes ? -1 : 1
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    console.log('vote', id);
    dispatch(Voteincrement(id));
  };

  const create = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    dispatch(createAnecdote(content));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={create}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default App;
