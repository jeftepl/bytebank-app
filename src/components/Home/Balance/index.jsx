import React from 'react'
import styles from './Balance.module.css'
import { ReactComponent as Icon } from './eye.svg'

export default function Balance({ balance }) {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h2 className={styles.balance}>Balance</h2>
				<Icon />
			</div>
			<div className={styles.divider} />
			<p className={styles.account}>Account</p>
			<p data-testid='balance-value' className={styles.value}>{`$ ${balance}`}</p>
		</div>
	)
}
