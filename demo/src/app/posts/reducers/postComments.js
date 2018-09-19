

export default (state = { items: [] }, action) => {
  switch (action.type) {
    case 'POSTS.COMMENTS':
      return {
        ...state,
        items: action.comments,
      };
    default: return state;
  }
};
