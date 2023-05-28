import styles from './Field.module.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, handleChange }) => (
	<div className={styles.box}>
		{field.map((cell, index) => {
			return (
				<button
					className={cell.value === 'X' ? styles.x : styles.o}
					key={index}
					onClick={() => {
						if (!cell.value) {
							handleChange(index)
						} else {
							return
						}
					}}
				>
					{cell.value}
				</button>
			)
		})}
	</div>
)

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
}

export const Field = ({ field, handleChange }) => {
	return <FieldLayout field={field} handleChange={handleChange} />
}

Field.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
}
