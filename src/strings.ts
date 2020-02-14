/**
 * Given a string, return a new string where "not " has been added to the
 * front. However, if the string already begins with "not", return the
 * string unchanged.
 */
export function notString(str: string): string {
    var first = str.substring(0, 3);
    if (first == "not") {
        return str;
    } else {
        return "not " + str;
    }
}

/**
 * Given a string, take the last char and return a new string with the last char
 * added at the front and back, so 'cat' yields 'tcatt' The original string will be
 * length 1 or more.
 */
export function backAround(str: string): string {
    return str[str.length-1] + str + str[str.length-1];
}

/**
 * We'll say that a "triple" in a string is a char appearing three times in a row.
 * Return the number of triples in the given string. The triples may overlap.
 */
export function countTriple(str: string): number {
    let tripleCount: number = 0;
    for (var i = 0; i < str.length-2; i++) {
        if ((str[i] == str[i+1]) && (str[i+1] == str[i+2])) {
            tripleCount++;
        }
    }
    return tripleCount;
}