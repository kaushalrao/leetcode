/**
 * Creates a debounced version of a function that delays its execution until after a specified wait time has elapsed 
 * since the last time the debounced function was invoked.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} [t=500] - The number of milliseconds to delay; defaults to 500ms.
 * @returns {Function} A debounced version of the input function.
 *
 * @example
 * const log = () => console.log('Executed!');
 * const debouncedLog = debounce(log, 300);
 *
 * window.addEventListener('resize', debouncedLog);
 * // The log function will only be executed once after the resize event has stopped for 300 milliseconds.
 */
const debounce = (fn, t = 500) => {
  let timer: number | undefined;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};
