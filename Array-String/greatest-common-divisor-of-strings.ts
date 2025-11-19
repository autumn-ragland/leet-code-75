/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 === str2 + str1) {
    const denominatorPosition = getPosition(str1.length, str2.length);
    return str1.slice(0, denominatorPosition);
  }
  return "";
}

function getPosition(position1: number, position2: number): number {
  while (position2 !== 0) {
    let tempDenominatorPosition = position2;
    position2 = position1 % position2;
    position1 = tempDenominatorPosition;
  }
  return position1;
}
