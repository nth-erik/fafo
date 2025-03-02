import assertAnyTypeName from "./assertAnyTypeName.js";

/**
 * Checks if the type of the given value matches any of the specified type names.
 * - Differentiates `undefined` by data type.
 * - Distinguishes `null` and `NaN` using the virtual type names 'null' and 'nan', respectively.
 * - Use this function when checking for specific types by their names.
 * - Use `getTypeName()` to accurately sample a type name for comparison.
 *
 * @param {*} value - The value whose type is to be checked.
 * @param {...string} typeNames - The expected type names. The function returns true if the value's type matches any of these names.
 * @returns {boolean} True if the value's type matches any of the specified names, false otherwise.
 * @throws {TypeError} Throws a TypeError if any of the provided type names is invalid.
 */
const checkByTypeName = (value, ...typeNames) => {
  const valueTypeName = typeof value;

  assertAnyTypeName(...typeNames);

  if (Number.isNaN(value)) valueTypeName = 'nan';
  else if (value === null) valueTypeName = 'null';

  return typeNames.includes(valueTypeName);
};

export default checkByTypeName;
