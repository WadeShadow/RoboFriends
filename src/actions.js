import {CHANGE_SEARCH_FIELD} from './constants'

/**
 * 
 * @param {string} text describes the text, written inside the searchBox
 * 
 * The function translates an input to an object of type 'CHANGE_SEARCH_FIELD' with the given text as payload 
 * It describes the action of writing anything inside searchBox
 * 
 * In general, payload is any useful data that we want to pass
 */

 
export const searchFieldSet = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
    
});
