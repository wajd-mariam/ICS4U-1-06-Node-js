/**
 * Copyright (c) 2020
 *
* This program asks user to enter the maximum range of random generated number,
* generates a number between 1 and maximum range and prints it to the user.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/11/27
 */

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// This function generates the random number and prints it out to the user.
function rollDice (minValue, maxValue) {
  // Generating a random number:
  const randomNumber = Math.floor(Math.random()*(maxValue - minValue + 1)+ minValue);
  
  // Printing out random generated number:
  console.log(`The random generated number is ${randomNumber}`);
}

// This function gets input from the user
function main(){
  
  // Declaring constants
  let minValue = 1;
  
  // Try Catch Statement:
  try {
  // User Input:
  var maxValue = prompt(`Enter the maximum range of random generated number: `);

  } catch(err) {
    console.log (`An error occurred`);
  }
  // Calls rollDice function:
  rollDice(minValue, maxValue);
}

main();