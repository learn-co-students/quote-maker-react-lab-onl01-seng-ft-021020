import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  addVote = (id) => {
    this.props.upvoteQuote(id);
  };
  removeVote = (id) => {
    this.props.downvoteQuote(id);
  };
  deleteQuote = (id) => {
    this.props.removeQuote(id);
  };

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
              {this.props.quotes.map((quote) => (
                <QuoteCard
                  addVote={this.addVote}
                  removeVote={this.removeVote}
                  deleteQuote={this.deleteQuote}
                  key={quote.id}
                  quote={quote}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

const mapDispatchToProps = {
  upvoteQuote,
  downvoteQuote,
  removeQuote,
};

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
