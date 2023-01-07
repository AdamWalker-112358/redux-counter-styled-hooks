import {
  FETCH_PERSON_START,
  FETCH_PERSON_SUCCESS,
  FETCH_PERSON_FAIL
} from "../actions/person.actions";

export const initialState = {
  data: {},
  is_loading: false,
  error_msg: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PERSON_START:
      return {
        ...state,
        is_loading: true
      };
    case FETCH_PERSON_SUCCESS:
      return {
        ...state,
        data: action.payload,
        is_loading: false,
        error_msg: ""
      };
    case FETCH_PERSON_FAIL:
      return {
        ...state,
        error_msg: action.payload,
        is_loading: false
      };
    default:
      return state;
  }
};
export default reducer;
