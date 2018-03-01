import { GalacticCalculator }  from './../assets/js/galacticCalculator.js';

let processForm = () => {
  const form = document.getElementById('galacticForm');
  const now = moment();

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    let name = $('#grid-name').val();
    let birth = $('#grid-dob').val();
    let country = $('#countrySelect').val();

    let galacticCalculator = new GalacticCalculator(birth);

    $('#header').html(`To infinity & yatta yatta yatta...`);
    $('#galacticResult').removeClass('hidden');
    $('#galacticForm').addClass('hidden');
    $('#userName').html(name);
    $('#earthAge').html(now.diff(moment(birth), 'years'));
    $('#mercuryAge').html(galacticCalculator.solarAge('ME'));
    $('#venusAge').html(galacticCalculator.solarAge('VE'));
    $('#marsAge').html(galacticCalculator.solarAge('MA'));
    $('#jupiterAge').html(galacticCalculator.solarAge('JU'));

    $('#meExpDate').html(galacticCalculator.lifeExpectancy('ME', country));
    $('#veExpDate').html(galacticCalculator.lifeExpectancy('VE', country));
    $('#maExpDate').html(galacticCalculator.lifeExpectancy('MA', country));
    $('#juExpDate').html(galacticCalculator.lifeExpectancy('JU', country));
  });
};

$(function() {
  processForm();
});
