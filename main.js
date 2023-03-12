var a = prompt("Enter any string or number")
function reverseString(str) {
  var str = str.toString()
    if(/\d/.test(str)) {
     var result= str.split("").reverse().join("");
     // var result = result.replace(/[^0-9]/g, "");
    if (!isNaN(+result)) return +result
      return "enter correct format"
    }
    else{
      var result= str.split("").reverse().join("");
      return result
    }
  }
  console. log(reverseString(a))