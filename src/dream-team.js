import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let team='';
	  if(members.isArray) {
	    return false;
	  }
	  else{
	    members.forEach(
        (name)=>{
          if(typeof(name) != 'string') { }
			    else {
            name=name.match(/[a-zA-Z]/i);
			      team+=name;
			    }
		    }
		  )
		  return team.toUpperCase().split('').sort().join('');
	  }
}
