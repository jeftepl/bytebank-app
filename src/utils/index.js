export const calculateNewBalance = (values, balance) => {
	if (values.type === 'Deposit') {
		return balance + parseInt(values.value)
	} else {
		return balance - parseInt(values.value)
	}
}
