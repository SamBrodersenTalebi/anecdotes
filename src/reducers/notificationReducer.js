const initialNotication = '';

const notificationReducer = (state = initialNotication, action) => {
  switch (action.type) {
    case 'ADD':
      return action.data;
    case 'REMOVE':
      return '';
    default:
      return state;
  }
};

export const removeNotification = () => {
  return {
    type: 'REMOVE',
  };
};

export const addNotification = (content) => {
  return {
    type: 'ADD',
    data: content,
  };
};

export default notificationReducer;
