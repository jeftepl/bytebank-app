import { render, screen } from '@testing-library/react'
import Transaction from '.'
import styles from './Transaction.module.css'

test('Should render transaction type and value with updated props', () => {
	const transaction = {
		type: 'Transfer',
		value: 100
	}
	const { rerender } = render(<Transaction transaction={transaction} styles={styles} />)
	const transactionType = screen.getByTestId('transactionType')
	const transactionValue = screen.getByTestId('transactionValue')

	expect(transactionType).toHaveTextContent('Transfer')
	expect(transactionValue).toHaveTextContent('- $ 100')

	const newTransaction = {
		type: 'Deposit',
		value: 500
	}
	rerender(<Transaction transaction={newTransaction} styles={styles} />)
	const newTransactionType = screen.getByTestId('transactionType')
	const newTransactionValue = screen.getByTestId('transactionValue')

	expect(newTransactionType).toHaveTextContent('Deposit')
	expect(newTransactionValue).toHaveTextContent('$ 500')
})
