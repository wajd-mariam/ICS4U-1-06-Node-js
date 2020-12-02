/**
 * Copyright (c) 2020
 *
* This program asks user to enter the maximum range of random generated number,
* generates a number between 1 and maximum range and prints it to the user.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/12/01
 */

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// This function generates the random number and prints it out to the user.
function rollDice (minValue, maxValue) {
  // Generating a random number:
  const randomNumber = Math.floor(Math.random()*(maxValue - minValue + 1)+ minValue);
  
  // Returning random number:
  return randomNumber;
}

// Try Catch Statement:
try {
  // Declaring variables and constants:
  let minValue = 1;
  let number = 0;

  // User Input:
  var maxValue = prompt(`Enter the maximum range of random generated number: `);
  
  // Calls rollDice function:
  number = rollDice(minValue, maxValue);
  // Output:
  console.log (`The random generated number is ${number}`);

// Error Output:
} catch(err) {
    console.log (`An error occurred`);
  }
