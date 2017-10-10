// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //1. return obj.toString() 
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString()
  } else if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return("\"" + obj + "\"");
  } else if (Array.isArray(obj)){
    // if empty 
    if (obj.length === 0) {
      return '[]';
    } else if(obj.length === 1){
      return '[' + obj + ']';
    }


 // else {
 //      var stringified = [];
    
 //      for (var i = 0; i < obj.length; i++) { 
 //        stringified.push(stringifyJSON(obj[i]));

 //      }
 //      return stringified;
 //    }
 //  return("[" + obj + "]");
 //    //if theres something in the arr

  }

};


// var stringifiableObjects = [
//   9,
//   null,
//   true,
//   false,
//   'Hello world',
//   [],
//   [8],
//   ['hi'],
//   [8, 'hi'],
//   [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
//   [8, [[], 3, 4]],
//   [[[['foo']]]],
//   {},
//   {'a': 'apple'},
//   {'foo': true, 'bar': false, 'baz': null},
//   {'boolean, true': true, 'boolean, false': false, 'null': null },
//   // basic nesting
//   {'a': {'b': 'c'}},
//   {'a': ['b', 'c']},
//   [{'a': 'b'}, {'c': 'd'}],
//   {'a': [], 'c': {}, 'b': true}
// ];