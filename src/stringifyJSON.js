// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //1. return obj.toString() 
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString()
  } else if (obj === null) {
    return 'null';
  } 

  


};
