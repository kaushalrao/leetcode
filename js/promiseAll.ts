/**
 * Executes an array of functions that return promises and resolves when all of them have resolved.
 *
 * @param {Array<Function>} functions - An array of functions, each returning a promise.
 * @returns {Promise<any[]>} A promise that resolves with an array of resolved values when all promises are fulfilled,
 *                            or rejects with the reason of the first promise that rejects.
 *
 * @example
 * const fn1 = () => Promise.resolve(1);
 * const fn2 = () => Promise.resolve(2);
 * const fn3 = () => Promise.resolve(3);
 *
 * promiseAll([fn1, fn2, fn3]).then((results) => {
 *   console.log(results); // [1, 2, 3]
 * }).catch((error) => {
 *   console.error(error);
 * });
 */
const promiseAll = (functions: Array<Function>) => {
  return new Promise((resolve, reject) => {
    const resolvedPromise = new Array(functions.length);
    let count = 0;
    functions.forEach((fn, index) => {
      fn()
        .then((response: any) => {
          count++;
          resolvedPromise[index] = response;
          if (count === functions.length) resolve(resolvedPromise);
        })
        .catch((error: Error) => {
          reject(error);
        });
    });
  });
};
