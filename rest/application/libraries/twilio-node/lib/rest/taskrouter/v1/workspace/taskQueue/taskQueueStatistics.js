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
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var TaskQueueStatisticsList;
var TaskQueueStatisticsPage;
var TaskQueueStatisticsInstance;
var TaskQueueStatisticsContext;

/* jshint ignore:start */
/**
 * Initialize the TaskQueueStatisticsList
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid -
 *          The SID of the Workspace that contains the TaskQueue
 * @param {string} taskQueueSid -
 *          The SID of the TaskQueue from which these statistics were calculated
 */
/* jshint ignore:end */
TaskQueueStatisticsList = function TaskQueueStatisticsList(version,
                                                            workspaceSid,
                                                            taskQueueSid) {
  /* jshint ignore:start */
  /**
   * @function statistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext}
   */
  /* jshint ignore:end */
  function TaskQueueStatisticsListInstance(sid) {
    return TaskQueueStatisticsListInstance.get(sid);
  }

  TaskQueueStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a task_queue_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList#
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext}
   */
  /* jshint ignore:end */
  TaskQueueStatisticsListInstance.get = function get() {
    return new TaskQueueStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  TaskQueueStatisticsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  TaskQueueStatisticsListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return TaskQueueStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueStatisticsPage
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {TaskQueueStatisticsSolution} solution - Path solution
 *
 * @returns TaskQueueStatisticsPage
 */
/* jshint ignore:end */
TaskQueueStatisticsPage = function TaskQueueStatisticsPage(version, response,
                                                            solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskQueueStatisticsPage.prototype, Page.prototype);
TaskQueueStatisticsPage.prototype.constructor = TaskQueueStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueueStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage#
 *
 * @param {TaskQueueStatisticsPayload} payload - Payload response from the API
 *
 * @returns TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new TaskQueueStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueStatisticsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueueStatisticsPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {object} cumulative -
 *          An object that contains the cumulative statistics for the TaskQueue
 * @property {object} realtime -
 *          An object that contains the real-time statistics for the TaskQueue
 * @property {string} taskQueueSid -
 *          The SID of the TaskQueue from which these statistics were calculated
 * @property {string} workspaceSid -
 *          The SID of the Workspace that contains the TaskQueue
 * @property {string} url - The absolute URL of the TaskQueue statistics resource
 *
 * @param {V1} version - Version of the resource
 * @param {TaskQueueStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid - The SID of the Workspace that contains the TaskQueue
 * @param {sid} taskQueueSid -
 *          The SID of the TaskQueue from which these statistics were calculated
 */
/* jshint ignore:end */
TaskQueueStatisticsInstance = function TaskQueueStatisticsInstance(version,
    payload, workspaceSid, taskQueueSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.realtime = payload.realtime; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
};

Object.defineProperty(TaskQueueStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a TaskQueueStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {Date} [opts.endDate] -
 *          Only calculate statistics from on or before this date
 * @param {number} [opts.minutes] -
 *          Only calculate statistics since this many minutes in the past
 * @param {Date} [opts.startDate] -
 *          Only calculate statistics from on or after this date
 * @param {string} [opts.taskChannel] -
 *          Only calculate real-time and cumulative statistics for the specified TaskChannel
 * @param {string} [opts.splitByWaitTime] -
 *          A comma separated list of values that describes the thresholds to calculate statistics on
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TaskQueueStatisticsInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TaskQueueStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} workspaceSid - The SID of the Workspace with the TaskQueue to fetch
 * @param {sid} taskQueueSid -
 *          The SID of the TaskQueue for which to fetch statistics
 */
/* jshint ignore:end */
TaskQueueStatisticsContext = function TaskQueueStatisticsContext(version,
    workspaceSid, taskQueueSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
  this._uri = `/Workspaces/${workspaceSid}/TaskQueues/${taskQueueSid}/Statistics`;
};

/* jshint ignore:start */
/**
 * fetch a TaskQueueStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {Date} [opts.endDate] -
 *          Only calculate statistics from on or before this date
 * @param {number} [opts.minutes] -
 *          Only calculate statistics since this many minutes in the past
 * @param {Date} [opts.startDate] -
 *          Only calculate statistics from on or after this date
 * @param {string} [opts.taskChannel] -
 *          Only calculate real-time and cumulative statistics for the specified TaskChannel
 * @param {string} [opts.splitByWaitTime] -
 *          A comma separated list of values that describes the thresholds to calculate statistics on
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'TaskChannel': _.get(opts, 'taskChannel'),
    'SplitByWaitTime': _.get(opts, 'splitByWaitTime')
  });

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    ));
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
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueStatisticsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
TaskQueueStatisticsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

TaskQueueStatisticsContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  TaskQueueStatisticsList: TaskQueueStatisticsList,
  TaskQueueStatisticsPage: TaskQueueStatisticsPage,
  TaskQueueStatisticsInstance: TaskQueueStatisticsInstance,
  TaskQueueStatisticsContext: TaskQueueStatisticsContext
};
