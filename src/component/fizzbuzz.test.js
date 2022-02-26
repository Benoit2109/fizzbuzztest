import {fizzbuzz} from './fizzbuzz';


// Ecrire un programme qui retourne les entiers de 1 à 100.
// les multiples de 3 sont remplacés par "fizz".
// les multiples de 5 sont remplacés par "buzz".
// les multiples de 15 sont remplacés par "fizzbuzz".

test('when given 1,1 should return 1', () => {
  expect(fizzbuzz(1 , 1)).toBe('1');
});

test('when given 2,2 should return 2', () => {
  expect(fizzbuzz(2 , 2)).toBe('2');
});

test('when given 3,3 should return fizz', () => {
  expect(fizzbuzz(3,3)).toBe('fizz');
});

test('when given 6,6 should return fizz', () => {
  expect(fizzbuzz(6,6)).toBe('fizz');
});

test('when given 5,5 should return buzz', () => {
  expect(fizzbuzz(5,5)).toBe('buzz');
});

test('when given 10,10 should return buzz', () => {
  expect(fizzbuzz(10,10)).toBe('buzz');
});

test('when given 15,15 should return fizzbuzz', () => {
  expect(fizzbuzz(15,15)).toBe('fizzbuzz');
});

test('when given 30,30 should return fizzbuzz', () => {
  expect(fizzbuzz(30,30)).toBe('fizzbuzz');
});

test('when given 1,2 should return 12', () => {
  expect(fizzbuzz(1 , 2)).toBe('12');
});

test('when given 1,3 should return 12fizz', () => {
  expect(fizzbuzz(1 , 3)).toBe('12fizz');
});

test('when given 1,5 should return 12fizz4buzz', () => {
  expect(fizzbuzz(1 , 5)).toBe('12fizz4buzz');
});

test('when given 1,15 should return 12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz', () => {
  expect(fizzbuzz(1,15)).toBe('12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz');
})

