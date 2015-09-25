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
  prettyYears();
  // prettyModels();

});

// function prettyYears() {
//   $.each(obj, function(key) {   
//     $('#prettyYears').append($("<li><span>" + key + "</span></li>"))
//   });
// }

function prettyYears() {
  $.each(obj, function(year) {
    $('#prettyYears').append($("<li " + "id='" + year + "'><span>" + year + "</span></li>"));
      $('#'+year).click(function() {
      alert( "Handler for " + year + " was clicke called." );
    });
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

// prettyColors($("#year").val(),$("#model").val())
// $('#color').append($("<option></option>").attr("value",key).text(key));




