/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(number) 
{
	// Convert the number to a string
	const numString = number.toString();
  
	// Reverse the string
	const reversedString = numString.split('').reverse().join('');
  
	// Compare the original string with the reversed string
	if (numString === reversedString) 
	{
	  return true; // It is a palindrome
	} 
	else 
	{
	  return false; // It is not a palindrome
	}
}
  
// Test the function
const number = 123213;

const result = isPalindrome(number);
console.log(result);

// if (isPalindrome(number)) 
// {
// 	console.log(`${number} is a palindrome.`);
// } 
// else 
// {
// 	console.log(`${number} is not a palindrome.`);
// }

// module.exports = isPalindrome;
