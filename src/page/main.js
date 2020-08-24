import "../blocks/gis-win/gis-win.scss";
import "../scss/global.scss";
import "../scss/slick.scss";
import "../scss/ion.rangeSlider.scss";
import "../blocks/header/header.scss";
import "../blocks/first-block/first-block.scss";
import "./landing.scss";
import "../blocks/form-block/form-block.scss";
import "../blocks/second-block/second-block.scss";
import "../blocks/services-list/services-list.scss";
import "../fonts/GothamPro/styles.scss";
import "../fonts/GothamPro-Bold/styles.scss";
import "../fonts/GothamPro-Light/styles.scss";
import "../blocks/form-vertical/form-vertical.scss";
import "../blocks/calculator/calculator.scss";
import "../blocks/third-block/third-block.scss";
import "../blocks/expensess/expensess.scss";
import "../blocks/summary/summary.scss";
import "../blocks/fifth-block/fifth-block.scss";
import "../blocks/sixth-block/sixth-block.scss";
import "../blocks/fourth-block/fourth-block.scss";
import "../blocks/eighth-block/eighth-block.scss";
import "../blocks/seventh-block/seventh-block.scss";
import "../blocks/nineth-block/nineth-block.scss";
import "../blocks/tenth-block/tenth-block.scss";
import "../blocks/footer/footer.scss";
import "../js/slick.min";
import "../js/ion.rangeSlider.min";

let form  = document.querySelectorAll('.form');

for (let i = 0; i < form.length; i++) {
  let fields = form[i].querySelectorAll('.field');



  form[i].addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('ready');

    for (let i = 0; i < fields.length; i++) {
      fields[i].addEventListener('click', function () {
        for (let a = 0; a < fields.length; a++) {
          fields[a].classList.remove('empty');
        }
      });
      console.log(fields[i].value);
      if (!fields[i].value) {
        fields[i].classList.add('empty');
      }
    }
  })
}


let inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
  "mask": "+7 (999) 999-99-99",
  showMaskOnHover: false
}).mask(inputsTel);

$(document).ready(function(){
  $('.fifth-block__gallery').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  $(".slick-prev").append('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $(".slick-next").append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
});

$("#range-therapy").ionRangeSlider({
  min: 5,
  max: 15,
  from: 9,
  step: 1
});

$("#range-prosthesis").ionRangeSlider({
  min: 5,
  max: 15,
  from: 9,
  step: 1
});

$("#range-surgery").ionRangeSlider({
  min: 1,
  max: 10,
  from: 3,
  step: 1
});

$("#range-implant").ionRangeSlider({
  min: 1,
  max: 10,
  from: 3,
  step: 1
});

$("#range-therapy").on("change", function() {
  let $inp = $(this);

  let month = document.getElementsByClassName('month');
  let monthtext = document.getElementsByClassName('month-text');
  let year = document.getElementById('income-year');
  let gain = document.getElementsByClassName('gain');

  let input = document.getElementById('input-therapy');
  let value = $inp.data("from") * 3500 * 31 + "";
  value = value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  input.value = value + " ₽";

  let therapy = parseInt(document.getElementById('input-therapy').value.replace(/\s+/g, '').replace("₽", ""));
  let prosthesis =  parseInt(document.getElementById('input-prosthesis').value.replace(/\s+/g, '').replace("₽", ""));
  let surgery =  parseInt(document.getElementById('input-surgery').value.replace(/\s+/g, '').replace("₽", ""));
  let implant =  parseInt(document.getElementById('input-implant').value.replace(/\s+/g, '').replace("₽", ""));

  let sum = 1*(therapy + prosthesis + surgery + implant) + "";
  let totalGain = Math.ceil(1*(therapy + prosthesis + surgery + implant) / 1.8867) + "";
  let yearSum = totalGain * 12 + "";
  totalGain = totalGain.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  yearSum = yearSum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  gain[0].innerHTML = totalGain + " ₽";
  year.innerHTML = yearSum + " ₽";

  sum = sum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  month[0].innerHTML = sum + " ₽";
  monthtext[0].innerHTML = totalGain + " ₽ в месяц";
});

$("#range-prosthesis").on("change", function() {
  let $inp = $(this);

  let month = document.getElementsByClassName('month');
  let monthtext = document.getElementsByClassName('month-text');
  let year = document.getElementById('income-year');
  let gain = document.getElementsByClassName('gain');

  let input = document.getElementById('input-prosthesis');
  let value = $inp.data("from") * 5000 * 31 + "";
  value = value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  input.value = value + " ₽";

  let therapy = parseInt(document.getElementById('input-therapy').value.replace(/\s+/g, '').replace("₽", ""));
  let prosthesis =  parseInt(document.getElementById('input-prosthesis').value.replace(/\s+/g, '').replace("₽", ""));
  let surgery =  parseInt(document.getElementById('input-surgery').value.replace(/\s+/g, '').replace("₽", ""));
  let implant =  parseInt(document.getElementById('input-implant').value.replace(/\s+/g, '').replace("₽", ""));

  let sum = 1*(therapy + prosthesis + surgery + implant) + "";
  let totalGain = Math.ceil(1*(therapy + prosthesis + surgery + implant) / 1.8867) + "";
  let yearSum = totalGain * 12 + "";
  totalGain = totalGain.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  yearSum = yearSum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  gain[0].innerHTML = totalGain + " ₽";
  year.innerHTML = yearSum + " ₽";

  sum = sum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  month[0].innerHTML = sum + " ₽";
  monthtext[0].innerHTML = totalGain + " ₽ в месяц";
});

$("#range-surgery").on("change", function() {
  let $inp = $(this);

  let month = document.getElementsByClassName('month');
  let monthtext = document.getElementsByClassName('month-text');
  let year = document.getElementById('income-year');
  let gain = document.getElementsByClassName('gain');

  let input = document.getElementById('input-surgery');
  let value = $inp.data("from") * 3000 * 31 + "";
  value = value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  input.value = value + " ₽";

  let therapy = parseInt(document.getElementById('input-therapy').value.replace(/\s+/g, '').replace("₽", ""));
  let prosthesis =  parseInt(document.getElementById('input-prosthesis').value.replace(/\s+/g, '').replace("₽", ""));
  let surgery =  parseInt(document.getElementById('input-surgery').value.replace(/\s+/g, '').replace("₽", ""));
  let implant =  parseInt(document.getElementById('input-implant').value.replace(/\s+/g, '').replace("₽", ""));

  let sum = 1*(therapy + prosthesis + surgery + implant) + "";
  let totalGain = Math.ceil(1*(therapy + prosthesis + surgery + implant) / 1.8867) + "";
  let yearSum = totalGain * 12 + "";
  totalGain = totalGain.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  yearSum = yearSum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  gain[0].innerHTML = totalGain + " ₽";
  year.innerHTML = yearSum + " ₽";

  sum = sum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  month[0].innerHTML = sum + " ₽";
  monthtext[0].innerHTML = totalGain + " ₽ в месяц";
});

$("#range-implant").on("change", function() {
  let $inp = $(this);

  let month = document.getElementsByClassName('month');
  let monthtext = document.getElementsByClassName('month-text');
  let year = document.getElementById('income-year');
  let gain = document.getElementsByClassName('gain');

  let input = document.getElementById('input-implant');
  let value = $inp.data("from") * 30000 * 31 + "";
  value = value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  input.value = value + " ₽";

  let therapy = parseInt(document.getElementById('input-therapy').value.replace(/\s+/g, '').replace("₽", ""));
  let prosthesis =  parseInt(document.getElementById('input-prosthesis').value.replace(/\s+/g, '').replace("₽", ""));
  let surgery =  parseInt(document.getElementById('input-surgery').value.replace(/\s+/g, '').replace("₽", ""));
  let implant =  parseInt(document.getElementById('input-implant').value.replace(/\s+/g, '').replace("₽", ""));

  let sum = 1*(therapy + prosthesis + surgery + implant) + "";
  let totalGain = Math.ceil(1*(therapy + prosthesis + surgery + implant) / 1.8867) + "";
  let yearSum = totalGain * 12 + "";
  totalGain = totalGain.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
  yearSum = yearSum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  gain[0].innerHTML = totalGain + " ₽";
  year.innerHTML = yearSum + " ₽";

  sum = sum.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  month[0].innerHTML = sum + " ₽";
  monthtext[0].innerHTML = totalGain + " ₽ в месяц";
});
