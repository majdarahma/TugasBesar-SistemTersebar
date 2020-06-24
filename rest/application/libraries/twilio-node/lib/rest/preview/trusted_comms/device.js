'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var DeviceList;
var DevicePage;
var DeviceInstance;

/* jshint ignore:start */
/**
 * Initialize the DeviceList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.DeviceList
 *
 * @param {Twilio.Preview.TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
DeviceList = function DeviceList(version) {
  /* jshint ignore:start */
  /**
   * @function devices
   * @memberof Twilio.Preview.TrustedComms#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.TrustedComms.DeviceContext}
   */
  /* jshint ignore:end */
  function DeviceListInstance(sid) {
    return DeviceListInstance.get(sid);
  }

  DeviceListInstance._version = version;
  // Path Solution
  DeviceListInstance._solution = {};
  DeviceListInstance._uri = `/Devices`;
  /* jshint ignore:start */
  /**
   * create a DeviceInstance
   *
   * @function create
   * @memberof Twilio.Preview.TrustedComms.DeviceList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.phoneNumber - The end user Phone Number
   * @param {string} opts.pushToken - The Push Token for this Phone Number
   * @param {string} [opts.twilioSandboxMode] -
   *          Optional header to mock all voice dependencies
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed DeviceInstance
   */
  /* jshint ignore:end */
  DeviceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.phoneNumber)) {
      throw new Error('Required parameter "opts.phoneNumber" missing.');
    }
    if (_.isUndefined(opts.pushToken)) {
      throw new Error('Required parameter "opts.pushToken" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'PushToken': _.get(opts, 'pushToken')
    });
    var headers = values.of({'Twilio-Sandbox-Mode': _.get(opts, 'twilioSandboxMode')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data, headers: headers});

    promise = promise.then(function(payload) {
      deferred.resolve(new DeviceInstance(this._version, payload));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Preview.TrustedComms.DeviceList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  DeviceListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  DeviceListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return DeviceListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the DevicePage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.DevicePage
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {DeviceSolution} solution - Path solution
 *
 * @returns DevicePage
 */
/* jshint ignore:end */
DevicePage = function DevicePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(DevicePage.prototype, Page.prototype);
DevicePage.prototype.constructor = DevicePage;

/* jshint ignore:start */
/**
 * Build an instance of DeviceInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.TrustedComms.DevicePage#
 *
 * @param {DevicePayload} payload - Payload response from the API
 *
 * @returns DeviceInstance
 */
/* jshint ignore:end */
DevicePage.prototype.getInstance = function getInstance(payload) {
  return new DeviceInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.DevicePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
DevicePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

DevicePage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the DeviceContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.DeviceInstance
 *
 * @property {string} bindingSid - Binding Sid.
 * @property {string} phoneNumber - The end user Phone Number
 * @property {string} sid - A string that uniquely identifies this Device.
 * @property {string} url - The URL of this resource.
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {DevicePayload} payload - The instance payload
 */
/* jshint ignore:end */
DeviceInstance = function DeviceInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.bindingSid = payload.binding_sid; // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.DeviceInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
DeviceInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

DeviceInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  DeviceList: DeviceList,
  DevicePage: DevicePage,
  DeviceInstance: DeviceInstance
};
