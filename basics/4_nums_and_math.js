const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(score.toString())
// console.log(score.toString().length)
// console.log(score.toFixed(6))

const num = 123.877
// console.log(num.toPrecision(4))
// console.log(num.toPrecision(3))
// console.log(num.toPrecision(2))

const num2 = 100000000
// console.log(num2)
// console.log(num2.toLocaleString());
// console.log(num2.toLocaleString('en-IN'));

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9));

// console.log(Math.random());  // gives a value between 0 and 1 always
// console.log((Math.random()*10)+1);
// console.log((Math.floor(Math.random()*10))+1);

const min=1
const max=6
// console.log(Math.floor(Math.random()*(max-min+1))+min)

//Dates 

let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString())
// console.log(date.toLocaleString());
// console.log(typeof date);

let date2 = new Date(2023,0,23) //YYYY MONTH DATE
// console.log(date2.toDateString());

let date3 = new Date(2023,0,23,5 ,3) //YYYY MONTH DATE hours minutes
// console.log(date3.toLocaleString())

let date4 = new Date("2023-1-14")
// console.log(date4.toLocaleString());

let date5 = new Date("1-14-2023")
// console.log(date5.toLocaleString());

//TimeStamp

let tsp = Date.now()
// console.log(tsp);
// console.log(date5.getTime())
// console.log(Math.floor(Date.now()/1000));

let date1 = new Date()
// console.log(date1.toLocaleString())
// console.log(date1.getMonth()); // zero based
// console.log(date1.getDay()); // counting 1 as Monday

date1.toLocaleString('default',{
    weekday:"long",
})
