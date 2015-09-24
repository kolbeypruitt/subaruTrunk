
$(document).ready(function(){
  $("#model").prop('disabled', true);  // find id='model' & create disabled property with value of true.
  $( "#year" ).change(function() {  // when value of elem with id='year' is changed....
    $("#model").prop('disabled', false);  // change model property disabled to false.
  });

  $("#color").prop('disabled', true);  // find id='color' & create disabled property with value of true.
  $( "#model" ).change(function() {  // when value of elem with id='year' is changed....
    $("#color").prop('disabled', false);  // change color property disabled to false.
    console.log($("#model").val())
    genColors($("#year").val(),$("#model").val())
  });

  $("#trunkStyle").prop('disabled', true);  // find id='trunkStyle' & create disabled property with value of true.
  $( "#color" ).change(function() {  // when value of elem with id='color' is changed....
    $("#trunkStyle").prop('disabled', false);  // change trunkStyle property disabled to false.
  });


  
});

var obj = 
{
  "2014": {
    "wrx":{
      "Crystal Black Silica":"#080808",
      "Satin White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Plasma Blue Silica":"#0E162E",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    },
    "sti":{
      "Crystal Black Silica":"#080808",
      "Satin White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Plasma Blue Silica":"#0E162E",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    }
  },
  "2015": {
    "wrx":{
      "Crystal Black Silica":"#080808",
      "Crystal White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Lapis Blue Pearl":"#2C4C6F",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    },
    "sti":{
      "Crystal Black Silica":"#080808",
      "Crystal White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Lapis Blue Pearl":"#2C4C6F",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    }
  },
  "2016":{
    "wrx":{
      "Crystal Black Silica":"#080808",
      "Crystal White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Galaxy Blue Pearl":"#182D58",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    },
    "sti":{
      "Crystal Black Silica":"#080808",
      "Crystal White Pearl":"#EEECE9",
      "Dark Gray Metallic":"#1C1F23",
      "Lapis Blue Pearl":"#2C4C6F",
      "Ice Silver Metallic":"#BCC0C4",
      "Lightning Red":"#A72A36",
      "World Rally Blue Pearl":"#0E4B82"
    }
  }
}

function genColors (year) {
  var selectValues = { "1": "test","2": "test 2" };
  $.each(obj[2015].wrx, function(key, value) {   
     $('#color')
         .append($("<option></option>")
         .attr("value",key)
         .text(key)); 
});
}



