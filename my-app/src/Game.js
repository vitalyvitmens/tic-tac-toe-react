import { Information } from './components/Information'
import { Field } from './components/Field'
import styles from './app.module.css'
// import PropTypes from 'prop-types'
import { useState } from 'react'

const GameLayout = ({ a, setA }) => <div className={styles.game}></div>
//! Stateful-компонент
export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setfield] = useState(['', '', '', '', '', '', '', '', ''])

	const ResetButton = () => (
		<button className={styles.resetBtn} onClick={null}>
			Начать заново
		</button>
	)

	return (
		<>
			<GameLayout />
			<div className={styles.game}>
				<Information
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
					setIsDraw={setIsDraw}
					setIsGameEnded={setIsGameEnded}
					setCurrentPlayer={setCurrentPlayer}
				/>
				<Field
					field={field}
					currentPlayer={currentPlayer}
					setfield={setfield}
					setCurrentPlayer={setCurrentPlayer}
				/>
				<ResetButton />
			</div>
		</>
	)
}
