import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
  name: "person",
  initialState: {
    data: {},
    is_loading: false,
    error_msg: "",
  },
  reducers: {
    fetch_person_start: state => {state.is_loading = true},
    fetch_person_success: (state, action) => {
      state.data = action.payload;
      state.is_loading = false;
      state.error_msg = "";
    },
    fetch_person_fail: (state, action) => {
      state.data = null;
      state.is_loading = false;
      state.error_msg = action.payload;
    },
  },
});

const { fetch_person_start, fetch_person_success, fetch_person_fail } =
  personSlice.actions;

export function fetchRandomPerson() {
  return async dispatch => {
    try {
      dispatch(fetch_person_start()); // START
      const response = await fetch(`https://randomuser.me/api/`);
      const data = await response.json();
      dispatch(fetch_person_success(data.results[0])); // SUCCESS
    } catch (error) {
      dispatch(fetch_person_fail(error.message)); // FAILED
    }
  };
}

export default personSlice.reducer;
