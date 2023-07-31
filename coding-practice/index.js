var array = [1, 2, 3, 4, 5];

array.forEach(item => item > 3 ? console.log(true) : console.log(false));

// console.log(array);

const hanho = [2,5,8,3,9];
const jahyun = [4,4,6,8,10];

let a = hanho.slice();
let b = a.splice(-2, 2);
let c = a.shift();

const newArr = a.concat(jahyun);

const checkDogs = (arr) => {
	let text = '';
	arr.forEach((age,i,arr) => {
		text += `Dog number ${i + 1} is an ${age >= 3 ? 'adult' : 'puppy'} ${i == arr.length - 1 ? '.' : ', and '}`;
	})
	return text;
}
console.log(checkDogs(newArr));

const movements = [200, -100, 300, -200, 500, 450]
const ans = movements.map(element => element*1.1);
// const final = ans.Math.floor();

const 입금 = movements.filter(ele => ele >= 0);
const 입금반대 = movements.filter(ele => ele < 0);
console.log(입금, 입금반대);

//reduce() acc -  first value, cur, i, arr 
[200, -122, 223, -90].reduce()

const array1 = [1, 2, 3, 4];
const sumWithInitial = array1.reduce (
 (accumulator, currentValue) => accumulator  + currentValue, 0
);
console.log(sumWithInitial);

/*
const calc = (arr1) => (
	const ave = arr2.map(age => age <= 2 ? 2 * age : 16 + age * 4)
)
*/

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300]
  };
  const account2 = { 
   owner: 'Jessica Davis', 
   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
  };
  const account3 = {  
  owner: 'Steven Thomas Williams', 
  movements: [200, -200, 340, -300, -20, 50, 400, -460]
  };
  const accounts = [account1,account2, account3];

//   const final = accounts.forEach()

  a = ['John', 'Dew']
  a.reduce((acc, cur) => acc + cur[0], "").toLowerCase();
  console.log(a);

createUserInitial(accounts)