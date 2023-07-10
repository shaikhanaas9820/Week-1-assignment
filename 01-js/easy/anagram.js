/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// function isAnagram(str1, str2) 
// {
//     var length_str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
//     var length_str2 = str2.toLowerCase().replace(/[^a-z]/g, '');
//     if(length_str2.length  !== length_str1.length )
//     {
//       return false;
//     }
	
//     const charMap1 = getCharMap(length_str1);
//     const charMap2 = getCharMap(length_str2);

// 	// Compare the character frequency maps
// 	for (let char in charMap1) 
// 	{
// 		if (charMap1[char] !== charMap2[char]) 
// 		{
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function getCharMap(str) 
// {
// 	const charMap = {};
// 	for (let char of str) 
// 	{
// 		charMap[char] = charMap[char] + 1 || 1;
// 	}
// 	return charMap;
// }


// let is_anagram = isAnagram('listen', 'silent');
// console.log(is_anagram);
// module.exports = isAnagram;


// Another Way to do it 

function sort(str)
{
	var return_array = str.split("");
	return_array = return_array.sort();
	var return_string = return_array.join("");
	return return_string;
}

function isAnagram(str1,str2)
{
	if(sort(str1) === sort(str2))
	{
		return true;
	}
	else
	{
		return false;
	}
}

let is_anagram = isAnagram('listen', 'silent');
console.log(is_anagram);