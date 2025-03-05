import React from 'react'
import styles from './Statement.module.css'
import Transaction from './Transaction'

export default function Statement({ transactions }) {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Statement</h2>
			<ul className={styles.list}>
				{transactions.map((transaction, index) => {
					return <Transaction key={index} transaction={transaction} styles={styles} />
				})}
			</ul>
		</section>
	)
}
