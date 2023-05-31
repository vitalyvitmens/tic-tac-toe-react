import { FieldLayout } from './field-layout'
import PropTypes from 'prop-types'

export const Field = ({ handleChange, isGameEnded }) => {
  const field = new Array(9).fill('')

	return (
		<FieldLayout
			field={field}
			handleChange={handleChange}
			isGameEnded={isGameEnded}
		/>
	)
}

Field.propTypes = {
	field: PropTypes.array,
	handleChange: PropTypes.func,
	isGameEnded: PropTypes.bool,
}
