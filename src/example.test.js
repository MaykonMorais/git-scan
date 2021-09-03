const sum = (a, b) => a + b

describe('Sum Component', () => {
	it('shold return the sum of two numbers', () => {
		expect(sum(1, 2)).toBe(3)
	})
})
