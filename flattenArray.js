// Create flatten array function:

/*

    Reverse [1,[[2,3],4], [5,6], [7,8]] -> [1, 2, 3, 4, 5, 6, 7, 8]

 */


function flattenArray(arr) {

    let newArr = arr.reduce((acc, item) => {
        if(Array.isArray(item)) {
            acc = acc.concat(flattenArray(item));
        } else {
            acc.push(item);
        }
        return acc;
    }, []);

    return newArr;
}