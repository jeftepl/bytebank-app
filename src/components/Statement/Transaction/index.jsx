import React from 'react'

export default function Transaction({ transaction, styles }) {
	return (
		<li>
			<p className={styles.month}>{transaction.month}</p>
			<div className={styles.transaction}>
				<p data-testid='transactionType'>{transaction.type}</p>
				<span>{transaction.date}</span>
			</div>
			{transaction.type === 'Transaction' ? (
				<h3
					data-testid='transactionValue'
					className={styles.value}
				>{`- $ ${transaction.value}`}</h3>
			) : (
				<h3 data-testid='transactionValue' className={styles.value}>{` $ ${transaction.value}`}</h3>
			)}
			<div className={styles.divider} />
		</li>
	)
}
