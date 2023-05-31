import styles from './reset-button.module.css'
import PropTypes from 'prop-types'

export const ResetButtonLayout = ({ ResetButtonFn }) => (
	<button className={styles.resetBtn} onClick={() => ResetButtonFn()}>
		Начать заново
	</button>
)

ResetButtonLayout.propTypes = {
	ResetButtonFn: PropTypes.func,
}
