//import * as React from 'react';
//import renderer from 'react-test-renderer';
import {getMax,nextId} from '../_helper';

const testArray = [0,5,2,9,5];

/**
 * _helper.ts tests
 */
test('returns a max from an array', () => {
  expect(getMax(testArray)).toEqual(9);  
});

test('returns the next id of an array', () => {
  expect(nextId(testArray)).toEqual(5);
});