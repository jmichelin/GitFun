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
*/
const longestCommonPrefix = arrayOfStrings => {
  let longestCommonPrefix = arrayOfStrings[0];// initialize the "longest prefix" with the entire first string
  for (var i = 1; i < arrayOfStrings; i++){// iterate from the 2nd string onward
      function comparePrefixAndString() {
      if (longestCommonPrefix.indexOf(arrayOfStrings[i]) !== 0) {
        longeestCommonPrefix.slice(0, -1);
        comparePrefixAndString();// shorten the prefix from the end until there's a match (which is guaranteed when the string is empty)
      } else {
        return 'MATCH!';
      }
    }
  }
};
