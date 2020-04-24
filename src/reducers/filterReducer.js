const initialFilter = '';

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.data;
    default:
      return state;
  }
};

export const filter = (filterValue) => {
  return {
    type: 'FILTER',
    data: filterValue,
  };
};
export default filterReducer;
