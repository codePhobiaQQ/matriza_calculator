import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface calculationDataMatrixI {
  name: string;
  date: string;
  personalValue: string;
  maleValue: string;
}

type calculationDataI = calculationDataMatrixI;

interface AppState {
  isLoading: boolean;
  calculationInputData: calculationDataI;
}

const initialState: AppState = {
  isLoading: false,
  calculationInputData: {} as calculationDataI,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    chageCalculationData(state, action: PayloadAction<calculationDataI>) {
      state.calculationInputData = action.payload;
    },
    // changeLanguage(state, action: PayloadAction<ILanguage>) {
    //   state.language = action.payload;
    // },
    // changeCurrency(state, action: PayloadAction<ICurrency>) {
    //   state.currency = action.payload;
    // },
    // changeAccount(state, action: PayloadAction<string>) {
    //   state.activeAccount = action.payload;
    // },
  },
});

export default appSlice.reducer;
