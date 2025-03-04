import React from 'react'
import Balance from './Balance'
import styles from './Home.module.css'
import { ReactComponent as Ilustration } from './illustration.svg'

const data = Date.now()
const today = new Date(data)
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Home({ balance, userName }) {
	return (
		<section className={styles.container}>
			<div className={styles.upperDetail} />
			<h1 className={styles.title}>Hello, {userName}!</h1>
			<p className={styles.date}>{`${daysOfWeek[today.getDay()]}, ${today.toLocaleDateString(
				'en-US'
			)}`}</p>
			<div className={styles.wrapper}>
				<Ilustration className={styles.illustration} width='230' height='185' />
				<Balance balance={balance} />
			</div>
			<div className={styles.lowerDetail} />
		</section>
	)
}
