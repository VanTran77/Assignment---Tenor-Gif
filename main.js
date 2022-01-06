$(document).ready( function(){

  function getPics(topic, number){
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.tenor.com/v1/search?q='+ topic +'&key=HOOVXWE8MQK0&limit=' + number);
      xhr.responseType = 'json';
      xhr.onreadystatechange = function(){
          if(xhr.readyState === 4 && xhr.status === 200){
                var picsArr = xhr.response.results;
                // console.log(picsArr);
                output(picsArr);
          }else if (XMLHttpRequest.status === 404){
            $('#loadPics').html(`<p class="warning_mgs">Please Try again with another topic!</p>`);
          }
      }
      xhr.send();
  }

function output(arr){
  let result = "";
  arr.forEach(picture => {
     result += `<img src=${picture.media[0].gif.url} class="image">`;
   })
  $('#loadPics').html(result);
}

$('#btnSearch').click(function(e){
  e.preventDefault();
    let myTopic = $('#inputTopic').val();
    let myNumber = $('#inputNumber').val();
    checkInput(myTopic, myNumber);
    $('#inputTopic').val('');
    $('#inputNumber').val('');
});

function checkInput(tp, num){
    if(num > 1 && num <= 100 && tp != ''){
        getPics(tp, num);
    }
    else if(num < 1 || num > 100){
      $('#loadPics').html(`<p class="warning_mgs">Please enter a number between 1 & 100</p>`);
    }
    else if(tp == ''){
      $('#loadPics').html(`<p class="warning_mgs">Please enter a topic</p>`);
    }
}

// keypress action
$('#inputTopic').keyup(function(e){
  var code = e.which;
  if (code == 13){ // 13 is enter keycode.
      e.preventDefault();
      let my_Topic = $('#inputTopic').val();
      let my_Number = $('#inputNumber').val();
      checkInput(my_Topic, my_Number);
    }
});
$('#inputNumber').keyup(function(e){
  var code = e.which;
  if (code == 13){ 
      e.preventDefault();
      let my_Topic = $('#inputTopic').val();
      let my_Number = $('#inputNumber').val();
      checkInput(my_Topic, my_Number);
    }
});

  // Topics selected
  $('#christmas').click(function(){
    getPics('christmas', 32);
  });
  $('#shopping').click(function(){
    getPics('shopping', 32);
  });
  $('#sport').click(function(){
    getPics('sport', 32);
  });
  $('#nature').click(function(){
    getPics('nature', 32);
  });
  $('#animal').click(function(){
    getPics('animal', 32);
  });
  $('#funny').click(function(){
    getPics('funny', 32);
  });
  $('#emotion').click(function(){
    getPics('emotion', 32);
  });
  $('#computer').click(function(){
    getPics('computer', 32);
  });
  $('#happy').click(function(){
    getPics('happy', 32);
  });
  $('#beach').click(function(){
    getPics('beach', 32);
  });
  window.onload = getPics('ocean background',12);
})