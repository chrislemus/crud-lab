import cuid from 'cuid';

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurants = [
        ...state.restaurants,
        { text: action.text, id: cuid() },
      ];
      return { ...state, restaurants };
    case 'DELETE_RESTAURANT':
      const filteredRestaurants = state.restaurants.filter(
        (res) => res.id !== action.id
      );
      return { ...state, restaurants: filteredRestaurants };
    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, { ...action.payload, id: cuid() }],
      };
    case 'DELETE_REVIEW':
      const filteredReviews = state.reviews.filter(
        (review) => review.id !== action.payload
      );
      return { ...state, reviews: filteredReviews };

    default:
      return state;
  }
}
