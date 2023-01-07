import { INCREMENT, DECREMENT } from "../actions/count.actions";

const reducer = (state = 33, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.size;
    case DECREMENT:
      return state - action.size;
    default:
      return state;
  }
};
export default reducer;
