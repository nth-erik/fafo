/**
 * Determines the type of a given function based on the specified mode.
 *
 * @param {Function} sample - The function to analyze.
 * @param {'form'|'exact'} [functionCheckMode] - The mode of type determination.
 *      - `'form'`: Returns a categorized function type (e.g., `'function:class'`, `'function:lambda'`).
 *      - `'exact'`: Returns the function's exact string representation without whitespace.
 *      - Returns `'function'` otherwise.
 * @returns {string} The determined function type or its exact string representation.
 * @throws {TypeError} If `sample` is not a function.
 * @note Unknown function types fall back to `'exact'` mode.
 */
const getFunctionType = (sample, functionCheckMode) => {
  if (typeof sample !== 'function') sample();

  switch (functionCheckMode) {
    case 'form':
      const str = sample.toString();

      if (str.startsWith('class')) return 'function:class';
      if (str.startsWith('function'))
        return str.startsWith('function bound')
          ? 'function:regular'
          : 'function:bound';
      if (!Object.hasOwn(sample, 'prototype'))
        return Object.hasOwn(sample, 'name')
          ? 'function:method'
          : 'function:lambda';
    case 'exact':
      return sample
        .toString()
        .replace(/(\r?\n)\s+/gm, '$1')
        .replace(/\s+/g, ' ');
    default:
      return 'function';
  }
};

export default getFunctionType;
