import styles from './Field.module.css'

const FieldLayout = ({ field, currentPlayer, setfield, setCurrentPlayer }) => (
	<div>
		<div>
			{field.slice(0, 3).map((el, idx) => (
				<button key={idx} className={styles.x}>
					{el}
				</button>
			))}
		</div>
		<div>
			{field.slice(3, 6).map((el, idx) => (
				<button key={idx} className={styles.o}>
					{el}
				</button>
			))}
		</div>
		<div>
			{field.slice(6, 9).map((el, idx) => (
				<button key={idx} className={styles.x}>
					{el}
				</button>
			))}
		</div>
	</div>
)

export const Field = ({ field, currentPlayer, setfield, setCurrentPlayer }) => {
	return (
		<>
			<div className={styles.box}>
				<FieldLayout
					field={field}
					setfield={setfield}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
				/>
			</div>
		</>
	)
}
