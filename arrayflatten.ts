// any array can be any size, e.g.:

// [[1, 2, 3, 4, 5], [1], [107, 23], [23]]
const arr1 = [[1, 2, 3, 4, 5, 6], [1], [107, 23], [23]];

function flatten2DArray(array) {
  let sum = 0;
  // return the sum of all values in the array
  array.forEach((nestedArr) => {
    nestedArr.forEach((val) => {
      sum += val;
    });
  });
  return sum;
}

const infinite = [1, 2, 3, 4, [4, 5, [6, 7, [8, 9], 10, 10], 12, [1, 2, 3]]];

function flattenInfiniteArray(array) {
  // check each position
  // if an arr, foreach the position
  // if not an arr, add it to the sum
  let sum = 0;
  array.forEach((element) => {
    const nestFurther = (x) => {
      x.forEach((element) => {
        if (typeof element !== "number") {
          nestFurther(element);
          //   console.log("arr");
        } else {
          sum += element;
        }
      });
    };

    // element could be num or arr
    if (typeof element !== "number") {
      nestFurther(element);
      //   console.log("arr");
    } else {
      sum += element;
    }
  });
  return sum;
}

function flattenInfiniteArrayRecursively(array) {
  const firstelement = array[0];
  if (firstelement === undefined) return 0;
  if (typeof firstelement == "number")
    return firstelement + flattenInfiniteArrayRecursively(array.slice(1));

  return (
    flattenInfiniteArrayRecursively(firstelement) +
    flattenInfiniteArrayRecursively(array.slice(1))
  );
}

console.log(flattenInfiniteArray(infinite));
console.log(flattenInfiniteArrayRecursively(infinite));
// console.log(typeof 1);

console.log([1, 2, 3, 4].slice(1));
console.log([][0]);
