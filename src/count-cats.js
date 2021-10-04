import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(massive) {
  massive.forEach(function(entry_n) {
  let count=0;
	massive.forEach(function(entry_n) {
	  entry_n.forEach(function(entry_m){
	    if(entry_m=='^^'){count++;}
	  });
  });
	return count;
  });
}