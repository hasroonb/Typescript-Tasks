import inquirer from 'inquirer';
import { operators } from './operator.js';

async function performCalculation() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'number1',
      message: 'Enter the first number:',
      validate: (input) => !isNaN(Number(input)),
    },
    {
      type: 'list',
      name: 'operator',
      message: 'Select an operator:',
      choices: operators,
    },
    {
      type: 'input',
      name: 'number2',
      message: 'Enter the second number:',
      validate: (input) => !isNaN(Number(input)),
    },
  ]);

  const num1 = parseFloat(userInput.number1);
  const num2 = parseFloat(userInput.number2);
  const operator = userInput.operator;

  let result: number;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operator.');
      return;
  }

  console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
}

performCalculation();
