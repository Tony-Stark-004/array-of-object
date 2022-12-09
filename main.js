let studentRecords = [ {name: 'John', id: 123, marks : 98 },
      {name: 'Baba', id: 101, marks : 23 },
      {name: 'yaga', id: 200, marks : 45 },
      {name: 'Wick', id: 115, marks : 75 } ]

// 1.)
let que_1 = studentRecords.map((value) => {
      return value.name;
});

console.log(que_1);

// 2.)
let que_2 = studentRecords.filter((value) => {
      return value.marks>50
});

console.log(que_2);

// 3.)
let que_3 = studentRecords.filter((value) => {
  return value.marks>50 && value.id> 120
});

console.log(que_3);

// 4.)
let que_4 = studentRecords.map(value => value.marks).reduce((accumulator, currentValue) =>  accumulator + currentValue);
console.log(que_4);

// 4.) another way

let que_4_1 = studentRecords.reduce((accumulator, currentValue) => {
       return currentValue.marks + accumulator
}, 0);

console.log(que_4_1);

// 5.)
let que_5 = studentRecords.filter((value) => {
      return (value.marks>50)
}).map(value => value.name);
console.log(que_5);

// 6.)

let que_6 = studentRecords.filter(value => value.id>120).reduce((acc, curr) => {
            return acc + curr.marks
}, 0);
                          
console.log(que_6);

// 7.)
let que_7 = studentRecords.filter(value => value.marks<50).map(value => value.marks + 15)
let result = studentRecords.filter(value => value.marks>50).reduce((a, v) => {return a + v.marks},0) + que_7.filter(value => value>50).reduce((lastAcc, lastCurrVal) => {return lastAcc + lastCurrVal},0)
console.log(result);


let objects = [
      {name: "Aditya", class: "5th", rollNo: "1"},
      {name: "Vishal", class: "5th", rollNo: "2"},
      {name: "ABhishek", class: "5th", rollNo: "3"},
      {name: "Anand", class: "5th", rollNo: "4"},
      {name: "Ram", class: "5th", rollNo: "5"},
      {name: "Tushar", class: "5th", rollNo: "6"}
]

console.log(objects);


