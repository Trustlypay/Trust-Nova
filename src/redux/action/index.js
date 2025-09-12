// For Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item to Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

// For Clear Items in Cart
export const clearProcuts = () => {
  return {
    type: "CLEAR",
  };
};
