import styles from './field.module.css'
import PropTypes from 'prop-types'

export const FieldLayout = ({ field, handleChange, isGameEnded }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button
				className={cellPlayer.value === 'X' ? styles.x : styles.o}
				key={index}
				onClick={() => (!cellPlayer.value ? handleChange(index) : null)}
				disabled={isGameEnded}
			>
				{cellPlayer.value}
			</button>
		))}
	</div>
)

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
	isGameEnded: PropTypes.bool,
}
