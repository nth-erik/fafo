import { StoicObject } from '@nth-erik/stoic';

const TYPE_DEFAULTS = new StoicObject({
  BIGINT: 0n,
  BOOLEAN: false,
  FUNCTION: () => {},
  NAN: NaN,
  NULL: null,
  NUMBER: 0,
  OBJECT: Object.create(null),
  STRING: '',
  SYMBOL: Symbol(),
  UNDEFINED: void 0,
});

export default TYPE_DEFAULTS;
