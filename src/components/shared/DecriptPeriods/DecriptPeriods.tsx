import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

interface DecriptPeriodsI {
  classing?: string;
  periods?: number[]
}

const DecriptPeriods = ({classing = "", periods = [1, 2, 3]}: DecriptPeriodsI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)
  // console.log(Object.values(matrixData))
  // @ts-ignore
  console.log([...new Set(Object.values(matrixData))])

  return (
    <div className={`${classing} DecryptPeriods`}>

    </div>
  );
};

export default DecriptPeriods;