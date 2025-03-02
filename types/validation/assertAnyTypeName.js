import TYPE_NAMES from "../constants/TYPE_NAMES.js";

/**
 * Asserts that the given type names are recognized as standard types.
 * Throws a TypeError if any type name is not recognized.
 *
 * @param {...string} typeNames - The type names to validate.
 * @throws {TypeError} Throws an error if any type name is not included in TYPE_NAMES.
 */
const assertAnyTypeName = (...typeNames) => {
  typeNames.forEach((typeName) => {
    if (!TYPE_NAMES.includes(typeName)) throw TypeError(typeName + ' is not a recognized type name: ' + TYPE_NAMES.toString());
  });
}

export default assertAnyTypeName;
