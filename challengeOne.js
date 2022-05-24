// const sentence = 'alchemy rocks gold';

function reverseWords(sentence) {
  // attempt 1
  //   const input = 'alchemy rocks gold';
  //   const output = input.split(' ').map
  // attempt 2
  //   return sentence.split(' ').map(function (word) { =>
  //     return word.split('').reverse
  //   });
  //   attempt 3
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
console.log('reverse', reverseWords);

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
console.log('title case', titleCase);

function oddishOrEvenish(number) {
  // My Method
  //   const x = number.toString();
  //   let y = 0;
  //   for (let i = 0; i < x.length; i++) {
  //     y += parseInt(x[i]);
  //   }
  //   if (y % 2 === 1) {
  //     return 'Oddish';
  //   } else return 'Evenish';
  // }
  //Class method
  const sum = number
    .toString('')
    .split()
    .reduce((total, n) => {
      total += n;
      return total;
    }, 0);
  return sum % 2 === 0;
}

console.log('odd-even', oddishOrEvenish);

function fizzBuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 15 == 0) console.log('FizzBuzz');
    else if (i % 3 == 0) console.log('Fizz');
    else if (i % 5 == 0) console.log('Buzz');
    else console.log(i);
  }
}

console.log('fizzbuzz', fizzBuzz);

function anagrams(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  return (
    string1.toLowerCase().split('').sort().join('') ===
    string2.toLowerCase().split('').sort().join('')
  );
}

const string1 = 'superintended';
const string2 = 'unpredestined';

anagrams(string1, string2);
