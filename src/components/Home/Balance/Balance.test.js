import { render, screen } from '@testing-library/react'
import Balance from '.'

describe('Balance', () => {
	it('should render balance with money format', () => {
		render(<Balance balance={1000} />)
		const balance = screen.getByTestId('balance-value')

		expect(balance).toHaveTextContent('$ 1000')
	})
})
