import { GalacticCalculator }  from './../assets/js/galacticCalculator.js';

function processForm() {
  const form = document.getElementById('galacticForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const birth = $('#dob').val();
    // const expectancy = $('#expectancy').val();

    const galacticCalculator = new GalacticCalculator(birth);

    console.log(birth);

    $('#header').html(`You are ${galacticCalculator.difference(birth, moment(), 'years')} years old!`);
    $('#calculation').append("yo" + galacticCalculator.convertAgeToSeconds(birth));
  });
}

$(function() {
  processForm();
});
