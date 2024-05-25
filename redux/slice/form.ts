import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IformState {
  name: string,
  amount: string
};

const initialState: IformState = {
  name: '',
  amount: ''
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    resetFormState() {
      return initialState;
    },
    setName(state: any, action: any){
      state.name = action.payload.name;
    },
    setAmount(state: any, action: any){
      state.amount = action.payload.amount;
    }
  }
})

export const name = (state: RootState) => state.form.name;
export const {
  setName,
  setAmount
} = formSlice.actions;

export default formSlice.reducer;