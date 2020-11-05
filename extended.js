let hours = 50;
const wage = 10;
let pay = wage * 40;

if (hours > 40){
    let OTPay = (hours -40) * (wage * 1.5);
    pay += OTPay;
    console.log(`Your pay is $${pay} for ${hours} hours`)
} else {
    console.log(`Your pay is ${pay} for ${hours}`);
}

let weeks = 1000000/pay;

if (weeks%2===0){
    console.log(`It would take ${Math.trunc(weeks)} weeks to get to $1mil!`);
} else {
    weeks++;
    console.log(`It would take ${Math.trunc(weeks)} weeks to get to $1mil!`);
}