import styles from './Field.module.css'
import PropTypes from 'prop-types'

const FieldLayout = ({ field, handlechange }) => (
	<div className={styles.box}>
		{field.map((cell, index) => {
			return (
				<button
					className={cell.value === 'X' ? styles.x : styles.o}
					onClick={() => {
						if (!cell.value) {
							handlechange(index)
						} else {
							return
						}
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
	handlechange: PropTypes.func,
}

export const Field = ({ field, handlechange }) => {
	Field.propTypes = {
		field: PropTypes.array,
		handlechange: PropTypes.func,
	}

	return <FieldLayout field={field} handlechange={handlechange} />
}
