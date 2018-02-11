
export class GalacticCalculator {
  constructor(birthday) {
    this.birthday = birthday;
  }

  difference(comparisonDateOne, comparisonDateTwo) {
    comparisonDateOne = new Date(comparisonDateOne).setMilliseconds(0);
    comparisonDateTwo = new Date(comparisonDateTwo).setMilliseconds(0);

    return (comparisonDateOne - comparisonDateTwo) / 1000;
  }

  convertAgeToSeconds() {
    this.birthday = new Date(this.birthday).setMilliseconds(0);
    let today = new Date(Date.now()).setMilliseconds(0);

    return this.difference(today, this.birthday);
  }

  solarAge(planet) {
    switch(planet) {
      case 'mercury':
        return parseFloat((this.convertAgeToSeconds() / 7568640).toFixed(2));
      case 'venus':
        return parseFloat((this.convertAgeToSeconds() / 19552320).toFixed(2));
      case 'mars':
        return parseFloat((this.convertAgeToSeconds() / 59287680).toFixed(2));
      case 'jupiter':
        return parseFloat((this.convertAgeToSeconds() / 374016960).toFixed(2));
      default:
        return "Sorry that planet is not yet added! Maybe in a future update?";
    }
  }

  lifeExpectancy(planet, country) {
  }

}
