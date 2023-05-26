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
	const [field, setfield] = useState([
		{ id: '0', value: '0' },
		{ id: '1', value: '1' },
		{ id: '2', value: '2' },
		{ id: '3', value: '3' },
		{ id: '4', value: '4' },
		{ id: '5', value: '5' },
		{ id: '6', value: '6' },
		{ id: '7', value: '7' },
		{ id: '8', value: '8' },
	])

	const playAgainFn = () => {
		setfield([
			{ id: '0', value: '' },
			{ id: '1', value: '' },
			{ id: '2', value: '' },
			{ id: '3', value: '' },
			{ id: '4', value: '' },
			{ id: '5', value: '' },
			{ id: '6', value: '' },
			{ id: '7', value: '' },
			{ id: '8', value: '' },
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

	const onClick = (e) => {
		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
		// console.log(field.value = e)
		field.value = currentPlayer
		// console.log(e)
		console.log((field.value = currentPlayer))
		// field.value = e
		// console.log(field.value = e)
		// return e
	}

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
					setfield={setfield}
					setCurrentPlayer={setCurrentPlayer}
					onClick={onClick}
				/>
				<ResetButton />
			</div>
		</>
	)
}
