import * as moment from 'moment';
import { GalacticCalculator }  from './../js/galacticCalculator.js';
// import { GalacticCalculator } from './../assets/js/galacticCalculator.js';

function processForm() {
  const form = document.getElementById('galacticForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    // event.stopPropagation();

    const birth = $('#birth').val();
    const expectancy = $('#expectancy').val();

    const galacticCalculator = new GalacticCalculator(birth, expectancy);

    console.log(birth);

    $('#calculation').append("yo" + galacticCalculator.convertBirthToSeconds(birth));
  });
}

$(function() {
  processForm();
});
