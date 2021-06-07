const getSleepHours = (day) => {
  switch(day){
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 8;
      break;
    case "Wednesday":
      return 4;
      break;
    case "Thursday":
      return 3;
      break;
    case "Friday":
      return 8;
      break;
    case "Saturday":
      return 22;
      break;
    case "Sunday":
      return 6;
      break;  
  }
}


const getActualSleepHours = () =>{
  return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday")+ getSleepHours("Friday")+getSleepHours("Saturday")+getSleepHours("Sunday");
}

const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours * 7;
}

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours =getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
    console.log("You have got the perfect amount of sleep.")
  }else if(actualSleepHours > idealSleepHours){
    console.log("You have got more sleep than needed.")
  }else{
    console.log("You should get some rest.")
  }

}

calculateSleepDebt();


