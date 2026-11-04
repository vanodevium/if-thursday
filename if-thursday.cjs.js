// src/if-thursday.js
const THURSDAY_DAY_OF_WEEK = 4;
/**
 * Check if today is Thursday
 *
 * @return {boolean}
 */
function ifThursday() {
  return THURSDAY_DAY_OF_WEEK === /* @__PURE__ */ new Date().getDay();
}
module.exports = ifThursday;
