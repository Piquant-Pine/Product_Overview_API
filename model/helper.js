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

const destructureStyleObj = (queryResponse) => {
  let result = [];
  for (let i = 0; i <  queryResponse.length; i++) {
    const { style_id, name, sale_price, original_price, default_style, url, thumbnail_url, sku_ids, sizes, quantities} = queryResponse[i];
    let skuSkeleton = createSkuStructure(sku_ids, sizes, quantities);
    let photoSkeleton = createPhotoStructure(url, thumbnail_url)
    result.push(
      { style_id,
        name,
        sale_price,
        original_price,
        default_style,
        skus: {...skuSkeleton},
        photos: [...photoSkeleton]
      }
    )
  }
  return result;
}

const createPhotoStructure = (url, thumbnail_url) => {
  const urlArray = url.split(',');
  let urlDetailArr = [];
  for (let i = 0; i < urlArray.length; i++) {
    urlDetailArr.push({url: urlArray[i]});
  }

  const thumbnailUrlArray = thumbnail_url.split(',');
  let thumbnailUrlDetailArray = [];
  for (let i = 0; i < thumbnailUrlArray.length; i++) {
    thumbnailUrlDetailArray.push({thumbnail_url: thumbnailUrlArray[i]})
  }

  const photoArray = []
  for (let i = 0; i < urlArray.length; i++) {
    let photoData = {
      url: urlDetailArr[i].url,
      thumbnail_url: thumbnailUrlDetailArray[i].thumbnail_url
    }
    photoArray.push(photoData)  ;
  }

  return photoArray;
}

const createSkuStructure = (sku_ids, sizes, quantities) => {
  const sizeArray = sizes.split(',');
  let sizeDetailArr = [];
  for (let i = 0; i < sizeArray.length; i++) {
    sizeDetailArr.push({size: sizeArray[i]});
  }

  const quantitiesArray = quantities.split(',');
  let quantityDetailArr = [];
  for (let i = 0; i < quantitiesArray.length; i++) {
    quantityDetailArr.push({quantity: quantitiesArray[i]})
  }

  const skuIdArray = sku_ids.split(',');
  let skuIdDetailArr = [];
  for (let i = 0; i < skuIdArray.length; i++) {
    let skuObj = {
      [skuIdArray[i]]:
        {
           quantity: quantityDetailArr[i].quantity,
           size: sizeDetailArr[i].size
        }
    }
    skuIdDetailArr.push(skuObj)  ;
  }

  let skuObj = {};
  for (let i = 0; i < skuIdDetailArr.length; i++) {
     let entry = Object.entries(skuIdDetailArr[i]);
     skuObj[entry[0][0]] = entry[0][1];
  }
  return skuObj;
}

module.exports = {
  determineMinAndMaxCount: determineMinAndMaxCount,
  destructureStyleObj: destructureStyleObj
}