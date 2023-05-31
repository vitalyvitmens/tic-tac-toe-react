import { useState } from 'react'
import { GameLayout } from './game-layout'
import { STATUS, PLAYER } from './constants'

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN)
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS)
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
			setIsDraw(true)
			setIsGameEnded(true)
		} else {
			return
		}
	}

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			handleChange={handleChange}
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	)
}
