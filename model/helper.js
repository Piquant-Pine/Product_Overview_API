const determineMinAndMaxCount = (options) => {
  const {pageNum, countNum} = options;
  let min;
  let max;
  if (pageNum === 1) {
    min = 0;
    max = pageNum * countNum;
  }
  if (pageNum > 1) {
    min = pageNum * 5;
    max = countNum;
  }
  return {
    min,
    max
  }
}

module.exports = {
  determineMinAndMaxCount: determineMinAndMaxCount
}