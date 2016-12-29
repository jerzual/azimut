// todo should be used to set path finding display and calculation on
export default function navigationReducer(state = {
  transitioning: false,
  location: null,
}, action) {
  switch (action.type) {
    case 'NAVIGATION/COMPLETE':
      return {
        transitioning: false,
        location: action.location,
      }

    case 'NAVIGATION/START':
      return {
        transitioning: true,
      }

    default:
      return state
  }
}
