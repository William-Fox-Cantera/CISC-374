// Maps are also called dictionaries, and are really just simple objects

/**
 * Modify and return the given map as follows: if the key "a" has a value,
 * set the key "b" to have that same value. In all cases remove the key "c",
 * leaving the rest of the map unchanged.
 */
export function mapShare(someMap): object {
    if ("a" in someMap) {
        someMap["b"] = someMap["a"];
    }
    delete someMap["c"];
    return someMap;
}

//let map: object = { 'a': 'aaa', 'c': 'meh', 'd': 'hi' };
//mapShare(map);

/**
 * A Grocery object will have the fields "bananas", "apples", and "oranges".
 * Add together the number of bananas, apples, and oranges in a grocery object.
 */
export function addGroceries(grocery): number {
    let count: number = 0;
    let groceryArr: Array<number> = Object.values(grocery);
    for (var num of groceryArr) {
        count += num;
    }
    return count;
}