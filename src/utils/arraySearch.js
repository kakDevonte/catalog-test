export const arraySearch = (arr, key, str) => {
  return arr.filter((item) => {
    return item[key].toLowerCase().indexOf(str) >= 0;
  });
};
