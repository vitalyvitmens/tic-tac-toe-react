import styles from './information.module.css'
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
			String(arr1[2].value) + String(arr1[4].value) + String(arr1[6].value) ===
			String(arr2[2].value) + String(arr2[4].value) + String(arr2[6].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1[2].value) + String(arr1[4].value) + String(arr1[6].value) ===
			String(arr3[2].value) + String(arr3[4].value) + String(arr3[6].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1[0].value) + String(arr1[4].value) + String(arr1[8].value) ===
			String(arr2[0].value) + String(arr2[4].value) + String(arr2[8].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1[0].value) + String(arr1[4].value) + String(arr1[8].value) ===
			String(arr3[0].value) + String(arr3[4].value) + String(arr3[8].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1[0].value) + String(arr1[3].value) + String(arr1[6].value) ===
			String(arr2[0].value) + String(arr2[3].value) + String(arr2[6].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1[0].value) + String(arr1[3].value) + String(arr1[6].value) ===
			String(arr3[0].value) + String(arr3[3].value) + String(arr3[6].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1[1].value) + String(arr1[4].value) + String(arr1[7].value) ===
			String(arr2[1].value) + String(arr2[4].value) + String(arr2[7].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1[1].value) + String(arr1[4].value) + String(arr1[7].value) ===
			String(arr3[1].value) + String(arr3[4].value) + String(arr3[7].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else if (
			String(arr1[2].value) + String(arr1[5].value) + String(arr1[8].value) ===
			String(arr2[2].value) + String(arr2[5].value) + String(arr2[8].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'X'
		} else if (
			String(arr1[2].value) + String(arr1[5].value) + String(arr1[8].value) ===
			String(arr3[2].value) + String(arr3[5].value) + String(arr3[8].value)
		) {
			isDraw = false
			isGameEnded = true
			return 'O'
		} else {
			return
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

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	field: PropTypes.array,
	win: PropTypes.string,
}
