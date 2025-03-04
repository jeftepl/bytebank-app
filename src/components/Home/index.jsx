import React from 'react'
import styles from './Home.module.css'
import { ReactComponent as Ilustration } from './illustration.svg'
import Saldo from './Saldo'

const data = Date.now()
const today = new Date(data)
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Home({ saldo }) {
	return (
		<section className={styles.container}>
			<div className={styles.upperDetail} />
			<h1 className={styles.title}>Hello, John :)!</h1>
			<p className={styles.date}>{`${daysOfWeek[today.getDay()]}, ${today.toLocaleDateString(
				'en-US',
			)}`}</p>
			<div className={styles.wrapper}>
				<Ilustration className={styles.illustration} width="230" height="185" />
				<Saldo saldo={saldo} />
			</div>
			<div className={styles.lowerDetail} />
		</section>
	)
}
