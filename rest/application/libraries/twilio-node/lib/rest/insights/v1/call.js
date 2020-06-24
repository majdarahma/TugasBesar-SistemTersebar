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
var CallSummaryList = require('./call/summary').CallSummaryList;
var EventList = require('./call/event').EventList;
var MetricList = require('./call/metric').MetricList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var CallList;
var CallPage;
var CallInstance;
var CallContext;

/* jshint ignore:start */
/**
 * Initialize the CallList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallList
 *
 * @param {Twilio.Insights.V1} version - Version of the resource
 */
/* jshint ignore:end */
CallList = function CallList(version) {
  /* jshint ignore:start */
  /**
   * @function calls
   * @memberof Twilio.Insights.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Insights.V1.CallContext}
   */
  /* jshint ignore:end */
  function CallListInstance(sid) {
    return CallListInstance.get(sid);
  }

  CallListInstance._version = version;
  // Path Solution
  CallListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a call
   *
   * @function get
   * @memberof Twilio.Insights.V1.CallList#
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Insights.V1.CallContext}
   */
  /* jshint ignore:end */
  CallListInstance.get = function get(sid) {
    return new CallContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Insights.V1.CallList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  CallListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  CallListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return CallListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the CallPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {CallSolution} solution - Path solution
 *
 * @returns CallPage
 */
/* jshint ignore:end */
CallPage = function CallPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(CallPage.prototype, Page.prototype);
CallPage.prototype.constructor = CallPage;

/* jshint ignore:start */
/**
 * Build an instance of CallInstance
 *
 * @function getInstance
 * @memberof Twilio.Insights.V1.CallPage#
 *
 * @param {CallPayload} payload - Payload response from the API
 *
 * @returns CallInstance
 */
/* jshint ignore:end */
CallPage.prototype.getInstance = function getInstance(payload) {
  return new CallInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CallPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CallContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallInstance
 *
 * @property {string} sid - The sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {V1} version - Version of the resource
 * @param {CallPayload} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CallInstance = function CallInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(CallInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new CallContext(this._version, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a CallInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CallInstance
 */
/* jshint ignore:end */
CallInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the events
 *
 * @function events
 * @memberof Twilio.Insights.V1.CallInstance#
 *
 * @returns {Twilio.Insights.V1.CallContext.EventList}
 */
/* jshint ignore:end */
CallInstance.prototype.events = function events() {
  return this._proxy.events;
};

/* jshint ignore:start */
/**
 * Access the metrics
 *
 * @function metrics
 * @memberof Twilio.Insights.V1.CallInstance#
 *
 * @returns {Twilio.Insights.V1.CallContext.MetricList}
 */
/* jshint ignore:end */
CallInstance.prototype.metrics = function metrics() {
  return this._proxy.metrics;
};

/* jshint ignore:start */
/**
 * Access the summary
 *
 * @function summary
 * @memberof Twilio.Insights.V1.CallInstance#
 *
 * @returns {Twilio.Insights.V1.CallContext.CallSummaryList}
 */
/* jshint ignore:end */
CallInstance.prototype.summary = function summary() {
  return this._proxy.summary;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

CallInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the CallContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallContext
 *
 * @property {Twilio.Insights.V1.CallContext.EventList} events - events resource
 * @property {Twilio.Insights.V1.CallContext.MetricList} metrics - metrics resource
 * @property {Twilio.Insights.V1.CallContext.CallSummaryList} summary -
 *          summary resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
CallContext = function CallContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Voice/${sid}`;

  // Dependents
  this._events = undefined;
  this._metrics = undefined;
  this._summary = undefined;
};

/* jshint ignore:start */
/**
 * fetch a CallInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed CallInstance
 */
/* jshint ignore:end */
CallContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new CallInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(CallContext.prototype,
  'events', {
  get: function() {
    if (!this._events) {
      this._events = new EventList(this._version, this._solution.sid);
    }
    return this._events;
  }
});

Object.defineProperty(CallContext.prototype,
  'metrics', {
  get: function() {
    if (!this._metrics) {
      this._metrics = new MetricList(this._version, this._solution.sid);
    }
    return this._metrics;
  }
});

Object.defineProperty(CallContext.prototype,
  'summary', {
  get: function() {
    if (!this._summary) {
      this._summary = new CallSummaryList(this._version, this._solution.sid);
    }
    return this._summary;
  }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
CallContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

CallContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  CallList: CallList,
  CallPage: CallPage,
  CallInstance: CallInstance,
  CallContext: CallContext
};
