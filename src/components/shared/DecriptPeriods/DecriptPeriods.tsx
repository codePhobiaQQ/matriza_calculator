import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import ResultItemList, { numbType } from '../ResultSection/components/ResultItemsList/ResultItemList'
import decryptPeriods from '../../../data/decryptPeriods'
import decryptFinance from '../../../data/decryptFinance'
import decryptComphort from '../../../data/decriptComphort'

interface DecriptPeriodsI {
	classing?: string
	periods?: number[]
}

const DecriptPeriods = ({ classing = '', periods }: DecriptPeriodsI) => {
	const matrixData = useAppSelector(state => state.app.matrixData)
	const activeTab = useAppSelector(state => state.app.activeTab)

	const [periodsResult, setPeriodsResult] = useState<numbType>()
	const [financeResult, setFinanceResult] = useState<numbType>()
	const [comfortResult, setComfortResult] = useState<numbType>()

	useEffect(() => {
		// @ts-ignore
		setPeriodsResult([matrixData?.years])
		console.log('period dot', matrixData?.years)
		// @ts-ignore
		setFinanceResult([matrixData.c2])
		// @ts-ignore
		setComfortResult([matrixData.e])
	}, [matrixData, activeTab])

	console.log('matrixData', matrixData)

	return (
		<div className={`${classing} DecryptPeriods`}>
			{/* <p>{periodsResult}</p>

			{matrixData?.years}

			{JSON.stringify(matrixData)
				.split(',')
				.map(el => (
					<p>{el}</p>
				))} */}

			{activeTab == 1 && (
				<ResultItemList number={periodsResult} titleText={`Рекомендации на ближайший период жизни`} texts={decryptPeriods[periodsResult || '1']} />
			)}
			{activeTab == 1 && <ResultItemList titleText={'Финансовая карма'} texts={decryptFinance[financeResult || '1']} />}
			{activeTab == 2 && <ResultItemList titleText={'Зона комфорта пары'} texts={decryptComphort[comfortResult || '1']} />}
		</div>
	)
}

export default DecriptPeriods
