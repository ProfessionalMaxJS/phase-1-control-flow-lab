function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return "This one is on me!"
  }
  else if (feet > 2000 && feet < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (feet > 2500){
    return "No can do."
  }
}
// scuberGreetingForFeet() gives customers a free sample if the ride is less than or equal to 400 feet + charges 30 dollars for a distance over 2000 feet + does not allow rides over 2500 feet


function ternaryCheckCity(city){
  // Write your code here!
return city === "NYC" ? "Ok, sounds good." : "No go."}



function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip){
    case 'generous':
      return "Thank you so much.";
      break;
    case 'not as generous':
      return "Thank you.";
      break;
    default:
      return 'Bye.';
      break;
  }
}