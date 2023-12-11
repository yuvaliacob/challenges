console.clear();

let data = [1, 2, 3];

if (Array.isArray(data)) {
  console.log("Array...");
} else {
  switch (typeof data) {
    case "undefined":
      console.log("Undefined!");
      break;
    case data === null:
      console.log("Null!");
      break;
    case "number":
      console.log("Number!");
      break;
    case "NaN":
      console.log("Not a number!");
      break;
    case "string":
      console.log("String!");
      break;
    case "boolean":
      console.log("Boolean!");
      break;
    case "bigint":
      console.log("BigInt!");
      break;
    case "function":
      console.log("Function!");
      break;
    case "object":
      console.log("Object!");
      break;
    //   case Array.isArray(data):
    //     console.log("Array!");
    //     break;
    default:
      console.log("I have no idea!");
  }
}

// case ["afshin", "saeed", "larry"].includes(varName):

// Array.isArray(data)
// case ["afshin", "saeed", "larry"].includes(varName) :
//     alert('Hey');
//     break;
