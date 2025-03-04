import React from 'react'
import styles from './Menu.module.css'

const menuItems = ['Home', 'Transfers', 'Investments', 'Other services']

export default function Menu() {
	return (
		<nav className={styles.menu}>
			{menuItems.map((item, index) => {
				return (
					<div key={item} className={styles.item}>
						<a href='/' className={styles.link}>
							{item}
						</a>
						{index !== menuItems.length - 1 && <div className={styles.divider} />}
					</div>
				)
			})}
		</nav>
	)
}
