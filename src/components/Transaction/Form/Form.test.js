import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '.'

describe('Transaction Form', () => {
	it('should render input with placeholder "Enter a value"', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		expect(input).toBeInTheDocument()
	})

	it('should render input with type="number"', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		expect(input).toHaveAttribute('type', 'number')
	})

	it('should update input value when user types a number', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		userEvent.type(input, '100')
		expect(input).toHaveValue(100)
	})

	it('should call performTransaction when form is submitted', () => {
		const performTransaction = jest.fn()
		render(<Form performTransaction={performTransaction} />)
		const button = screen.getByRole('button')
		userEvent.click(button)
		expect(performTransaction).toHaveBeenCalledTimes(1)
	})
})
