// require statements
const moment = require('moment');
// import * as moment from 'moment';

export class GalacticCalculator {
  constructor(birthday, expectancy) {
    this.birthday = moment(birthday);
    this.expectancy = expectancy;
  }

  convertBirthToSeconds(birth) {
    birth = new Date(birth);
    console.log(birth);
    // console.log(moment()econds(birth).toString());
    return moment.duration(birth.getTime()).asSeconds();
  }

  difference(comparisonDateOne, comparisonDateTwo) {
    comparisonDateOne = moment(comparisonDateOne);
    comparisonDateTwo = moment(comparisonDateTwo);

    if ((comparisonDateOne - comparisonDateTwo) < 0) {
      return comparisonDateTwo.diff(comparisonDateOne, 'seconds');
    } else {
      return comparisonDateOne.diff(comparisonDateTwo, 'seconds');
    }

    // return comparisonDateTwo.diff(comparisonDateOne, 'seconds');
  }
}
