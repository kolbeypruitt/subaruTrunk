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
  years();
  $(".modelsDiv, .colorsDiv, .postDiv").hide();
  

});

function years() {
  $.each(obj, function(year) {
    $('#years').append($("<li " + "id='" + year + "'><span>" + year + "</span></li>"));
      $('#'+year).click(function() {
        $(".modelsDiv").show();
        models(year);
        $(".yearsDiv").empty();
      });
  });
}

function models(year) {
  $.each(obj[year], function(model) {   
    $('#models').append($("<li " + "id='" + model + "'><span>" + model + "</span></li>"));
      $('#'+model).click(function() {
        $(".colorsDiv").show();
        colors(year, model);
        $(".modelsDiv").empty();
      });
  });
}

function colors(year, model) {
  $.each(obj[year][model], function(color,code) {
    $('#colors').append($("<li " + "id='" + rmPound(code) + "'><span>" + color + "</span></li>"));
      $(code).click(function() {
        $(".postDiv").show();
        post();
        $(".colorsDiv").empty();
      });
  });
}

function post() {
  $('#post').append($("<li id='postGo'><span>Click Here</span></li>"));
  $("#postGo").click(function() {
    $("#postForm").submit(function(event) {
      alert( "Handler for .submit() called." );
      event.preventDefault();
    });
  });
}

function rmPound(colorCode) {
// this function just strips the `#` 
//from the color code so it can be a valid `id` value.
  return colorCode.replace('#','');
}


