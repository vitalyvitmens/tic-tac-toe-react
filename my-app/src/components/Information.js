import styles from './Information.module.css'
import PropTypes from 'prop-types'

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
	<div className={styles.field}>
		<div>{isDraw ? 'Ничья' : null}</div>
		<div>{!isDraw && isGameEnded ? `Победа: ${currentPlayer}` : null}</div>
		<div>{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}</div>
		<div>{isGameEnded ? 'Конец игры!' : null}</div>
	</div>
)

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}

export const Information = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	field,
	setIsDraw,
	setIsGameEnded,
}) => {
	const winnerX = () => {
		const winX = [
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
			{ value: 'X' },
		]
		if (
			!winX
				.slice(0, 3)
				.find((item, index) => item.value !== field.slice(0, 3)[index].value)
		) {
			console.log('Победа: X')
			// setIsDraw(false)
			// setIsGameEnded(true)
		} else if (
			!winX
				.slice(3, 6)
				.find((item, index) => item.value !== field.slice(3, 6)[index].value)
		) {
			console.log('Победа: X')
			// setIsDraw(false)
			// setIsGameEnded(true)
		} else if (
			!winX
				.slice(6, 9)
				.find((item, index) => item.value !== field.slice(6, 9)[index].value)
		) {
			console.log('Победа: X')
			// setIsDraw(false)
			// setIsGameEnded(true)
		}
	}

  winnerX()

	const winnerO = () => {
		const winO = [
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
			{ value: 'O' },
		]
		if (
			!winO
				.slice(0, 3)
				.find((item, index) => item.value !== field.slice(0, 3)[index].value)
		) {
			console.log('Победа: O')
			// setIsDraw(false)
			// setIsGameEnded(true)
		} else if (
			!winO
				.slice(3, 6)
				.find((item, index) => item.value !== field.slice(3, 6)[index].value)
		) {
			console.log('Победа: O')
			// setIsDraw(false)
			// setIsGameEnded(true)
		} else if (
			!winO
				.slice(6, 9)
				.find((item, index) => item.value !== field.slice(6, 9)[index].value)
		) {
			console.log('Победа: O')
			// setIsDraw(false)
			// setIsGameEnded(true)
		}
	}

  winnerO()

	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
		/>
	)
}
