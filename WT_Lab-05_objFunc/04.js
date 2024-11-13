const calculateInterest = (principal, rate,time)=>{
    let interest = (principal * rate * time) / 100;
    return interest;
}
console.log(calculateInterest(4,98,6));