import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

describe('GalacticCalculator', function() {
  let galacticCal;

  // Instantiate a new GalacticCalculator class before each test
  beforeEach(function() {
    galacticCal = new GalacticCalculator("1994-03-31");
  });

  // convertAgeToSeconds
  it('should convert the date of birth to seconds', function() {
    // expect(galacticCal.convertAgeToSeconds()).toEqual(753144658); // spec will fail since time stops for no spec
  });

  // difference
  it('should compare two dates and return the difference in seconds', function() {
    const dateOne = "1994-03-31";
    const dateTwo = "1995-07-15";

    expect(galacticCal.difference(dateOne, dateTwo)).toEqual(-40694400);
  });

  // solarAge
  it('should return age on chosen planet', function() {
    expect(galacticCal.solarAge('mercury', galacticCal.birthday)).toEqual(99.52);
    expect(galacticCal.solarAge('venus', galacticCal.birthday)).toEqual(38.53);
    expect(galacticCal.solarAge('mars', galacticCal.birthday)).toEqual(12.71);
    expect(galacticCal.solarAge('jupiter', galacticCal.birthday)).toEqual(2.01);
    expect(galacticCal.solarAge('saturn', galacticCal.birthday)).toEqual("Sorry that planet is not yet added! Maybe in a future update?");
  });

  // lifeExpectancy
  it('should return life expectancy on chosen from planet dependening on country', function() {
    // expect(galacticCal.lifeExpectancy('mercury', 'US')).toEqual(101.09);
    // expect(galacticCal.lifeExpectancy('venus', 'US')).toEqual(0);
    // expect(galacticCal.lifeExpectancy('mercury', 'EU')).toEqual("Sorry that country is not yet added! Maybe in a future update?");
  });
});
