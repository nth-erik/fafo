import checkByTypeName from './checkByTypeName.js';

/**
 * Ensures that the given value matches at least one of the specified type names.
 * - Differentiates `undefined` by data type.
 * - Distinguishes `null` and `NaN` using the virtual type names 'null' and 'nan', respectively.
 * - Useful for enforcing that a value matches one of multiple valid types by name.
 * - Use `getTypeName()` to accurately sample a type name for comparison.
 *
 * @param {*} value - The value to be type-checked.
 * @param {...string} typeNames - One or more valid type names to match against.
 * @returns {*} The original value if its type matches at least one of the specified type names.
 * @throws {TypeError} If the value's type does not match any of the specified type names or if any provided type name is invalid.
 */
const passByTypeName = (value, ...typeNames) => {
  const [valueType] = getTypeName(value);

  if (checkByTypeName(value, ...typeNames)) return value;
  else throw TypeError(valueType + ' is not of type ' + typeNames.toString());
};

export default passByTypeName;
