//JSON.parse() - преобразовать JSON в структуру данных JS.

// let strArr = localStorage.getItem('arr');
// console.log(`${strArr} тип: ${typeof strArr}`);

// srtArr = JSON.parse(strArr);

// console.log(`${strArr} массив: ${Array.isArray(strArr)}`);

// 1)// let items = document.querySelectorAll('li');
// let arr = []
// for (let item of items) {
//     arr.push(item.textContent)

// }
// let json = JSON.stringify(arr);

// console.log(json);

// 2)// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// arr.push("user6")
// arr = JSON.stringify(arr)
// console.log(arr)

let json = `[
	{
		"name": "user1",
		"age": 25,
		"salary": 1000
	},
	{
		"name": "user2",
		"age": 26,
		"salary": 2000
	},
	{
		"name": "user3",
		"age": 27,
		"salary": 3000
	}
]`;

// let arr = JSON.parse(json);
// arr.push("name": "user2")
// arr.push("age": "user2")
// arr.push("salary": "user2")
// arr = JSON.stringify(arr)

// console.log(arr)