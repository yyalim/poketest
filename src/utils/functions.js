// eslint-disable-next-line import/prefer-default-export
export function arrayToObject(array, key) {
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, {});
}
