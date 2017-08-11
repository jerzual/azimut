export default function cityReducer(state = {}, action){
  switch (action.type) {
    case 'GENERATE_CITY':
      return Object.assign({}, { message: action.data });
    case 'GENERATE_CITY_BIOME':
      return Object.assign({}, { message: action.data });
    case 'MOVE_DOWN':
      return Object.assign({}, { message: action.data });
    case 'MOVE_UP':
      return Object.assign({}, { message: action.data });
    default:
      return state;
  }
}