
$(document).ready(function(){

$("#model").prop('disabled', true);  // find id='model' & create disabled property with value of true.
$( "#year" ).change(function() {  // when value of elem with id='year' is changed....
  $("#model").prop('disabled', false);  // change model property disabled to false.
});
$("#model").prop('disabled', true);  // find id='model' & create disabled property with value of true.
$( "#year" ).change(function() {  // when value of elem with id='year' is changed....
  $("#model").prop('disabled', false);  // change model property disabled to false.
});

// $('#tester').html(mywrx)






});


var obj = 
{
  "2014": {
    "sti":{
      "color": [
        {
          "lngColor":"Crystal Black Silica","code": "#080808"
        },
        {
          "lngColor":"Satin White Pearl","code": "#EEECE9"
        },
        {
          "lngColor":"Dark Gray Metallic","code": "#1C1F23"
        },
        {
          "lngColor":"Plasma Blue Silica","code": "#0E162E"
        },
        {
          "lngColor":"Ice Silver Metallic","code": "#BCC0C4"
        },
        {
          "lngColor":"Lightning Red","code": "#A72A36"
        },
        {
          "lngColor":"World Rally Blue Pearl","code": "#0E4B82"
        }
      ]
    }
  },
  "2015": {
    "wrx":{
      "color": [
        {
          "lngColor":"Crystal Black Silica","code": "#080808"
        },
        {
          "lngColor":"Crystal White Pearl","code": "#EEECE9"
        },
        {
          "lngColor":"Dark Gray Metallic","code": "#1C1F23"
        },
        {
          "lngColor":"Lapis Blue Pearl","code": "#2C4C6F"
        },
        {
          "lngColor":"Ice Silver Metallic","code": "#BCC0C4"
        },
        {
          "lngColor":"Lightning Red","code": "#A72A36"
        },
        {
          "lngColor":"World Rally Blue Pearl","code": "#0E4B82"
        }
      ]
    },
    "sti":{
      "color": [
        {
          "lngColor":"Crystal Black Silica","code": "#080808"
        },
        {
          "lngColor":"Crystal White Pearl","code": "#EEECE9"
        },
        {
          "lngColor":"Dark Gray Metallic","code": "#1C1F23"
        },
        {
          "lngColor":"Lapis Blue Pearl","code": "#2C4C6F"
        },
        {
          "lngColor":"Ice Silver Metallic","code": "#BCC0C4"
        },
        {
          "lngColor":"Lightning Red","code": "#A72A36"
        },
        {
          "lngColor":"World Rally Blue Pearl","code": "#0E4B82"
        }
      ]
    }
  },
  "2016": {
    "wrx":{
      "color": [
        {
          "lngColor":"Crystal Black Silica","code": "#080808"
        },
        {
          "lngColor":"Crystal White Pearl","code": "#EEECE9"
        },
        {
          "lngColor":"Dark Gray Metallic","code": "#1C1F23"
        },
        {
          "lngColor":"Galaxy Blue Pearl","code": "#182D58"
        },
        {
          "lngColor":"Ice Silver Metallic","code": "#BCC0C4"
        },
        {
          "lngColor":"Lightning Red","code": "#A72A36"
        },
        {
          "lngColor":"World Rally Blue Pearl","code": "#0E4B82"
        }
      ]
    },
    "sti":{
      "color": [
        {
          "lngColor":"Crystal Black Silica","code": "#080808"
        },
        {
          "lngColor":"Crystal White Pearl","code": "#EEECE9"
        },
        {
          "lngColor":"Dark Gray Metallic","code": "#1C1F23"
        },
        {
          "lngColor":"Lapis Blue Pearl","code": "#2C4C6F"
        },
        {
          "lngColor":"Ice Silver Metallic","code": "#BCC0C4"
        },
        {
          "lngColor":"Lightning Red","code": "#A72A36"
        },
        {
          "lngColor":"World Rally Blue Pearl","code": "#0E4B82"
        }
      ]
    }
  }
}
// var mywrx = obj[2015].wrx[0]
// var startYear = obj[0];
// var endYear = obj[obj.length];

console.log(obj[2015].wrx.color[0].lngColor)

function getcolors(year,model) {
  var out = [];
  for (var i = 0; i < obj[year][model].color.length; i++) {
    out.push(obj[year][model].color[i].lngColor);
  }
  console.log(out)
}
getcolors(2015,'wrx');



// function getcolors(year,model) {
//   var out = [];
//   for (var prop in obj[year].model.color[prop]) {
//     console.log("obj." + prop + " = " + obj[year].model.color[prop]);
//   }
//   return out;
// }
