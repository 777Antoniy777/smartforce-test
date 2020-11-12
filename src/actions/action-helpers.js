const updateItem = (array, payload) => {
  return [
    ...array.slice(0, payload.index),
    payload.item,
    ...array.slice(payload.index + 1)
  ];
};

const updateArray = (array, payload) => {
  const {array: newArray} = payload;

  if (payload.flag) {
    return [...newArray];
  }

  const {startIndex, endIndex, reposAmount} = payload;
  array.length = reposAmount;

  return [
    ...array.slice(0, startIndex),
    ...newArray,
    ...array.slice(endIndex)
  ];
};

const deleteItem = (array, payload) => {
  return array.filter((item, index) => index !== payload.index);
};

const addItem = (array, payload) => {
  return [...array.slice(0, payload.index), payload];
}

export {updateItem, deleteItem, addItem, updateArray};
