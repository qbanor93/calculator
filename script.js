$(document).ready(function() {
  let calculation;
  let selectValue = '';

  document.onkeydown = function (event) {
    let keyDetect = event.key;

    if(isNaN(keyDetect) == false || keyDetect == '+' || keyDetect == '-' || keyDetect == '/' || keyDetect == '*') {
      selectValue += keyDetect;
      $('#displayer').attr('value', selectValue);
    }

    if(keyDetect == 'Delete') {
      let strDel = selectValue;
      selectValue = strDel.substr(0, (strDel.length - 1));

      if(selectValue.length != 0) {
        $('#displayer').attr('value', selectValue);
      } else {
        $('#displayer').attr('value', 0);
      }
    }

    if(keyDetect == 'Enter') {
      let enterOperation = eval(selectValue);
      selectValue = enterOperation;
      $('#resulter').attr('value', enterOperation);
    }

    if(keyDetect == 'c' || keyDetect == 'C') {
      selectValue = '';
      $('#displayer').attr('value', 0);
      $('#resulter').attr('value', '');
    }
  }

  $('.key').on('click', function(){
    selectValue += $(this).html();

    let myInputText = $('#displayer').attr('value');
    myInputText = selectValue;
    $('#displayer').attr('value', selectValue);
  });

  $('.square').on('click', function(){
    let squarification = Math.sqrt(selectValue);
    $('#resulter').attr('value', squarification);
  });

  $('.cubic').on('click', function(){
    let cubification = Math.cbrt(selectValue);
    $('#resulter').attr('value', cubification);
  });

  $('.mult3').on('click', function(){
    let mult3fication = eval(selectValue) * 3;
    $('#resulter').attr('value', mult3fication);
  });

  $('.mult2').on('click', function(){
    let mult2fication = eval(selectValue) * 2;
    $('#resulter').attr('value', mult2fication);
  });

  $('.delete').on('click', function(){
    let str = selectValue;
    selectValue = str.substr(0, (str.length - 1));

    if(selectValue.length != 0) {
       $('#displayer').attr('value', selectValue);
    } else {
       $('#displayer').attr('value', 0);
    }
  });

  $('.clear').on('click', function(){
    selectValue = '';
    $('#displayer').attr('value', 0);
    $('#resulter').attr('value', '');
  });

  $('.equal').on('click', function(){
    let operation = eval(selectValue);
    selectValue = operation;
    $('#resulter').attr('value', operation);
  });
});
