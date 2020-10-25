const testStrTrue = '([{}])';
const testBracketsTrue = [['(', ')'], ['[', ']'], ['{', '}']];
const testStrFalse = '||()';
const testBracketsFalse = [['|', '|'], ['(', ')']];

module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
    if (str.length & 1) return false;

    const openBrackets = [];
    const closeBrackets = [];
    const correctBracketsPairs = bracketsConfig.map((item) => `${item[0]}${item[1]}`);

    bracketsConfig.forEach((brackets) => {
        openBrackets.push(brackets[0]);
        closeBrackets.push(brackets[1]);
    });
    
    const openBracketsStack = [];

    for (let i = 0; i < str.length; i += 1) {
        const currentBracket = str[i];
        const testBracketsPair = `${openBracketsStack[openBracketsStack.length - 1]}${currentBracket}`

        if (closeBrackets.includes(currentBracket) && correctBracketsPairs.includes(testBracketsPair)) {
            openBracketsStack.pop();
        } else if (openBrackets.includes(currentBracket)) {
            openBracketsStack.push(currentBracket);
        }
    }

    return (openBracketsStack.length === 0) ? true : false;
}

// console.log(check(testStrFalse, testBracketsFalse));
