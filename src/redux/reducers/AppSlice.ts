import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export type activeTabType = 1 | 2 | 3 | null

interface AppState {
  isLoading: boolean;
  calculationInputData: calculationDataMatrixI;
  calculationInputDataSov: calculationDataMatrixSovI;
  showResult: boolean;
  matrixData: matrixData | null
  activeTab: activeTabType
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
  matrixData: null,

  activeTab: null
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
    changeActiveTab(state, action: PayloadAction<activeTabType>) {
      state.activeTab = action.payload;
    },
  },
});

export default appSlice.reducer;
