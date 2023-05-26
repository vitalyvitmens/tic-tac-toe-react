import styles from './Field.module.css'

const FieldLayout = ({
	field,
	currentPlayer,
	setfield,
	setCurrentPlayer,
	onClick,
}) => (
	<div className={styles.box}>
		{field.map((el, idx) => (
			<button
				key={idx}
				className={currentPlayer === 'X' ? styles.x : styles.o}
				onClick={onClick}
			>
				{field[el]}
				{idx}
				{console.log('idx:', idx)}
				{console.log('el:', el)}
			</button>
		))}
	</div>
)

export const Field = ({
	field,
	currentPlayer,
	setfield,
	setCurrentPlayer,
	onClick,
}) => {
	return (
		<FieldLayout
			field={field}
			setfield={setfield}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			onClick={onClick}
		/>
	)
}
