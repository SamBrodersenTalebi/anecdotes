const reducer = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      const id = action.data.id;
      const anecdoteToChange = state.find((a) => a.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: ++anecdoteToChange.votes,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    case 'CREATE':
      const newAnecdote = action.data;
      return state.concat(newAnecdote);
    case 'INIT':
      return action.data;
    default:
      return state;
  }
};

export const createAnecdote = (anecdote) => {
  return {
    type: 'CREATE',
    data: anecdote,
  };
};
export const Voteincrement = (id) => {
  console.log(id);
  return {
    type: 'INCREMENT',
    data: { id },
  };
};

export const initialAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes,
  };
};

export default reducer;
