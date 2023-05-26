import styles from './Information.module.css'

const InformationLayout = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	setIsDraw,
	setIsGameEnded,
	setCurrentPlayer,
}) => (
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

export const Information = ({
	isDraw,
	isGameEnded,
	currentPlayer,
	setIsDraw,
	setIsGameEnded,
	setCurrentPlayer,
}) => {
	return (
		<>
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setIsDraw={setIsDraw}
				setIsGameEnded={setIsGameEnded}
				setCurrentPlayer={setCurrentPlayer}
			/>
		</>
	)
}
