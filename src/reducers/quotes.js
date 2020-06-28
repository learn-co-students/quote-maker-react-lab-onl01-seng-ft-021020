export default (state = [], action) => {
  let idx
  let newState
  console.log(state)
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote) 
    case 'REMOVE_QUOTE':
      return state.filter(q => q.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId)
      newState = [...state]
      newState[idx].votes += 1
      return newState
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(q => q.id === action.quoteId)
      console.log(idx)
      console.log(state)
      if (state[idx].votes >0) {
        newState = [...state]
        newState[idx].votes -= 1
        return newState
      } else {
        return state
      }
    default: 
      return state;
  }
}