'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var BrandedCallList = require('./trusted_comms/brandedCall').BrandedCallList;
var CpsList = require('./trusted_comms/cps').CpsList;
var CurrentCallList = require('./trusted_comms/currentCall').CurrentCallList;
var DeviceList = require('./trusted_comms/device').DeviceList;
var PhoneCallList = require('./trusted_comms/phoneCall').PhoneCallList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the TrustedComms version of Preview
 *
 * @constructor Twilio.Preview.TrustedComms
 *
 * @property {Twilio.Preview.TrustedComms.BrandedCallList} brandedCalls -
 *          brandedCalls resource
 * @property {Twilio.Preview.TrustedComms.CpsList} cps - cps resource
 * @property {Twilio.Preview.TrustedComms.CurrentCallList} currentCalls -
 *          currentCalls resource
 * @property {Twilio.Preview.TrustedComms.DeviceList} devices - devices resource
 * @property {Twilio.Preview.TrustedComms.PhoneCallList} phoneCalls -
 *          phoneCalls resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function TrustedComms(domain) {
  Version.prototype.constructor.call(this, domain, 'TrustedComms');

  // Resources
  this._brandedCalls = undefined;
  this._cps = undefined;
  this._currentCalls = undefined;
  this._devices = undefined;
  this._phoneCalls = undefined;
}

_.extend(TrustedComms.prototype, Version.prototype);
TrustedComms.prototype.constructor = TrustedComms;

Object.defineProperty(TrustedComms.prototype,
  'brandedCalls', {
  get: function() {
    this._brandedCalls = this._brandedCalls || new BrandedCallList(this);
    return this._brandedCalls;
  }
});

Object.defineProperty(TrustedComms.prototype,
  'cps', {
  get: function() {
    this._cps = this._cps || new CpsList(this);
    return this._cps;
  }
});

Object.defineProperty(TrustedComms.prototype,
  'currentCalls', {
  get: function() {
    this._currentCalls = this._currentCalls || new CurrentCallList(this);
    return this._currentCalls;
  }
});

Object.defineProperty(TrustedComms.prototype,
  'devices', {
  get: function() {
    this._devices = this._devices || new DeviceList(this);
    return this._devices;
  }
});

Object.defineProperty(TrustedComms.prototype,
  'phoneCalls', {
  get: function() {
    this._phoneCalls = this._phoneCalls || new PhoneCallList(this);
    return this._phoneCalls;
  }
});

module.exports = TrustedComms;
