
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }

  return matrix.reduce((array, item, index) => {
    if (index % 2 !== 0) {
      return array.concat(item.sort().reverse());
    } else {
      return array.concat(item);
    }
  },[]);
};
