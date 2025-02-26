// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1,number2) {
  //Checks If the number1 is greater than number2, if true returns number1
  if(number1 > number2){
    return number1;
  //Checks if number2 is greater than number1, if true returns number2
  }else if(number2 > number1){
    return number2;
  //Checks if the numbers are equal, if true returns number1
  }else if(number1 === number2){
    return number1;
  }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  //Checks if the length of words parameters is greater than zero, if not returns null
  if(words.length === 0){
    return null;
  }else{
    //Loops trough the words array and with every Iteration checks if the length is greater than the longest word
    let longestWord = words[0];
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
          longestWord = words[i];
        }
    }
    return longestWord;
  }
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  //Checks if the length of numbers parameters is greater than zero, if not returns null
  if(numbers.length === 0){
    return 0;
  }else{
    let sum = 0;
     //Loops trough the numbers array and with every Iteration adds the number to sum Variable
     for(let i = 0; i < numbers.length; i++){
      sum += numbers[i];
     }
     return sum;
  }
}



// Iteration #3.1 Bonus:
function sum(numbers) {
  let sum = 0;
  //Loops trough numbers array
  numbers.forEach((item) => {
      //Checks if it is a number, if true adds it to the sum Variable
      if(typeof item === "number"){
       sum += item;
       //Checks if it is a boolean, if true adds it to the sum Variable
      }else if(item === true){
       sum += 1;
       //Checks if it is a boolean, if true adds it to the sum Variable
      }else if(item === false){
       sum += 0;
       //Checks if it is a string, if true adds it to the sum Variable
      }else if(typeof item === "string"){
       sum += item.length;
       //Checks if it is an object, if true throws an error
      }else if(typeof item === "object"){
       throw new Error("Unsupported data type sir or ma'am")
      }
  })
  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  //Variable that passes the numbers array to sumNumbers Function
  const sumOfArray = sumNumbers(numbers);
  if(numbers.length >= 1){
    //If numbers length is greater or equal to one returns the avarege
    return sumOfArray / numbers.length;
  }else if(numbers.length === 0){
    //If numbers length is equal to zero return null
    return null;
  }
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(words) {
  //Checks if words length is greater or equal to one
  if(words.length >= 1){
    let wordLength = 0;
    //Loops trough the array of words
    words.forEach((item) => {
      //Adds it to wordLength variable
      wordLength += item.length;
    })
    //Returns the avarege of WordLength
    return wordLength / words.length;
    //If words length equal to zero returns null
  }else if(words.length === 0){
    return null;
  }
}

// Bonus - Iteration #4.1
function avg(words) {
  //Checks if words length is greater than one
  if(words.length >= 1){
    //Declares variable equal to sum Function with words as an argument
    let newSum = sum(words);
    return newSum / words.length;
    //Checks if words length is equal to zero, if true returns null
  }else if(words.length === 0){
     return null;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words) {
  //Checks if words length is equal or greater than one
  if(words.length >= 1){
    let newArray = [];
    //Loops trough words array
    words.forEach((item) => {
      //Checks if the array includes the item
      if(newArray.includes(item) !== true){
       newArray.push(item);
      }
    });
    return newArray
    //Checks if words length is equal to zero, if true returns null
  }else if(words.length === 0){
    return null;
  }
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  //Checks if array argument includes the word argument
  if(array.includes(word)){
    return true;
    //Checks if array length is equal to zero, if true returns null
  }else if(array.length === 0){
    return null;
  }
  //Else returns false
  else{
    return false;
  }
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(array, word) {
  let counter = 0;
  //Loops trough array argument
  array.forEach((item) => {
    //Checks with each Iterations if item is equal to word argument
    if(item === word){
      counter++;
    }
  })
  return counter;
}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  let counter = 0;
   for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      //Checks if elements are minumum 3 index length from top
      if(i < 3){
        const countRight = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        const countLeft = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
        const checkBottom = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
        //Checks if elements are minumum 3 index length from left
        if(j < 3){
          if(countRight > counter){
            counter = countRight;
          }else if(checkBottom > counter){
            counter = checkBottom;
          }
          //Checks if elements are minumum 3 index length from the right
        }else if(j > matrix[i].length -4){
          if(countRight > counter){
            counter = countRight;
          }else if(checkBottom > counter){
            counter = checkBottom;
          }
         //Checks if elements are between 3-16 index from left/right
        }else{
          if(countRight > counter){
            counter = countRight;
          }else if(countLeft > counter){
            counter = countLeft;
          }else if(checkBottom > counter){
            counter = checkBottom;
          }
        }
        //Checks if elements are maximum 3 index from the bottom
      }else if(i > matrix[i].length - 4){
          const countRight = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
           const countLeft = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
           const checkTop = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
           //Checks if elements are maximum 3 index left from left
         if(j < 3){
          if(countRight > counter){
            counter = countRight;
          }else if(checkTop > counter){
            counter = checkTop;
          }
          //Checks if elements are maximum 3 index from right
        }else if(j > matrix[i].length -4){
          if(countRight > counter){
            counter = countRight;
          }else if(checkTop > counter){
            counter = checkTop;
          }
          //Checks if elements are between 3-16 index from left/right
        }else{
          if(countRight > counter){
            counter = countRight;
          }else if(countLeft > counter){
            counter = countLeft;
          }else if(checkTop > counter){
            counter = checkTop;
          }
        }
       //Elements sorted out from index 3-16 from top/bottom
      }else{
        const countRight = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
           const countLeft = matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3];
           const checkTop = matrix[i][j] * matrix[i - 1][j] * matrix[i - 2][j] * matrix[i - 3][j];
         const checkBottom = matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] * matrix[i + 3][j];
         //Checks if element is maximum 3 index from left
       if(j < 3){
         if(countRight > counter){
            counter = countRight;
         }else if(checkBottom > counter){
            counter = checkBottom;
          }else if(checkTop > counter){
            counter = checkTop;
          }
          //Checks if element is maximum 3 index from right
       }else if(j > matrix[i].length - 4){
          if(countLeft > counter){
            counter = countLeft;
          }else if(checkBottom > counter){
            counter = checkBottom;
          }else if(checkTop > counter){
            counter = checkTop;
          }
          //Elements that are between 3-16 indexes
       }else{
          if(countRight > counter){
            counter = countRight;
         }else if(countLeft > counter){
           counter = countLeft;
         }else if(checkBottom > counter){
            counter = checkBottom;
          }else if(checkTop > counter){
            counter = checkTop;
          }
       }
      }
    }
   }
  return counter;
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
