/*
Strategy: Compare a running prefix with each string in turn
(this is a "transitive" solution -- the max must be correct
in the end after a single pass, no matter what the order of
strings).  Comparison done by shorten the prefix from the end
until there's a match.
Big O: O(n^2) at worst case (all strings are the same, so indexOf must always scan.
Example of a prefix match...
==============================
Comparing prefix "flair" and word "flatulence"...
flair
flatulence
(no match, shrink the prefix)
flai
flatulence
(no match, shrink the prefix)
fla
flatulence
MATCH! continue with next string...
Example of no prefix match...
==============================
Comparing prefix "foo" and word "bar"
foo
bar
(no match, shrink the prefix)
fo
bar
(no match, shrink the prefix)
f
bar
(no match, shrink the prefix)
""
bar
MATCH! continue with next string (prefix is completely gone...)
const longestCommonPrefix = arrayOfStrings => {
  // initialize the "longest prefix" with the entire first string
  // iterate from the 2nd string onward
    // shorten the prefix from the end until there's a match (which is guaranteed when the string
        is empty)
 };
*/

const longestCommonPrefix = arrayofStrings => {
  let prefix = arrayofStrings[0];
  let i = prefix.length;
  for (let j = arrayofStrings.length - 1; j > 0; j--) {
    for (let i = prefix.length; i >= 0; i--) {
      if (arrayofStrings[j].indexOf(prefix, 0, prefix.length - 1) === -1) {
        prefix = prefix.slice(0, i);
      } else if (arrayofStrings[j].indexOf(prefix, 0, prefix.length - 1) >= 0) {
        if (arrayofStrings[j - 1].indexOf(prefix, 0, prefix.length - 1) >= 0) {
          return "match on prefix " + prefix + ' with word ' + arrayofStrings[j];
        }
      }
    }
  }
}

console.log(longestCommonPrefix(['flat', 'flatulance', 'flair']))
console.log(longestCommonPrefix(['abcdefgh', 'aefghijk', 'abcefgh']))