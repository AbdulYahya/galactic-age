import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

describe('GalacticCalculator', function() {
  let galacticCal;

  beforeEach(function() {
    galacticCal = new GalacticCalculator("1994-03-31");
  });

  it('should compare two dates and return the difference in seconds', function() {
    const dateOne = "1994-03-31";
    const dateTwo = "1995-07-15";

    expect(galacticCal.difference(dateOne, dateTwo)).toEqual(-40694400);
  });

  it('should return age on chosen planet', function() {
    expect(galacticCal.solarAge('ME', galacticCal.birthday)).toEqual(100);
    expect(galacticCal.solarAge('VE', galacticCal.birthday)).toEqual(39);
    expect(galacticCal.solarAge('MA', galacticCal.birthday)).toEqual(13);
    expect(galacticCal.solarAge('JU', galacticCal.birthday)).toEqual(2);
    expect(galacticCal.solarAge('saturn', galacticCal.birthday)).toEqual("Sorry that planet is not yet added! Maybe in a future update?");
  });

  it('should return life expectancy on chosen from planet dependening on country', function() {
    expect(parseInt(galacticCal.lifeExpectancy('ME', 'US'))).toEqual(226);
    expect(parseInt(galacticCal.lifeExpectancy('VE', 'US'))).toEqual(79);
    expect(parseInt(galacticCal.lifeExpectancy('MA', 'US'))).toEqual(28);
    expect(parseInt(galacticCal.lifeExpectancy('JU', 'US'))).toEqual(4);
    expect(galacticCal.lifeExpectancy('SA', 'EU')).toEqual("Sorry that country is not yet added! Maybe in a future update?");
  });
});
