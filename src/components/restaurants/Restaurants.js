import React, { Component } from 'react';
import Restaurant from './Restaurant';
class Restaurants extends Component {
  render() {
    const { restaurants, deleteRestaurant } = this.props;
    return (
      <ul>
        {restaurants.map((res) => (
          <Restaurant
            key={res.id}
            restaurant={res}
            deleteRestaurant={deleteRestaurant}
          />
        ))}
      </ul>
    );
  }
}

export default Restaurants;
