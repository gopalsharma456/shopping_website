const productList = (payload) => {
  return {
    type: "CALL_PRODUCT_LIST",
    payload : payload
  }
}

const sagaProductList = (payload) => {
  return {
    type: "SAGA_CALL_PRODUCT_LIST",
    payload : payload
  }
}

const searchProducts = (payload) =>{
  return{
    type: 'SEARCH_PRODUCT_LIST',
    payload
  }
}

const sagaSearchProduct = (payload) => {
  return {
    type: 'SAGA_SEARCH_PRODUCT_LIST',
    payload
  }
}

export {productList, sagaProductList, searchProducts, sagaSearchProduct}