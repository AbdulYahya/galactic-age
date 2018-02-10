const moment = require('moment');
import { GalacticCalculator } from './../js/galacticCalculator.js';
// import { GalacticCalculator } from './../assets/js/galacticCalculator.js';


describe('GalacticCalculator', function() {
  let galacticCal;

  // Instantiate a new GalacticCalculator class before each test
  beforeEach(function() {
    galacticCal = new GalacticCalculator("03-31-1994", 134);
  });

  it('should convert convert the date of birth to seconds', function() {
    let birthday = "03-31-1994";
    // console.log(galacticCal.convertBirthToSeconds(birthday));
    expect(galacticCal.convertBirthToSeconds(birthday)).toEqual(765100800);
  })
});
