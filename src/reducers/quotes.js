export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return(state.concat(action.quote))

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      return state

    case 'DOWNVOTE_QUOTE':
      return state
    default :
      return state
  }
  
}
