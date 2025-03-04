import React from 'react'
import styles from './Transaction.module.css'
import { ReactComponent as Ilustration } from './illustration.svg'
import Form from './Form'

export default function Transaction({ performTransaction }) {
	return (
		<section className={styles.container}>
			<div className={styles.upperDetail} />
			<div className={styles.wrapper}>
				<Form performTransaction={performTransaction} />
			</div>
			<Ilustration height='229' width='359' />
			<div className={styles.lowerDetail} />
		</section>
	)
}
