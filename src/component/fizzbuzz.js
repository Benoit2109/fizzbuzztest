// créer une fonction qui permet de rendre une suite de chiffre compris entre 1 et 100 de type string.
// les multiples de 3 sont remplacés par fizz.
// les multiples de 5 sont remplacés par buzz.
// les multiples de 15 sont remplacés par fizzbuzz.

export const fizzbuzz = (min, max) => {
  return evaluateNumbers(min, max);
};

const evaluateNumbers = (min, max) => {
  let result = '';
  while ( min <= max ){
    result += evaluateNumber(min++);
  }
  return result;
}

export const evaluateNumber = (num) => {
  if (num % 15 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num.toString(); 
}; 
