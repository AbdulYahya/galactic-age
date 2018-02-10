// require statements
const moment = require('moment');
// import * as moment from 'moment';

export class GalacticCalculator {
  constructor(birthday, expectancy) {
    this.birthday = moment(birthday, "MM-DD-YYYY");
    this.expectancy = expectancy;
  }

  convertBirthToSeconds(birth) {
    birth = new Date(birth);
    console.log(birth);
    // console.log(moment()econds(birth).toString());
    return moment.duration(birth.getTime()).asSeconds();
  }
}
