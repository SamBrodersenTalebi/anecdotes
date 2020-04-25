import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      const anecdoteUpdated = action.data;
      const changedAnecdote = {
        ...anecdoteUpdated,
        votes: ++anecdoteUpdated.votes,
      };
      return state.map((anecdote) =>
        anecdote.id !== anecdoteUpdated.id ? anecdote : changedAnecdote
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
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch({
      type: 'CREATE',
      data: newAnecdote,
    });
  };
};

export const Voteincrement = (id, anecdoteToChange) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.updateAnecdote(
      id,
      anecdoteToChange
    );
    dispatch({
      type: 'INCREMENT',
      data: updatedAnecdote,
    });
  };
};

export const initialAnecdotes = (anecdotes) => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: 'INIT',
      data: anecdotes,
    });
  };
};

export default reducer;
