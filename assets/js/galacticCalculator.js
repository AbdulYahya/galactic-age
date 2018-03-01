const moment = require('moment');

export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday;
    this.now = moment();
    this.age = this.now.diff(moment(this.birthday), 'years');

  }

  difference(comparisonDateOne, comparisonDateTwo) {
    comparisonDateOne = new Date(comparisonDateOne).setMilliseconds(0);
    comparisonDateTwo = new Date(comparisonDateTwo).setMilliseconds(0);

    return ((comparisonDateOne - comparisonDateTwo) / 1000);
  }

  convertAgeToSeconds() {
    this.birthday = new Date(this.birthday).setMilliseconds(0);
    let today = new Date(Date.now()).setMilliseconds(0);

    return this.difference(today, this.birthday);
  }

  solarAge(planet) {
    switch(planet) {
      case 'ME':
        return parseFloat((this.convertAgeToSeconds() / 7568640).toFixed(0));
      case 'VE':
        return parseFloat((this.convertAgeToSeconds() / 19552320).toFixed(0));
      case 'MA':
        return parseFloat((this.convertAgeToSeconds() / 59287680).toFixed(0));
      case 'JU':
        return parseFloat((this.convertAgeToSeconds() / 374016960).toFixed(0));
      default:
        return "Sorry that planet is not yet added! Maybe in a future update?";
    }
  }

  lifeExpectancy(planet, country) {
    switch(country) {
      case 'US':
        if (planet === 'ME')
          return parseFloat(326.82 - this.solarAge(planet)).toFixed(2);
        else if (planet === 'VE')
          return parseFloat(118.35 - this.solarAge(planet)).toFixed(2);
        else if (planet === 'MA')
          return parseFloat(41.86 - this.solarAge(planet)).toFixed(2);
        else if (planet === 'JU')
          return parseFloat(6.56 - this.solarAge(planet)).toFixed(2);
        break;

      default:
        return 'Sorry that country is not yet added! Maybe in a future update?';
    }
  }

}
