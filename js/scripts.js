// Business logic

var pingPong = function(num) {

  var array1 = [];

  for (var i = 1; i <= num; i++) {

    if (i % 15 === 0) {
      array1[i] = "pingpong";
      array1.push[i];
      } else if (i % 5 === 0) {
          array1[i] = "pong";
          array1.push[i];
      } else if (i % 3 === 0) {
          array1[i] = "ping";
          array1.push[i];
      } else {
          array1.push(i);
      }
  };
  return array1;
};

// Interface Logic

$(document).ready(function(event) {
    $("form#pingPong").submit(function(event){

      var num = parseInt($("input#message1").val());
      var result = pingPong(num);

      if (num <= 0 ) {
   		alert("Please enter a positive number");
     	} else {
     		result.forEach(function(listItem) {
     			$("ul#list").append("<li>" + listItem + "</li>");
          $("#result").show();
     		});
      };

  event.preventDefault();

});
});
