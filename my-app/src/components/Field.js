import styles from './Field.module.css'

const FieldLayout = ({
	field,
	currentPlayer,
	setfield,
	setCurrentPlayer,
	onClick,
}) => (
	<div>
		<div>
			{field.slice(0, 3).map((el, idx) => (
				<button key={idx} className={styles.x} onClick={onClick}>
					{el}
				</button>
			))}
		</div>
		<div>
			{field.slice(3, 6).map((el, idx) => (
				<button key={idx} className={styles.o} onClick={onClick}>
					{el}
				</button>
			))}
		</div>
		<div>
			{field.slice(6, 9).map((el, idx) => (
				<button key={idx} className={styles.x} onClick={onClick}>
					{el}
				</button>
			))}
		</div>
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
