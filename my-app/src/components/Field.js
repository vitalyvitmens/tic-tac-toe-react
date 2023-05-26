import styles from './Field.module.css'

const FieldLayout = ({
	field,
	currentPlayer,
	setfield,
	setCurrentPlayer,
	onClick,
}) => (
	<div className={styles.box}>
		{field.map(({ id, value }) => (
			<button
				key={id}
				className={currentPlayer === 'X' ? styles.x : styles.o}
				onClick={onClick}
			>
				{value}
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
