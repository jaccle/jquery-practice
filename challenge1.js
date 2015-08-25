$(function () {
	console.log("JS connected");
   $("form").submit(changeColor);
 
 function changeColor(e) {
 	e.preventDefault();
      $('tr:even td').css('background-color', $('#color').val());
   }
});
// $(function() {
//   $("form").submit(changeColor);

//   function changeColor(e) {
//     e.preventDefault();
//     $("tbody tr:odd").css("background-color", $("#colorValue").val());

//   }



// });