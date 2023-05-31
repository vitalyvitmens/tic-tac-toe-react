import { Information, Field, ResetButton } from './components'
import styles from './app.module.css'
import PropTypes from 'prop-types'

export const GameLayout = ({
	status,
	currentPlayer,
	isDraw,
	isGameEnded,
	field,
	handleChange,
	setField,
	setIsDraw,
	setIsGameEnded,
}) => (
	<div className={styles.game}>
		<Information
			status={status}
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
		/>
		<Field
			field={field}
			handleChange={handleChange}
			isGameEnded={isGameEnded}
		/>
		<ResetButton
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	</div>
)

GameLayout.propTypes = {
	// currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	handleChange: PropTypes.func,
	setField: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
}
