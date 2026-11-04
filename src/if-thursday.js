const THURSDAY_DAY_OF_WEEK = 4;

/**
 * Check if today is Thursday
 *
 * @return {boolean}
 */
export default function ifThursday() {
  return THURSDAY_DAY_OF_WEEK === new Date().getDay();
}
