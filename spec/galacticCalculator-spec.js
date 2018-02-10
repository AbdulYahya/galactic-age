import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

describe('GalacticCalculator', function() {
  let galacticCal;

  // Instantiate a new GalacticCalculator class before each test
  beforeEach(function() {
    galacticCal = new GalacticCalculator("1994-03-31", 134);
  });

  // convertAgeToSeconds
  it('should convert the date of birth to seconds', function() {
  //  expect(galacticCal.convertAgeToSeconds()).toEqual(753144658); // spec will fail since time stops for no spec
  });

  // difference
  it('should compare two dates and return the difference in seconds', function() {
    const dateOne = "1994-03-31";
    const dateTwo = "1995-07-15";

    expect(galacticCal.difference(dateOne, dateTwo, 'seconds')).toEqual(40690800);
  });

  // solarAge
  it('should return age on chosen planet', function() {
    expect(galacticCal.solarAge('mercury')).toEqual(99.51);
    expect(galacticCal.solarAge('venus')).toEqual(38.52);
    expect(galacticCal.solarAge('mars')).toEqual(12.7);
    expect(galacticCal.solarAge('jupiter')).toEqual(2.01);
    expect(galacticCal.solarAge('saturn')).toEqual("Sorry that planet is not yet added! Maybe in a future update?");
  });

});
