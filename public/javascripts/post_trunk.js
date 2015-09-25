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
  year();
  $(".modelDiv, .colorDiv, .postDiv").hide();
  

});

function year() {
  $.each(obj, function(year) {
    $('#year').append($("<li " + "id='" + year + "' name='year' value='" + year + "'><span>" + year + "</span></li>"));
      $('#'+year).click(function() {
        $(".modelDiv").show();
        model(year);
        $(".yearDiv").empty();
      });
  });
}

function model(year) {
  $.each(obj[year], function(model) {   
    $('#model').append($("<li " + "id='" + model + "' name='model' value='" + model + "'><span>" + model + "</span></li>"));
      $('#'+model).click(function() {
        $(".colorDiv").show();
        color(year, model);
        $(".modelDiv").empty();
      });
  });
}

function color(year, model) {
  $.each(obj[year][model], function(color,code) {
    $('#color').append($("<li " + "id='" + rmPound(code) + "' name='color' value='" + color + "'><span>" + color + "</span></li>"));
      $(code).click(function() {
        $(".postDiv").show();
        post();
        $(".colorDiv").empty();
      });
  });
}


function post() {
  $(".postDiv").click(function() {
    $("#postForm").submit();
  });
}

function rmPound(colorCode) {        // this function just strips the `#` 
  return colorCode.replace('#','');  //from the color code so it can be a valid `id` value.

}



