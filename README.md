# Anagram Checker

Return `true` if the two given strings are anagrams. Otherwise, return `false`.

A word is an <dfn>anagram</dfn> of another word if both use the same letters in the same quantity, but arranged differently.

For example:
- `friend` and `Finder` are anagrams.
- `The Morse Code` and `Here come dots` are anagrams as well.

The anagram checker first removas all non alphanumeric characters before evaluation

## How to use
The anagram checker runs on `node.js` and is available in the `anagram-checker.js` file. Simply copy this file into your project and import it inside the file you are working on.

## Tests
This repo contains a test to verify the accuracy of the anagram checker. It includes simple tests but you can modify the `tests.js` files to include normal and edge cases.

### How to run the tests
In order to run the tests, you need to install all the dependencies first. To do this, first run:
`nmp install` <br>
Then <br>
`npm run test`