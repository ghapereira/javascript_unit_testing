'use strict';

var assert = require('assert');

describe('largestisland', function() {
  var testable = require('../largestisland.js'),
      islandMap = [[0, 0, 1, 0, 0],
                   [0, 0, 1, 1, 0],
                   [1, 0, 1, 1, 0],
                   [1, 0, 0, 0, 0],
                   [1, 1, 0, 1, 1]],
      tinyIsland = [[1, 0],
                    [0, 0]],
      bigIsland = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 1, 0, 0, 0],
                   [0, 1, 1, 0, 0, 1, 0, 0, 0],
                   [0, 1, 1, 0, 0, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0, 1, 0, 0, 0],
                   [0, 0, 0, 1, 0, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0, 1, 0, 0, 0],
                   [0, 1, 1, 1, 1, 1, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0, 0, 0],
                   [0, 1, 1, 1, 0, 0, 0, 0, 0],
                   [0, 1, 1, 1, 0, 0, 0, 0, 0]],
    nullOcean = [[0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0],
                 [0, 0, 0, 0]],
    allIsland = [[1, 1, 1, 1],
                 [1, 1, 1, 1],
                 [1, 1, 1, 1],
                 [1, 1, 1, 1]];

  it('Main method returns integer value', function() {
    var thisIsland = JSON.parse(JSON.stringify(islandMap)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(typeof widestIslandValue, 'number');
  });

  it('Correct island for M5x5', function() {
    var thisIsland = JSON.parse(JSON.stringify(islandMap)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(widestIslandValue, 5);
  });

  it('Behaves well with small matrix', function() {
    var thisIsland = JSON.parse(JSON.stringify(tinyIsland)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(widestIslandValue, 1);
  });

  it('Behaves well with big matrix', function() {
    var thisIsland = JSON.parse(JSON.stringify(bigIsland)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(widestIslandValue, 11);
  });

  it('Behaves well with null matrix', function() {
    var thisIsland = JSON.parse(JSON.stringify(nullOcean)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(widestIslandValue, 0);
  });

  it('Behaves well with complete matrix', function() {
    var thisIsland = JSON.parse(JSON.stringify(allIsland)),
        widestIslandValue = testable.getWidestIsland(thisIsland,
                                                     thisIsland.length,
                                                     thisIsland[0].length);
    assert.equal(widestIslandValue, 16);
  });
});


