// code your solution here
function mondayWork(activity='go to the office'){
return `This Monday, I will ${activity}.`
}
console.log(mondayWork())


function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

console.log(saturdayFun())


function wrapAdjective(wrapper = "*") {
  return function(adjective = "special") {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}

