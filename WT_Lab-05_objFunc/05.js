//TASK-05
//! Age eligibility checker of a  voter
const checkEligibility = (name ,age)=>{
    if (age>=18) {
        return `${name}, you are eligibile to vote`
    }
    else{
        return `${name}, you are not eligibile to vote`;
    }
}
console.log(checkEligibility("ahsan",18))
