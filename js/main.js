function getProper (callback) {
  muffin2 = $.ajax({
    url: `http://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
  });
}

getProper(printTextBox);

function printTextBox(data, status, xhrObject){
  console.log(xhrObject);
  console.log(status);
  console.log(data[0].type);
  for(var count = data.length - 1; count >= 0; count--){
    //debugger
    if(count === 4){
      $(".header").after(`<input class="input" placeholder="${data[count].label}"
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i><select class="select">`)
      for(var i = 0; i < data[4].options.length; i++){
       $("select").append(`<option value="${data[4].options[i].label}">${data[4].options[i].label}</option>`)
      }
    }else{
      $(".header").after(`<div class="i-container"><input class="input" placeholder="${data[count].label}"
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i></div>`);
    }
  }
}
