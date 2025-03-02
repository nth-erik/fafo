/**
 * Represents an immutable, fixed-length array-like structure.
 * 
 * The `StaticArray` class enforces immutability by preventing modifications to its elements
 * and length after creation. It only accepts primitive values or nested `StaticArray` instances 
 * (no functions or arbitrary objects allowed). The length property and all elements are defined 
 * as non-writable, non-configurable properties, and the entire instance is frozen.
 * 
 * @class
 * @example
 * const arr = new StaticArray(1, 2, 3);
 * console.log(arr.length); // 3
 * console.log(arr[0]); // 1
 * console.log([...arr]); // [1, 2, 3]
 * 
 * @throws {TypeError} If an argument is a function or a non-StaticArray object.
 * 
 * @param {...(number|string|boolean|StaticArray)} values - The elements of the StaticArray.
 * Primitive types and other StaticArray instances are allowed.
 * 
 * @property {number} length - The fixed length of the StaticArray (read-only).
 * 
 * @method includes
 * @description Checks if a value is present in the StaticArray.
 * @param {*} value - The value to search for.
 * @returns {boolean} True if the value is found, otherwise false.
 * 
 * @method indexOf
 * @description Returns the first index at which a given value can be found in the StaticArray.
 * @param {*} value - The value to locate in the array.
 * @returns {number} The index of the value, or -1 if not found.
 * 
 * @method toString
 * @description Returns a string representing the elements of the StaticArray.
 * @returns {string} A string representing the array.
 * 
 * @method [Symbol.iterator]
 * @description Enables iteration over the elements of the StaticArray using `for...of`.
 * @yields {*} The next value in the StaticArray.
 * 
 * @note The StaticArray instance and its contents are deeply immutable.
 */
class StaticArray {
  constructor() {
    Object.defineProperty(
      this,
      'length',
      {
        value: arguments.length,
        writable: false,
        enumerable: false,
        configurable: false,
      }
    );

    arguments.forEach((value, index) => {
      if (typeof value === 'object' && !(value instanceof StaticArray)) throw TypeError('StaticArray can only handle StaticArray sub-objects.');
      if (typeof value === 'function') throw TypeError('StaticArray cannot handle functions.');
      Object.defineProperty(this, index, {
        value,
        writable: false,
        enumerable: true,
        configurable: false,
      });
    });

    Object.freeze(this);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }

  includes = Array.prototype.includes;
  indexOf = Array.prototype.indexOf;
  toString = Array.prototype.toString;
}

export default StaticArray;
