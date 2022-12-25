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
    setPeriodsResult([...new Set(Object.values(matrixData))])
  }, [matrixData])

  return (
    <div className={`${classing} DecryptPeriods`}>
      <ResultItemList periods={periodsResult} />
    </div>
  );
};

export default DecriptPeriods;