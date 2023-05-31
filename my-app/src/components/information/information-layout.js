import styles from './information.module.css'
import PropTypes from 'prop-types'

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded, winner }) => (
	<div className={styles.field}>
		<div>{isDraw ? 'Ничья' : null}</div>
		<div>{!isDraw && isGameEnded ? `Победа: ${winner}` : null}</div>
		<div>{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}</div>
		<div>{isGameEnded ? 'Конец игры!' : null}</div>
	</div>
)

InformationLayout.propTypes = {
	// currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	winner: PropTypes.string,
}
