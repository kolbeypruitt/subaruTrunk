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
        prettyModels(year);
        alert( "Handler for " + year + " was clicke called." );
      });
  });
}

function prettyModels(year) {
  $.each(obj[year], function(model) {   
    $('#prettyModels').append($("<li " + "id='" + model + "'><span>" + model + "</span></li>"));
      $('#'+model).click(function() {
        prettyColors(year, model);
        alert( "Handler for " + model + " was clicke called." );
      });
  });
}

function prettyColors(year, model) {
  $.each(obj[year][model], function(color,code) {
    $('#prettyColors').append($("<li " + "id='" + stripPound(code) + "'><span>" + color + "</span></li>"));
      $(code).click(function() {
        alert( "Handler for " + color + " was clicke called." );
      });
  });
}

function stripPound(colorCode) {
// this function just strips the `#` 
//from the color code so it can be a valid `id` value.
  return colorCode.replace('#','');
}
// prettyColors($("#year").val(),$("#model").val())
// $('#color').append($("<option></option>").attr("value",key).text(key));




