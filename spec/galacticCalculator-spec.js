import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

describe('GalacticCalculator', function() {
  let galacticCal;

  // Instantiate a new GalacticCalculator class before each test
  beforeEach(function() {
    galacticCal = new GalacticCalculator("1994-03-31", 134);
  });

  it('should convert the date of birth to seconds', function() {
    const birthday = "1994-03-31";
    // console.log(galacticCal.convertBirthToSeconds(birthday));
    expect(galacticCal.convertBirthToSeconds(birthday)).toEqual(765072000);
  });

  it('should compare two dates and return the difference in seconds', function() {
    const dateOne = "1994-03-31";
    const dateTwo = "1995-07-15";

    console.log(galacticCal.difference(dateOne, dateTwo));

  });
});
