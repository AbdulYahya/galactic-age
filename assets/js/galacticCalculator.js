// require statements
const moment = require('moment');
// import * as moment from 'moment';

export class GalacticCalculator {
  constructor(birthday, expectancy) {
    this.birthday = moment(birthday);
    this.expectancy = expectancy;
  }

  difference(comparisonDateOne, comparisonDateTwo, units) {
    comparisonDateOne = moment(comparisonDateOne);
    comparisonDateTwo = moment(comparisonDateTwo);

    if (comparisonDateOne.isBefore(comparisonDateTwo)) {
      return comparisonDateTwo.diff(comparisonDateOne, units);
    } else {
      return comparisonDateOne.diff(comparisonDateTwo, units);
    }
  }

  convertAgeToSeconds() {
    return this.difference(new Date(this.birthday), moment(), 'seconds');
  }

  solarAge(planet) {
    console.log(planet);

    switch(planet) {
      case 'mercury':
        return parseFloat((this.convertAgeToSeconds() / 7568640).toFixed(2));
        break;
      case 'venus':
        return parseFloat((this.convertAgeToSeconds() / 19552320).toFixed(2));
        break;
      case 'mars':
        return parseFloat((this.convertAgeToSeconds() / 59287680).toFixed(2));
        break;
      case 'jupiter':
        return parseFloat((this.convertAgeToSeconds() / 374016960).toFixed(2));
        break;
      default:
        return "Sorry that planet is not yet added! Maybe in a future update?";
        break;
    }
  }


}
