const allString = (arr = ['']) => !Array.isArray(arr) || arr.every((item) => typeof item === 'string');

const convertToUppercase = (arr = ['']) => new Promise((resolve, reject) => {
  if (!allString(arr)) {
    reject(new Error('Error: Not all items in the array are strings!'));
    return;
  }
  resolve(arr.map((str) => str.toUpperCase()));
});

export default convertToUppercase;
