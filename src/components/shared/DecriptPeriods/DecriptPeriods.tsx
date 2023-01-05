import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks/redux";
import ResultItemList, {numbType} from "../ResultSection/components/ResultItemsList/ResultItemList";

interface DecriptPeriodsI {
  classing?: string;
  periods?: number[]
}

const DecriptPeriods = ({classing = "", periods = [1]}: DecriptPeriodsI) => {
  const matrixData = useAppSelector(state => state.app.matrixData)
  const activeTab = useAppSelector(state => state.app.activeTab)

  const [periodsResult, setPeriodsResult] = useState<numbType[]>();
  const [financeResult, setFinanceResult] = useState<numbType[]>();
  const [comfortResult, setComfortResult] = useState<numbType[]>();

  useEffect(() => {
    // @ts-ignore
    setPeriodsResult([matrixData.years])
    // @ts-ignore
    setFinanceResult([matrixData.c2])
    // @ts-ignore
    setComfortResult([matrixData.e])
  }, [matrixData])

  return (
    <div className={`${classing} DecryptPeriods`}>
      {activeTab == 1 && <ResultItemList titleText={"Рекомендации на ближайший период жизни"} periods={periodsResult}/>}
      {activeTab == 1 && <ResultItemList titleText={"Финансовая карма"} periods={financeResult}/>}
      {activeTab == 2 && <ResultItemList titleText={"Зона комфорта пары"} periods={comfortResult}/>}
    </div>
  );
};

export default DecriptPeriods;