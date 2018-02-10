// require statements
const moment = require('moment');
// import * as moment from 'moment';

export class GalacticCalculator {
  constructor(birthday, expectancy) {
    this.birthday = moment(birthday);
    this.expectancy = expectancy;
  }


  difference(comparisonDateOne, comparisonDateTwo, unit) {
    comparisonDateOne = moment(comparisonDateOne);
    comparisonDateTwo = moment(comparisonDateTwo);

    if ((comparisonDateOne - comparisonDateTwo) < 0) {
      return comparisonDateTwo.diff(comparisonDateOne, unit);
    } else {
      return comparisonDateOne.diff(comparisonDateTwo, unit);
    }
  }

  convertBirthToSeconds() {
    // birth = this.difference(new Date(birth), moment());
    console.log(this.difference(new Date(this.birthday), moment(), 'seconds'));
    return this.difference(new Date(this.birthday), moment(), 'seconds');
  }
}
