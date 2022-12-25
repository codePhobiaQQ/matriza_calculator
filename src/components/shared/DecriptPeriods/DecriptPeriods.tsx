import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import ResultItemList, { numbType } from "../ResultSection/components/ResultItemsList/ResultItemList";

interface DecriptPeriodsI {
  classing?: string;
  periods?: number[]
}

const DecriptPeriods = ({classing = "", periods = [1, 2, 3]}: DecriptPeriodsI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)

  const [periodsResult, setPeriodsResult] = useState<numbType[]>();
  useEffect(() => {
    // @ts-ignore
    const result = [...new Set(Object.values(matrixData))]
    // @ts-ignore
    result.sort((a, b) => {
      if  (a < b) return -1
      else if (a > b) return 1
      else return 0
    })
    // @ts-ignore
    setPeriodsResult(result)
  }, [matrixData])

  return (
    <div className={`${classing} DecryptPeriods`}>
      <ResultItemList periods={periodsResult} />
    </div>
  );
};

export default DecriptPeriods;