var arrayIndexOfAll = function(arr, element) {
    const indeces = [];
    arr.forEach((value,index) => {
      if (value === element) {indeces.push(index)}
    });
    return indeces;
  }
  
  var tableRemoveAll = function(table, element) {
    const coordsArr = [];
    table.forEach((row, index) => {
      const coords = arrayIndexOfAll(row, element).map(v => ({"x": v, "y": index}));
      coordsArr.push(...coords);
    })
    coordsArr.forEach(coords => table[coords.y].splice(coords.x, 1));
  }
  
var recoverSecret = function(triplets) {
    const chars = [];

    while (triplets) {
        // find and push earliest character
        for (let i = 0; i < triplets.length; i++) {
        const triplet = triplets[i];
        if (triplet.length === 0) {
            triplets.splice(i, 1);
        }
        if (i === 0) {
            chars.push(triplet[0]);
        }
        if (triplets.indexOf(chars[chars.length - 1]) > 0 ) {
            chars[chars.length - 1] = triplet[0];
        }
        }
        // remove all instances of said earliest character
        tableRemoveAll(triplets, chars[chars.length - 1]);
        // repeat till triplets array is empty
    }

    return chars.join("");
}

const secret1 = "whatisup"
const triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(secret1);
console.log(recoverSecret(triplets1));