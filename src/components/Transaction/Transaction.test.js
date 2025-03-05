import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Transaction from '.'

describe('Transaction', () => {
	it('should render deposit transaction option', () => {
		const performTransaction = jest.fn()
		render(<Transaction performTransaction={performTransaction} />)
		const depositOption = screen.getByText('Deposit')
		expect(depositOption).toBeInTheDocument()
	})

	it('should render transfer transaction option', () => {
		const performTransaction = jest.fn()
		render(<Transaction performTransaction={performTransaction} />)
		const transferOption = screen.getByText('Transfer')
		expect(transferOption).toBeInTheDocument()
	})

	it('should select deposit transaction option', () => {
		const performTransaction = jest.fn()
		render(<Transaction performTransaction={performTransaction} />)

		const select = screen.getByTestId('select-options')
		expect(select).toBeInTheDocument()

		expect(select).toHaveValue('Select a transaction type')

		userEvent.selectOptions(select, 'Deposit')

		expect(select).toHaveValue('Deposit')
		expect(screen.getByRole('option', { name: 'Deposit' }).selected).toBe(true)
	})

	it('should select transfer transaction option', () => {
		const performTransaction = jest.fn()
		render(<Transaction performTransaction={performTransaction} />)

		const select = screen.getByTestId('select-options')
		expect(select).toBeInTheDocument()

		expect(select).toHaveValue('Select a transaction type')

		userEvent.selectOptions(select, 'Transfer')

		expect(select).toHaveValue('Transfer')
		expect(screen.getByRole('option', { name: 'Transfer' }).selected).toBe(true)
	})
})
