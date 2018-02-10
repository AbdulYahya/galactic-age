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

  ageOnMercury() {
    return parseFloat((this.convertAgeToSeconds() / 7568640).toFixed(2));
  }

  ageOnVenus() {
    return parseFloat((this.convertAgeToSeconds() / 19552320).toFixed(2));
  }
}
