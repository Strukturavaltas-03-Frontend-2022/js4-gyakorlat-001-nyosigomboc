const allString = (arr = ['']) => !Array.isArray(arr) || arr.every((item) => typeof item === 'string');

const sortStrings = (arr = ['']) => new Promise((resolve, reject) => {
  if (!allString(arr)) {
    reject(new Error('Error: Not all items in the array are strings!'));
    return;
  }
  try {
    resolve(arr.sort());
  } catch (err) {
    reject(new Error('Error: Something went wrong with sorting words!'));
  }
});

export default sortStrings;
