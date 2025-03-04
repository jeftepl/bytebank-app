import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Logo } from './logo.svg'
import avatar from './avatar.svg'

export default function Header({ userName }) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<div className={styles.user}>
					<p className={styles.name}>{userName}</p>
					<img src={avatar} alt='User avatar icon' className={styles.avatar} />
				</div>
			</div>
		</header>
	)
}
