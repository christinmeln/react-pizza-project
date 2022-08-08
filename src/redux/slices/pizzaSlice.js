import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = pizzaSlice.actions;
// actions = reducers

export default pizzaSlice.reducer;
// экспорт reducer-а по умолчанию
