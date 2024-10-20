// using Map
const memoize = (fn) => {
  const map = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (map.has(key)) {
      return map.get(key);
    }
    const result = fn(...args);
    map.set(key, result);
    return result;
  };
};

// using key value
const memoize1 = (fn) => {
  const map = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in map) {
      return map[key];
    }
    const result = fn(...args);
    map[key] = result;
    return result;
  };
};

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5

console.log(callCount); // 1