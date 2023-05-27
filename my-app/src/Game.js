import { Information } from './components/Information'
import { Field } from './components/Field'
import styles from './app.module.css'
// import PropTypes from 'prop-types'
import { useState } from 'react'

const GameLayout = () => <div className={styles.game}></div>
//! Stateful-компонент
export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
		{ value: '' },
	])

	const handlechange = (index) => {
		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
		const newField = [...field]
		newField[index].value = currentPlayer
		setField(newField)
	}

	const playAgainFn = () => {
		setField([
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
			{ value: '' },
		])
		setIsGameEnded(false)
		setIsDraw(false)
		setCurrentPlayer('X' ? 'O' : 'X')
	}

	const ResetButton = () => (
		<button className={styles.resetBtn} onClick={playAgainFn}>
			Начать заново
		</button>
	)

	return (
		<>
			<GameLayout />
			<div className={styles.game}>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
					setIsDraw={setIsDraw}
					setIsGameEnded={setIsGameEnded}
					setCurrentPlayer={setCurrentPlayer}
				/>
				<Field
					field={field}
					currentPlayer={currentPlayer}
					setField={setField}
					setCurrentPlayer={setCurrentPlayer}
					handlechange={handlechange}
				/>
				<ResetButton />
			</div>
		</>
	)
}
