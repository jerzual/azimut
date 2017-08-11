export default function messageReducer(state = {}, action){
  switch (action.type) {
    case 'MESSAGE/CREATE':
      return Object.assign({}, { message: action.data });
    case 'MESSAGE/MARK_AS_READ':
    default:
      return state;
  }
}