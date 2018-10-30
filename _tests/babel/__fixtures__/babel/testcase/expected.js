'use strict';

(function rwrmck() {
  global["_REWIREMOCK_HOISTED_"] = global["_REWIREMOCK_HOISTED_"] || [];
  global["_REWIREMOCK_HOISTED_"].push(function (rewiremock) {
    rewiremock.enable();


    rewiremock('foo').with('mocked');
  });
})('rwrmck');

var _chai = require('chai');

var _rewiremock = require('./rewiremock');

var _rewiremock2 = _interopRequireDefault(_rewiremock);

var _foo = require('./foo');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_rewiremock2.default.disable();

global["_REWIREMOCK_HOISTED_"] = [];
describe('hoisted', () => {
  it('mocked test', () => {
    (0, _chai.expect)(_foo2.default).to.be.equal('mocked');
  });
});