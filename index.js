'use strict';

const THURSDAY_DAY_OF_WEEK = 4;

const defaultOptions = {
  thursdayDayOfWeek: THURSDAY_DAY_OF_WEEK,
  getCurrentDay,
  dayComparator,
}

/**
 * Check if today is Thursday
 *
 * @return {boolean}
 */
module.exports = function (opts = {}) {
  const options = withDefaultOptions(opts);
  
  const today = options.getCurrentDay();
  const thursday = options.thursdayDayOfWeek;
  const dayComparator = options.dayComparator;
  
  return dayComparator(thursday, today);
};

function getCurrentDay() {
  return new Date().getDay();
}

function dayComparator(day, other) {
  return day === other;
}

function withDefaultOptions(options) {
  return { ...defaultOptions, ...options }
}
