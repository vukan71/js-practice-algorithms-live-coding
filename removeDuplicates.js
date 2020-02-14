// Create function to remove duplicates:

/*

    'some some duplicate string string' -> 'some duplicate string'

 */

function removeDuplicates(str){

    const arr = str.split(' ')
    const set = new Set(arr)
    const newString = [...set].join(' ')

    return newString;
}