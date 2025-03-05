import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '.'

describe('Transaction form value input', () => {
	it('should be rendered with correct placeholder', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		expect(input).toBeInTheDocument()
	})

	it('should have number type attribute', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		expect(input).toHaveAttribute('type', 'number')
	})

	it('should accept numeric input correctly', () => {
		render(<Form />)
		const input = screen.getByPlaceholderText('Enter a value')
		userEvent.type(input, '100')
		expect(input).toHaveValue(100)
	})
})
