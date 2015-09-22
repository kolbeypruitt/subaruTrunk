$(document).ready(function(){

$("#model").prop('disabled', true);  // find id='model' & create disabled property with value of true.
$( "#year" ).change(function() {  // when value of elem with id='year' is changed....
  $("#model").prop('disabled', false);  // change model property disabled to false.
});
  





});