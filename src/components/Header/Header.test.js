import { render, screen } from '@testing-library/react'
import Header from './index'

test('Should render user name in the header', () => {
	const mockUserName = 'John Doe'
	render(<Header userName={mockUserName} />)
	const userName = screen.getByText(mockUserName)
	expect(userName).toBeInTheDocument()
})
