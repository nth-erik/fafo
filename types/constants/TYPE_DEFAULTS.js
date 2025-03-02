import StaticArray from "../../arrays/StaticArray.js";

const TYPE_DEFAULTS = new StaticArray(
  0n,
  false,
  ()=>{},
  NaN,
  null,
  0,
  Object.create(null),
  '',
  Symbol(),
  void 0
);

export default TYPE_DEFAULTS;