import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let winter=[0,1,2],
	    spring=[3,4,5],
		  summer=[6,7,8],
		  autumn=[9,10,11];
	if(typeof(date) == 'undefined') {
    return 'Unable to determine the time of year!';
	}
	else {
    if(date instanceof Date) {
      let month=date.getMonth();
		  if(winter.indexOf(month) != -1) {
        return 'winter';
		  }
      if(spring.indexOf(month) != -1) {
			  return 'spring';
      }
      if(summer.indexOf(month) != -1) {
			  return 'summer';
      }
		  if(autumn.indexOf(month) != -1) {
			  return 'autumn';
		  }
    }
		else {
		  return 'Invalid date!';
		}
	}
}
