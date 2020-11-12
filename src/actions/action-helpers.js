const updateItem = (array, payload) => {
  return [
    ...array.slice(0, payload.index),
    payload.item,
    ...array.slice(payload.index + 1)
  ];
};

const updateArray = (array, payload) => {
  array.length = 40;
  const {array: newArray, startIndex, endIndex} = payload;

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

const changeArrayLength = (array, payload) => {
  array.length = payload;

  return [
    ...array.slice()
  ]
};

export {updateItem, deleteItem, addItem, updateArray, changeArrayLength};
