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
      $(".header").after(`<input type="${data[count].type}" placeholder="${data[count].label}..."
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i><select>`)
      for(var i = 0; i < data[count].options.length; i++){
       $("select").append(`<option value="${data[count].options[i].label}">${data[count].options[i].label}</option>`)
      }
    }
    //else if(1 = 0){}

    else{
      $(".header").after(`<div class="i-container"><input type="${data[count].type}" placeholder="${data[count].label}"
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i></div>`);
    }
  }
}
