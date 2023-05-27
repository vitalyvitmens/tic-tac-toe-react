import styles from './Information.module.css'
import PropTypes from 'prop-types'

const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => (
	<div>
		<div className={styles.field}>{isDraw ? 'Ничья' : null}</div>
		<div className={styles.field}>
			{!isDraw && isGameEnded ? `Победа: ${currentPlayer}` : null}
		</div>
		<div className={styles.field}>
			{!isDraw && !isGameEnded ? `Ходит: ${currentPlayer}` : null}
		</div>
		<div className={styles.field}>{isGameEnded ? 'Конец игры!' : null}</div>
	</div>
)

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
}

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<InformationLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
	)
}
