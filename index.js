import StaticArray from "./arrays/StaticArray";
import getFunctionType from "./types/getFunctionType";
import getTypeName from "./types/getTypeName";
import TYPE_DEFAULTS from "./types/constants/TYPE_DEFAULTS";
import TYPE_NAMES from "./types/constants/TYPE_NAMES";
import assertAnyTypeName from "./types/validation/assertAnyTypeName";
import checkByTypeName from "./types/validation/checkByTypeName";
import failByTypeName from "./types/validation/failByTypeName";
import passByTypeName from "./types/validation/passByTypeName";

export default {
  StaticArray,
  getFunctionType,
  getTypeName,
  TYPE_DEFAULTS,
  TYPE_NAMES,
  assertAnyTypeName,
  checkByTypeName,
  failByTypeName,
  passByTypeName,
};
