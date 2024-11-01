import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "searchfilters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});
export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.searchfilters.filters;
