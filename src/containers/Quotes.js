import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote, downvoteQuote, removeQuote} from '../actions/quotes'

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map( (quote, idx) => 
                <QuoteCard
                  key={idx} 
                  quote={quote}
                  upvote={this.props.upvoteQuote}
                  downvote={this.props.downvoteQuote}
                  remove={this.props.removeQuote}
              />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({quotes: state.quotes}), {upvoteQuote, downvoteQuote, removeQuote})(Quotes);
