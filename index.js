// Code your solution in this file!
function distanceFromHqInBlocks(pickUPLocation) {
    const headQuarters = 42;
  //   const distanceFromHqInBlocks = pickUPLocation - headQuarters;
    return Math.abs(pickUPLocation - 42);
  }
  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
  }
  
  function distanceTravelledInFeet(pickUPLocation, headQuarters) {
    const feetPerBlock = 264;
    const distanceFromHqInBlocks = Math.abs(pickUPLocation - headQuarters);
    const distanceInFeet = distanceFromHqInBlocks * feetPerBlock;
    return distanceInFeet;
  
  }
  function calculatesFarePrice(pickUPLocation, headQuarters){
      if (distanceTravelledInFeet(pickUPLocation, headQuarters)<= 400){
          return 0
      }
      else if (distanceTravelledInFeet(pickUPLocation, headQuarters)<= 2000){
          const newDistance = distanceTravelledInFeet(pickUPLocation, headQuarters) - 400
          const farePrice= newDistance * 0.02
          return farePrice
      }
      else if (distanceTravelledInFeet(pickUPLocation, headQuarters) <= 2500){
          return 25
      }
      else{
          return 'cannot travel that far'
      }
  }