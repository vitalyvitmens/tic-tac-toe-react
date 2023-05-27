import styles from './Field.module.css'

const FieldLayout = ({ field, currentPlayer, handlechange }) => (
	<div className={styles.box}>
		{field.map((cell, index) => {
			return (
				<button
					className={currentPlayer === 'X' ? styles.x : styles.o}
					onClick={() => {
						handlechange(index)
					}}
					key={index}
				>
					{cell.value}
				</button>
			)
		})}
	</div>
)

export const Field = ({
	field,
	currentPlayer,
	setField,
	setCurrentPlayer,
	handlechange,
}) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			handlechange={handlechange}
		/>
	)
}
