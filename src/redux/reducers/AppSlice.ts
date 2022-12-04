import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface calculationDataMatrixI {
  name: string;
  date: string;
  personalValue: string;
  maleValue: string;
}

export type calculationDataI = calculationDataMatrixI;

interface AppState {
  isLoading: boolean;
  calculationInputData: calculationDataI;
  showResult: boolean;
}

const initialState: AppState = {
  isLoading: false,
  calculationInputData: {
    name: "test",
    date: "2020-02-43",
    personalValue: "personal",
    maleValue: "male",
  } as calculationDataI,
  showResult: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    chageCalculationData(state, action: PayloadAction<calculationDataI>) {
      state.calculationInputData = action.payload;
      state.showResult = true;
    },
    changeShowResult(state, action: PayloadAction<boolean>) {
      state.showResult = action.payload;
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
