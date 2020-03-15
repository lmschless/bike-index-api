// import { GalacticAge } from '../src/app.js';

// describe('GalacticAge', () => {
// 	test('Make sure new GalacticAge class is created correctly.', () => {
// 		const galacticAge = new GalacticAge('luke', 30);
// 		expect(galacticAge.name).toEqual('luke');
// 		expect(galacticAge.yearsOld).toEqual(30);
// 	});
// });

// describe('CalculateAge', () => {
// 	let myAge;
// 	beforeEach(() => {
// 		myAge = new GalacticAge('Luke', 30);
// 	});
// 	test('Make sure calculateAge method is working correctly for Earth', () => {
// 		expect(myAge.earthAge(myAge.yearsOld)).toEqual(30);
// 	});
// 	test('Make sure calculateAge method is working correctly for Mercury', () => {
// 		expect(myAge.mercuryAge(myAge.yearsOld)).toEqual(125);
// 	});
// 	test('Make sure calculateAge method is working correctly for Venus', () => {
// 		expect(myAge.venusAge(myAge.yearsOld)).toEqual(48);
// 	});
// 	test('Make sure calculateAge method is working correctly for Mars', () => {
// 		expect(myAge.marsAge(myAge.yearsOld)).toEqual(15);
// 	});
// 	test('Make sure calculateAge method is working correctly for Jupiter', () => {
// 		expect(myAge.jupiterAge(myAge.yearsOld)).toEqual(2);
// 	});
// });

// describe('lifeExpectancy', () => {
// 	let myAge;
// 	beforeEach(() => {
// 		myAge = new GalacticAge('Luke', 30);
// 	});
// 	test('Make sure lifeExpectancy method is working correctly.', () => {
// 		expect(myAge.lifeExpectancy('jupiter')).toEqual(
// 			'You have 4.3844856661045535 Jupiter years left to live on Jupiter.'
// 		);
// 	});
// });
