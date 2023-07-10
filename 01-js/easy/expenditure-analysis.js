/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

// function calculateTotalSpentByCategory(transactions)
// {
// 	const categoryMatch = {};
// 	for (const transaction of transactions)
// 	{
// 		const {category,price} = transaction;
// 		if(categoryMatch.hasOwnProperty(category))
// 		{
// 			categoryMatch[category] += price;
// 		}
// 		else
// 		{
// 			categoryMatch[category] = price;
// 		}
// 	}
// 	result = [];
// 	for(const category in categoryMatch)
// 	{
// 		result.push({[category] : categoryMatch[category]});
// 	}
// 	return result;
// }



// Another way to do it

function calculateTotalSpentByCategory(transactions)
{
	var return_object = {};
	for(i = 0; i < transactions.length; i++)
	{
		var transaction = transactions[i];
		// console.log(transactions[i]);
		// return false;
		if(return_object[transaction.category])
		{
			return_object[transaction.category] = 	transaction.price + return_object[transaction.category];
		}
		else
		{
			return_object[transaction.category] = 	transaction.price;
		}
	}

	var object_keys = Object.keys(return_object);
	// return object_keys;
	var return_array = [];
	for(var i = 0; i<object_keys.length; i++)
	{
		var category = object_keys[i];
		var obj = 
		{
			category: category,
			total_amount_spent_on_category : return_object[category]
		}
		return_array.push(obj);
	}

	return return_array;
}

const transactions = 
[
	{ itemName: 'Item 1', category: 'Category A', price: 10 },
	{ itemName: 'Item 2', category: 'Category B', price: 20 },
	{ itemName: 'Item 3', category: 'Category A', price: 15 },
	{ itemName: 'Item 4', category: 'Category C', price: 12 },
	{ itemName: 'Item 5', category: 'Category B', price: 8 },
];

const expenceTracking = calculateTotalSpentByCategory(transactions);
console.log(expenceTracking);

// module.exports = calculateTotalSpentByCategory;
