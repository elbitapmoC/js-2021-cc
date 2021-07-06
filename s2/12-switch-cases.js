let day;
switch (new Date().getDay()) {
  case 0:
    day = 'SUN';
    break;
  case 1:
    day = 'MON';
    break;
  case 2:
    day = 'TUE';
    break;
  case 3:
    day = 'WED';
    break;
  case 4:
    day = 'THUR';
    break;
  case 5:
    day = 'Day of Prep | FRI';
    break;
  default:
    day = 'Shabbat | SAT';
    break;
}

console.log(`Today is: ${day}`);