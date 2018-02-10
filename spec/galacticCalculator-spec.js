import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

describe('GalacticCalculator', function() {
  let galacticCal;

  // Instantiate a new GalacticCalculator class before each test
  beforeEach(function() {
    galacticCal = new GalacticCalculator("1994-03-31", 134);
  });

  it('should convert the date of birth to seconds', function() {
    expect(galacticCal.convertBirthToSeconds()).toEqual(753144658); // spec will fail since time stops for no spec
  });

  it('should compare two dates and return the difference in seconds', function() {
    const dateOne = "1994-03-31";
    const dateTwo = "1995-07-15";

    console.log(galacticCal.difference(dateOne, dateTwo, 'years'));
    expect(galacticCal.difference(dateOne, dateTwo, 'seconds')).toEqual(40690800);
  });
});
