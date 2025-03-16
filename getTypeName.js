import getFunctionType from './getFunctionType.js';

/**
 * Returns the type names of the provided sample values.
 *
 * This function maps each input value to its corresponding type name as a string.
 * Special cases include:
 * - `NaN` is returned as `'nan'`.
 * - `null` is returned as `'null'` (instead of `'object'`).
 * For all other values, the result matches the output of the `typeof` operator.
 *
 * @param {any[]} typeSamples - One or more sample values to determine the types of.
 * @param {'form'|'exact'} [functionCheckMode] - method of setting function type.
 * @returns {string[]} An array of type names corresponding to the input values.
 *
 * @example
 * getTypeName(42, 'hello', null, NaN, {}, [])
 * // Returns: ['number', 'string', 'null', 'nan', 'object', 'object']
 */
const getTypeName = (typeSamples, functionCheckMode) =>
  typeSamples.map((sample) => {
    if (Number.isNaN(sample)) return 'nan';
    if (sample === null) return 'null';
    const sampleTypeName = typeof sample;
    if (sampleTypeName === 'function')
      return getFunctionType(sample, functionCheckMode);

    return sampleTypeName;
  });

export default getTypeName;
