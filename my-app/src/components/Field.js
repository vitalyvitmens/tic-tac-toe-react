import styles from './Field.module.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, currentPlayer, handlechange }) => (
	<div className={styles.box}>
		{field.map((cell, index) => {
			return (
				<button
					className={currentPlayer === 'X' ? styles.x : styles.o}
					onClick={() => {
						handlechange(index)
					}}
					key={index}
				>
					{cell.value}
				</button>
			)
		})}
	</div>
)

FieldLayout.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	handlechange: PropTypes.func,
}

export const Field = ({ field, currentPlayer, handlechange }) => {
	return (
		<FieldLayout
			field={field}
			currentPlayer={currentPlayer}
			handlechange={handlechange}
		/>
	)
}
