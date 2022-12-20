import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resultType } from "../../data/MainScreenData";
import { matrixData } from "../../functions/onlineMatrixCalculation";

export interface calculationDataMatrixSovI {
  date1: string;
  date2: string;
}

export interface calculationDataMatrixI {
  name: string;
  date: string;
  personalValue: string;
  maleValue: string;
}

interface AppState {
  isLoading: boolean;
  calculationInputData: calculationDataMatrixI;
  calculationInputDataSov: calculationDataMatrixSovI;
  showResult: boolean;
  matrixData: matrixData | null
}

const initialState: AppState = {
  isLoading: false,

  calculationInputData: {
    name: "test",
    date: "2020-02-43",
    personalValue: "personal",
    maleValue: "male",
  } as calculationDataMatrixI,

  calculationInputDataSov: {
    date1: "2020-02-43",
    date2: "2020-02-43",
  } as calculationDataMatrixSovI,

  showResult: false,
  matrixData: null
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    chageCalculationData(state, action: PayloadAction<calculationDataMatrixI>) {
      state.calculationInputData = action.payload;
      state.showResult = true;
    },
    changeShowResult(state, action: PayloadAction<boolean>) {
      state.showResult = action.payload;
    },
    changeMatrixData(state, action: PayloadAction<matrixData | null>) {
      state.matrixData = action.payload;
    },
  },
});

export default appSlice.reducer;
