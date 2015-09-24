

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

$(document).ready(function(){
  // prettyYears();
  // prettyModels();
  $("#model").prop('disabled', true);  // find id='model' & create disabled property with value of true.
  $( "#year" ).change(function() {  // when value of elem with id='year' is changed....
    $("#model").prop('disabled', false);  // change model property disabled to false.
  });

  $("#color").prop('disabled', true);  // find id='color' & create disabled property with value of true.
  $( "#model" ).change(function() {  // when value of elem with id='year' is changed....
    $("#color").prop('disabled', false);  // change color property disabled to false.
    genColors($("#year").val(),$("#model").val())
    prettyColors($("#year").val(),$("#model").val())
  });

  $("#trunkStyle").prop('disabled', true);  // find id='trunkStyle' & create disabled property with value of true.
  $( "#color" ).change(function() {  // when value of elem with id='color' is changed....
    $("#trunkStyle").prop('disabled', false);  // change trunkStyle property disabled to false.
  });

});


function genColors (year, model) {
  $.each(obj[year][model], function(key, value) {   
    $('#color').append($("<option>" + key + "</option>").attr('id',value))
  });
}
function prettyYears() {
  $.each(obj, function(key, value) {   
    $('#prettyYears').append($("<li><span>" + key + "</span></li>"))
  });
}

function prettyModels() {
  $.each(obj[year], function(key, value) {   
    $('#prettyModels').append($("<li><span>" + key + "</span></li>"))
  });
}

function prettyColors(year, model) {
  $.each(obj[year][model], function(key, value) {   
    $('#prettyColors').append($("<li><span>" + key + "</span></li>"))
  });
}


// $('#color').append($("<option></option>").attr("value",key).text(key));




