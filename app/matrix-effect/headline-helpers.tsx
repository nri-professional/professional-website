// Partial replace helper function
export default function partialReplace(str: string, num: number, obfusCharacters: string, offset: number, opposite: boolean) {
    let strArr = str.split("");
    const charsToUse = obfusCharacters.split("");
    let mult = 1;

    if(opposite === true) {
        // Reverse the string
        strArr.reverse();
        // Make it go backwards
        mult = -1;
        // Decrease the offset by 1
        offset -= 1;
    }
    
    strArr = strArr.map((char, idx) => { 
        if(idx < num) {
            return charsToUse[(idx * mult + offset) % charsToUse.length];
        } else {
            return char;
        }
    });

    if(opposite === true) {
        strArr.reverse();
    }
    
    return strArr.join(""); // Rejoin into a string at the end
}