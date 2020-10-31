# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @areejombas/lotide`

**Require it:**

`const _ = require('@areejombas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


*`function(assertArraysEqual)`:  assertion of two arrays.

*`function(assertEqual)`:  assertion of two values.

*`function(assertObjectsEqual)`:  assertion of two objects.

*`function(countLetters)`:  returns an object which contains each letter in a string with its number of occurrences.

*`function(countOnly)`:  counts items in an array that satisfies a given array of items.

*`function(eqArrays)`:  compares two arrays return Boolean.

*`function(eqObjects)`:  compares two objects return Boolean.

*`function(findKey)`:  search the object and return the first key which satisfies a given callback.

*`function(findKeyByValue)`:  returns the key in an object where its value matches a given value.

*`function(head)`:  returns the first element in an array.

*`function(letterPositions)`:  returns an object with every letter in a string (as key) and its position (as value).

*`function(map)`: creates a new array with the result of calling a callback function applied on every element in the calling array.

*`function(middle)`:  returns the middle element(s) of an array.

*`function(tail)`:  remove the head  of the array and returns the rest.

*`function(takeUntil)`:  returns a slice of the array with elements taken from the beginning until a callback function is satisfied.
