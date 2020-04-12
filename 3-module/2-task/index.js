/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];
  arr.forEach((vl, i) => {
    if (a >= vl || b >= vl) {
      newArr.push(vl);
    }
  });
  return newArr;
}
