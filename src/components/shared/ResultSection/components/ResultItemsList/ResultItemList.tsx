import React from 'react'
import decryptFinance from '../../../../../data/decryptFinance'
import ResultItem from './ResultItem'

export type numbType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22

interface ResultItemListI {
	isFinance?: boolean
	titleText?: string
	texts: string[]
	number?: number
}

const ResultItemList = ({ texts = [], isFinance = false, titleText = '', number }: ResultItemListI) => {
	return (
		<div className={'ResultItemsList'}>
			<ResultItem number={number} titleText={titleText} item={texts} />
		</div>
	)
}

export default ResultItemList
