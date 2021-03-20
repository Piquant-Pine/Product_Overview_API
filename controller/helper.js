const displayProductCount = (page, count) => {
  let pageNum = 1;
  let countNum = 5;

  if(verifyPageNum(page)) {
    pageNum = Number(page);
  }
  if(verifyCount(count)) {
    countNum = Number(count);
  }
  return {
    pageNum,
    countNum
  }
}

const verifyPageNum = (pageNum) => {
  if(pageNum === undefined) {
    return false;
  }
  if (isNaN(pageNum)) {
    return false;
  }
  if (!isNaN(pageNum) && Number(pageNum) >=1) {
    return true
  }
  return false;
}

const verifyCount = (count) => {
  if(count === undefined) {
    return false;
  }
  if (isNaN(count)) {
    return false;
  }
  if (!isNaN(count) && Number(count) >=1) {
    return true
  }
  return false;
}


module.exports = {
  displayProductCount: displayProductCount
}

