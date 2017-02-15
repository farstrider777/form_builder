function getProper (callback) {
  muffin2 = $.ajax({
    url: `https://json-data.herokuapp.com/forms`,
    dataType: "json",
    success: callback
  });
}

getProper(printTextBox);

function printTextBox(data, status, xhrObject){
  for(var count = data.length - 1; count >= 0; count--){
    if(count === 4){
      $(".header").after(`<input type="${data[count].type}" placeholder="${data[count].label}..."
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i><select>`)
      for(var i = 0; i < data[count].options.length; i++){
       $("select").append(`<option value="${data[count].options[i].label}">${data[count].options[i].label}</option>`)
      }
    }
    else{
      $(".header").after(`<div class="i-container"><input type="${data[count].type}" placeholder="${data[count].label}"
      type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i></div>`);
    }
  }
}
