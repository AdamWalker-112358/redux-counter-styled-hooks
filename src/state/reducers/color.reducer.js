import { COLOR_CHANGED } from "../actions/color.actions";

const reducer = (state = 'white', action) => {
  switch (action.type) {
    case COLOR_CHANGED:
      return action.color;
    default:
      return state;
  }
};

export default reducer;
