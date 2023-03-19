import { useState } from 'react'
import ArrowDown from '../../../../common/svg/ArrowDown'
import dataText from './data'

interface ResultItemI {
	item: string[]
	titleText?: string
	number?: number
}

const ResultItem = ({ item, titleText, number }: ResultItemI) => {
	const [isTabOpen, setIsTabOpen] = useState<boolean>(false)
	const editOpenHandler = () => {
		setIsTabOpen(prevState => !prevState)
	}

	return (
		<div onClick={editOpenHandler} className={`ResultItem ${isTabOpen ? 'active' : ''}`}>
			<div className='ResultItemHeader'>
				<span>{titleText}</span>
				<ArrowDown isActive={isTabOpen} clickHandler={editOpenHandler} />
			</div>
			<div className='ResultItemContent'>
				{number ? <p>{number} энергия</p> : null}
				{item.map((text, index) => (
					<p key={'text' + index}>{text}</p>
				))}
			</div>
		</div>
	)
}

export default ResultItem
