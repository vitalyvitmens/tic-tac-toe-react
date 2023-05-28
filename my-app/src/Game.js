import { Information } from './components/information/information'
import { Field } from './components/field/field'
import styles from './app.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

const GameLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	field,
	handleChange,
	ResetButton,
}) => (
	<div className={styles.game}>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
		/>
		<Field field={field} handleChange={handleChange} />
		<ResetButton ResetButton={ResetButton} />
	</div>
)

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	handleChange: PropTypes.func,
	ResetButton: PropTypes.func,
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

	const handleChange = (index) => {
		currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
		const newField = [...field]
		newField[index].value = currentPlayer
		setField(newField)
		if (field.filter((el) => el.value === '').length === 0) {
			setIsGameEnded(true)
			setIsDraw(true)
		} else {
			return
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
			handleChange={handleChange}
			ResetButton={ResetButton}
		/>
	)
}
