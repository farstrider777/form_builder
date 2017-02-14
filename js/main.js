
var muffin2;


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
//  $(".header").after(`<input class="input" placeholder="${data[1].label}"
//  type="text"><i class="fa ${data[1].icon}" aria-hidden="true"></i>`)

//  $(".header").after(`<input class="input" placeholder="${data[0].label}"
//  type="text"><i class="fa ${data[0].icon}" aria-hidden="true"></i>`)
  for(var count = data.length - 1; count >= 0; count--){
    $(".header").after(`<input class="input" placeholder="${data[count].label}"
    type="text"><i class="fa ${data[count].icon}" aria-hidden="true"></i>`)
  }
  //for(var count = data.; count )
//$(".header").after(`<input class="input" placeholder="${muffin2.responseJSON[0].label}"
///type="text"><i class="fa fa-user" aria-hidden="true"></i>`)
}

/*
getProper(printTextBox2);

function printTextBox2(){
$(".header").after(`<input class="input" placeholder="${muffin2.responseJSON[1].label}"
type="text"><i class="fa fa-user" aria-hidden="true"></i>`)
}
*/
//${muffin2.responseJSON[0].label}
