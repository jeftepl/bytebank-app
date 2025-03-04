import React, { useState } from 'react'
import styles from './App.module.css'
import { calculateNewBalance } from './utils'

import Header from './components/Header'
import Statement from './components/Statement'
import Menu from './components/Menu'
import Home from './components/Home'
import Transaction from './components/Transaction'

export default function App() {
	const [balance, setBalance] = useState(1000)
	const [transactions, setTransactions] = useState([])

	function performTransaction(values) {
		const newBalance = calculateNewBalance(values, balance)
		setBalance(newBalance)
		setTransactions([...transactions, values])
	}

	return (
		<>
			<Header userName='John Doe' />
			<main className={styles.container}>
				<Menu />
				<div className={styles.wrapper}>
					<Home balance={balance} />
					<Transaction performTransaction={performTransaction} />
				</div>
				<Statement transactions={transactions} />
			</main>
		</>
	)
}
