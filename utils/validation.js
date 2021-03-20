 const validateId = (id) => {
  if(isNaN(id)) {
    return false;
  }
  return id;
}

const validateString = (str) => {
  if (typeof str === 'string' && str.length > 1) {
    return str;
  }
  return false;
}

const validatePrice = (price) => {
  if (isNaN(price)) {
    return false;
  }
  return price;
}

const validateNum = (num) => {
  if (isNaN(num)) {
    return false;
  }
  return num;
}



module.exports = {
  validateId: validateId,
  validateString: validateString,
  validatePrice: validatePrice,
  validateNum: validateNum
}