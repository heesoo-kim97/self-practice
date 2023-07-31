var userUserInitial = function(arrData){
    arrData.forEach((element, i, arr) => {
      var newArr = element.owner.split(' ')
      var string = newArr.reduce((acc, cur) => (acc + cur.slice(0,1)), '')
  
      element.userInitial = string.toLowerCase()
      
  })
      
  }
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

 accounts.forEach((ele, i, arr) => {
    var separate = ele.owner.split(' ')
    var afterMap = separate.map(item => item.substring(0, 1));
    ele.userInitial = afterMap.join('').toLowerCase()
   
 })

console.log(accounts);
// createUserInitial(accounts)

const stocks = [1800, 900, 20, 190000, 700000, 40000, 50000];

const ans = stocks.reduce((acc, cur) => {
    
    return acc < cur ? cur : acc
    
}, 0)
console.log(ans);

//Number 3


const hanho = [1,2,3,4,5];


function calcAverageHumanAge(param) {
const mapVal = param.map(element => element <= 2 ? element * 2 : 16 + element * 4);
const filterVal = mapVal.filter(ele => ele > 18);
const reduceVal = filterVal.reduce((acc, cur) => (acc + cur) , 0) / filterVal.length;
return reduceVal;
}

calcAverageHumanAge(hanho); // 32 

// Number 4

function calcDeposit(param) {
   const money = param.movements;
   const deposits = money.filter(ele => ele > 0).reduce((acc, cur) => (acc + cur), 0)
   return `${param.owner}의 총 입금액: ${deposits}`;
}
  
function calcWithDrawal(param) {
  const money = param.movements;
  const withdrawals = money.filter(ele => ele < 0)
  const totalWithdrawal = withdrawals.reduce((acc, cur) => (acc + cur), 0)
  return `${param.owner}의 총 지출액: ${totalWithdrawal}`;
}

// Number 5
function interest(param) {
  const money = param.movements;
  const int = money.filter(ele => ele > 0).map(ele => ele * 0.12);
  console.log("모든 입금에 12프로 갑: ", int);
  const realInt = int.filter(ele => ele > 10).reduce((acc, cur) => (acc + cur), 0);
  return `${param.owner}의 총 이자액: ${realInt}`;
}

 