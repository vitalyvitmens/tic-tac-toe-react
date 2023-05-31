import {ResetButtonLayout} from './reset-button-layout'
import PropTypes from 'prop-types'

export const ResetButton = ({ setField, setIsDraw, setIsGameEnded }) => {
	const ResetButtonFn = () => {
		setField([
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
		setIsGameEnded(false)
		setIsDraw(false)
	}
	return (
		<ResetButtonLayout
			ResetButtonFn={ResetButtonFn}
			setField={setField}
			setIsDraw={setIsDraw}
			setIsGameEnded={setIsGameEnded}
		/>
	)
}

ResetButton.propTypes = {
	ResetButtonFn: PropTypes.func,
	setField: PropTypes.func,
	setIsDraw: PropTypes.func,
	setIsGameEnded: PropTypes.func,
}
