function isLeap(year) {
  let leapYear = year;
  var notLeap = "Not leap year.";
  var isLeap = "Leap year.";
  if (leapYear % 4 === 0) {
    if (leapYear % 100 === 0) {
      if (leapYear % 400 === 0) {
        return isLeap;
      } else {
        return notLeap;
      }
    } else {
      return isLeap;
    }
  } else {
    return notLeap;
  }
}
