import { render, screen } from '@testing-library/react'
import Statement from '.'

test('Should render list of transactions', () => {
	const transactions = [
		{
			type: 'Transaction',
			value: 100
		}
	]
	render(<Statement transactions={transactions} />)
	const transactionsList = screen.getByRole('listitem')
	expect(transactionsList).toBeInTheDocument()
})
