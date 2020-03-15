import { HungryBear } from './../src/hungrybear.js';

describe('Fuzzy', () => {
	jest.useFakeTimers();
	let fuzzy;

	beforeEach(function() {
		fuzzy = new HungryBear('Fuzzy');
		fuzzy.setHunger();
	});

	afterEach(function() {
		jest.clearAllTimers();
	});

	test('should have a name and a food level of 100 when it is created', () => {
		expect(fuzzy.name).toEqual('Fuzzy');
		expect(fuzzy.foodLevel).toEqual(100);
	});

	test('should have a food level of 97 after 3001 milliseconds', () => {
		jest.advanceTimersByTime(3001);
		expect(fuzzy.foodLevel).toEqual(97);
	});
});
