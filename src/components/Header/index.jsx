import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "./logo.svg";
import avatar from "./avatar.svg";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Logo />
				<div className={styles.user}>
					<p className={styles.name}>John Doe</p>
					<img src={avatar} alt="User avatar icon" className={styles.avatar} />
				</div>
			</div>
		</header>
	);
}
