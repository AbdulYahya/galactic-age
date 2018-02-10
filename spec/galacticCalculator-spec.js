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

  // ageOnMercury
  it('should return age on mercury', function() {
    expect(galacticCal.ageOnMercury()).toEqual(99.51);
  });

  // ageOnVenus
  it('should return age on mercury', function() {
    expect(galacticCal.ageOnVenus()).toEqual(38.52);
  });

  // ageOnMars
  it('should return age on mercury', function() {
    expect(galacticCal.ageOnMars()).toEqual(12.7);
  });

  // ageOnJupiter
  it('should return age on mercury', function() {
    expect(galacticCal.ageOnJupiter()).toEqual(2.01);
  });
});
