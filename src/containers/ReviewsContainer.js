import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  state = {
    reviews: [],
  };
  getReviews = () => {
    const reviews = this.props.reviews.filter(
      (review) => review.restaurantId === this.props.restaurant.id
    );
    return <Reviews reviews={reviews} deleteReview={this.props.deleteReview} />;
  };

  render() {
    const { restaurant, addReview, reviews } = this.props;
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={addReview} />
        <Reviews
          reviews={reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
        />
        {/* {this.getReviews()} */}
        {/* <Reviews restaurant={restaurant} /> */}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', payload: review }),
    deleteReview: (reviewId) =>
      dispatch({ type: 'DELETE_REVIEW', payload: reviewId }),
  };
};

export default connect((state) => state, mapDispatchToProps)(ReviewsContainer);
