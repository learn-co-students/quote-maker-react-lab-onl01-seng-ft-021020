export default (state = [], action) => {

  switch(action.type){
    
    case 'ADD_QUOTE':
      // debugger
      return [...state, action.quote]
      
    case 'REMOVE_QUOTE':
      // debugger
      const quote = state.find(quote => quote.id === action.quoteId)
      const idx = state.indexOf(quote);
      return [...state.slice(0, idx), ...state.slice(idx + 1)]

    case 'UPVOTE_QUOTE':
      const upIdx = state.findIndex(q => q.id === action.quoteId)
      const quoteToUpvote = {...state[upIdx]}
      const upvotedQuote = { ...quoteToUpvote, votes: quoteToUpvote.votes + 1 }
      return [...state.slice(0,upIdx), upvotedQuote, ...state.slice(upIdx + 1)]
    
    case 'DOWNVOTE_QUOTE':
      const downIdx = state.findIndex(q => q.id === action.quoteId)
      const quoteToDownvote = {...state[downIdx]}
      const newValue = quoteToDownvote.votes > 0 ? (quoteToDownvote.votes - 1) : 0
      const downvotedQuote = { ...quoteToDownvote, votes: newValue }
      return [...state.slice(0,downIdx), downvotedQuote, ...state.slice(downIdx + 1)]

    default: 
      return state;
  }
  
}
