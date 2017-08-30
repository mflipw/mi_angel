'use strict';

var expect = require('chai').expect;
var mi_angel = require('../index');

describe('#mi_angel', function() {
    it('should return true', function() {
        var result = mi_angel.noble_price();
        expect(result).to.equal(true);
    });
});
