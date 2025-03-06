import { calculateNewBalance } from '.'

describe('utils', () => {
	it('should return a new balance when a deposit is made', () => {
		const values = { type: 'Deposit', value: 100 }
		const balance = 1000
		const newBalance = calculateNewBalance(values, balance)
		expect(newBalance).toBe(1100)
	})

	it('should return a new balance when a transfer is made', () => {
		const values = { type: 'Transfer', value: 100 }
		const balance = 1000
		const newBalance = calculateNewBalance(values, balance)
		expect(newBalance).toBe(900)
	})
})
