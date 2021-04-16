import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId,
    };
    this.props.addReview(review);
    this.setState({ text: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={({ target }) => this.setState({ text: target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ReviewInput;
