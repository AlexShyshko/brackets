module.exports = function check(str, bracketsConfig) {
    let slicedStr = str.slice();
    let i;
    let comparedStr = slicedStr;
    while (slicedStr.length > 2) {
      i = 0;
      comparedStr = slicedStr;
      let cuttingStr = slicedStr;
      let firstChar;
      let secondChar;
      for (i = 0; slicedStr === cuttingStr && i < cuttingStr.length - 1; i++) {
        firstChar = cuttingStr[i];
        secondChar = cuttingStr[i + 1];
        if (secondChar === findOpp(firstChar)) {
          cuttingStr = `${cuttingStr.slice(0, i)}${cuttingStr.slice(i + 2)}`;
        }
      }
      if (cuttingStr === comparedStr) {
        return false;
      }
      slicedStr = cuttingStr;
    }
    if (slicedStr.length === 2 && slicedStr[1] === findOpp(slicedStr[0]) ) {
      return true;
    } else {
      return false;
    }
  
    function findOpp(bracket) {
      const possibleBrack = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|'], ['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
      for (let i = 0; i < possibleBrack.length; i++) {
        if (bracket === possibleBrack[i][0])
        return possibleBrack[i][1];
      }
    };
}
