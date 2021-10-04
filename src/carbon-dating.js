import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(data) {
  function dateSample(data) {
    if(typeof(data) != 'number' && typeof(data) != 'string'){
      return false;
    }
    else{
      if(isNaN(Number(data)) || Number(data) <= 0 || Number(data) > 15) {
        return false;
      }
      else {
        return Math.ceil(HALF_LIFE_PERIOD*Math.log(MODERN_ACTIVITY/data)/Math.LN2);
      }
    }
  }
}
