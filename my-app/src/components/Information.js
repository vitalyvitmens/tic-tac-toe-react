import styles from './Information.module.css'
import PropTypes from 'prop-types'

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer, win }) => (
	<div className={styles.field}>
		<div>{isDraw ? 'Ничья' : null}</div>
		<div>{!isDraw && isGameEnded ? `Победа: ${win}` : null}</div>{' '}
		<div>{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}</div>
		<div>{isGameEnded ? 'Конец игры!' : null}</div>
	</div>
)

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	win: PropTypes.string,
}

export const Information = ({ isDraw, isGameEnded, currentPlayer, field }) => {
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

	const winner = (arr1, arr2, arr3) => {
		if (
			String(arr1.slice(0, 3).map((el) => el.value)) ===
			String(arr2.slice(0, 3).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1.slice(0, 3).map((el) => el.value)) ===
			String(arr3.slice(0, 3).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1.slice(3, 6).map((el) => el.value)) ===
			String(arr2.slice(3, 6).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1.slice(3, 6).map((el) => el.value)) ===
			String(arr3.slice(3, 6).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1.slice(6, 9).map((el) => el.value)) ===
			String(arr2.slice(6, 9).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1.slice(6, 9).map((el) => el.value)) ===
			String(arr3.slice(6, 9).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1.slice(2, 3).map((el) => el.value)) &&
			String(arr1.slice(4, 5).map((el) => el.value)) &&
			String(arr1.slice(6, 7).map((el) => el.value)) ===
				String(arr2.slice(2, 3).map((el) => el.value)) &&
			String(arr2.slice(4, 5).map((el) => el.value)) &&
			String(arr2.slice(6, 7).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1.slice(2, 3).map((el) => el.value)) &&
			String(arr1.slice(4, 5).map((el) => el.value)) &&
			String(arr1.slice(6, 7).map((el) => el.value)) ===
				String(arr3.slice(2, 3).map((el) => el.value)) &&
			String(arr3.slice(4, 5).map((el) => el.value)) &&
			String(arr3.slice(6, 7).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1.slice(0, 1).map((el) => el.value)) &&
			String(arr1.slice(4, 5).map((el) => el.value)) &&
			String(arr1.slice(8, 9).map((el) => el.value)) ===
				String(arr2.slice(0, 1).map((el) => el.value)) &&
			String(arr2.slice(4, 5).map((el) => el.value)) &&
			String(arr2.slice(8, 9).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1.slice(0, 1).map((el) => el.value)) &&
			String(arr1.slice(4, 5).map((el) => el.value)) &&
			String(arr1.slice(8, 9).map((el) => el.value)) ===
				String(arr3.slice(0, 1).map((el) => el.value)) &&
			String(arr3.slice(4, 5).map((el) => el.value)) &&
			String(arr3.slice(8, 9).map((el) => el.value))
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		}
	}

	let win = winner(field, winX, winO)

	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			field={field}
			win={win}
		/>
	)
}
