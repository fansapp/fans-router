export default (state = { items: [] }, action) => {
  switch (action.type) {
    case 'POSTS.UPDATE':
      return {
        ...state,
        items: action.posts,
      };
    default: return state;
  }
};
