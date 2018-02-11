import { GalacticCalculator }  from './../assets/js/galacticCalculator.js';

const processAge = age => {
  // age = moment.duration(galacticCalculator.convertAgeToSeconds(age), 'seconds').asYears();
  // age = now.diff(moment(age), 'years');

  // console.log(now.diff(moment(age), 'years'));
  console.log(age % 1);
  // switch(age) {
  //   case ((age % 1) > 0.2):
  //     $('#header').html(`Happy belated ${age.humanize()} birthday!`);
  //     break;
  //   case ((age % 1) > 0.5):
  //     $('#header').html(`${age}, slowly but surely marching on to ${age.humanize() + 1}`);
  //     break;
  //   // default:
  //   //   console.log('lol');
  //   //   break;
  // }
};


let processForm = () => {
  const form = document.getElementById('galacticForm');
  const now = moment();
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let name = $('#name').val();
    const birth = $('#dob').val();
    const galacticCalculator = new GalacticCalculator(birth);

    $('#header').html(`To infinity & yatta yatta yatta...`);

    $('#calculation').removeClass('hidden');
    $('#galacticFormCard').addClass('hidden');

    $('#userName').html(name);
    $('#earthAge').html(now.diff(moment(birth), 'years'));
    $('#mercuryAge').html(galacticCalculator.solarAge('mercury'));
    $('#venusAge').html(galacticCalculator.solarAge('venus'));
    $('#marsAge').html(galacticCalculator.solarAge('mars'));
    $('#jupiterAge').html(galacticCalculator.solarAge('jupiter'));
    // $('#calculation').append("yo" + galacticCalculator.convertAgeToSeconds(birth));
  });
};

$(function() {
  processForm();
});
