import { Information } from './components/Information'
import { Field } from './components/Field'
import styles from './app.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

const GameLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	field,
	handlechange,
	ResetButton,
	setIsDraw,
	setIsGameEnded,
	winner,
}) => (
	<div className={styles.game}>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
			winner={winner}
		/>
		<Field
			field={field}
			currentPlayer={currentPlayer}
			handlechange={handlechange}
		/>
		<ResetButton ResetButton={ResetButton} />
	</div>
)

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	handlechange: PropTypes.func,
	ResetButton: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	winner: PropTypes.func,
}

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
		if (field.filter((el) => el.value === '').length === 0) {
			setIsGameEnded(true)
			setIsDraw(true)
		} else {
		}
	}

	const ResetButton = () => (
		<button
			className={styles.resetBtn}
			onClick={() => {
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
			}}
		>
			Начать заново
		</button>
	)

	return (
		<GameLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
			handlechange={handlechange}
			ResetButton={ResetButton}
		/>
	)
}
