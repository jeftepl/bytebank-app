import { render, screen } from '@testing-library/react'
import Menu from '.'

test('Should render home page link on menu', () => {
	render(<Menu />)
	const homeLink = screen.getByText('Home')
	expect(homeLink).toBeInTheDocument()
})

test('Should render menu items', () => {
	render(<Menu />)
	const menuItems = screen.getAllByRole('link')
	expect(menuItems).toHaveLength(4)
})

test('Should not render bank statement link on menu', () => {
	render(<Menu />)
	const bankStatementLink = screen.queryByText('Statement')
	expect(bankStatementLink).not.toBeInTheDocument()
})
