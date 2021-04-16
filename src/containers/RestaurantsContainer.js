import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {
  render() {
    const { addRestaurant, deleteRestaurant, restaurants } = this.props;
    console.log(restaurants);
    return (
      <div>
        <RestaurantInput addRestaurant={addRestaurant} />
        <Restaurants
          restaurants={restaurants}
          deleteRestaurant={deleteRestaurant}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (text) => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: (id) => dispatch({ type: 'DELETE_RESTAURANT', id }),
  };
};
const mapStateToProps = (state) => {
  return { restaurants: state.restaurants };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
