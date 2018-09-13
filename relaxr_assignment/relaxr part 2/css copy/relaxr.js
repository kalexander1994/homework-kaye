$(document).ready (function () {

	$("form").submit(function (e) {

		e.preventDefault() });
  
$(".readmore").click(function () {
    $(".readmore").hide();
    $("#show-this-on-click").slideDown();
  $(".readless").show();
  event.preventDefault(); });


$(".readless").click(function(){
  $(".readmore").show();
  $("#show-this-on-click").slideUp();
  $(".readless").hide();
    event.preventDefault();
});




$(".learnmore").click(function(){
  event.preventDefault();
  $(".learnmore").slideDown();
  $(".learnmore").hide();
  $("#learnmoretext").show();
  
  
  
});




});