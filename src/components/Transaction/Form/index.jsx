import React, { useState } from 'react'
import styles from './Form.module.css'

export default function Form({ performTransaction }) {
	const [value, setValue] = useState({ transaction: '', value: '' })

	function handleChange(e) {
		const { name, value } = e.target
		const updatedValues = { ...value, [name]: value }
		setValue(updatedValues)
	}

	function handleSubmit(e) {
		e.preventDefault()
		const dataTransaction = new Date().toLocaleDateString('en-US')
		const monthTransaction = new Date().toLocaleDateString('en-US', {
			month: 'long',
		})
		performTransaction({
			...value,
			data: dataTransaction,
			mes: monthTransaction[0].toUpperCase() + monthTransaction.substring(1),
		})
		setValue({ ...value, value: '' })
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h3 className={styles.optionsLegend}>New Transaction</h3>
			<select
				className={styles.optionsGroup}
				onChange={handleChange}
				name="transaction"
				data-testid="select-options"
			>
				<option defaultValue="Select a transaction type">Select a transaction type</option>
				<option value="Deposit">Deposit</option>
				<option value="Transfer">Transfer</option>
			</select>
			<label htmlFor="value" className={styles.valueLegend}>
				Value
			</label>
			<input
				onChange={handleChange}
				className={styles.valueField}
				type="number"
				value={value.value}
				name="value"
				id="value"
				placeholder="Enter a value"
			/>
			<button className={styles.button} type="submit">
				Perform transaction
			</button>
		</form>
	)
}
