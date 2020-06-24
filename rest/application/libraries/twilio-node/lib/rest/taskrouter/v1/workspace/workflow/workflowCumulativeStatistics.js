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
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkflowCumulativeStatisticsList;
var WorkflowCumulativeStatisticsPage;
var WorkflowCumulativeStatisticsInstance;
var WorkflowCumulativeStatisticsContext;

/* jshint ignore:start */
/**
 * Initialize the WorkflowCumulativeStatisticsList
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid -
 *          The SID of the Workspace that contains the Workflow.
 * @param {string} workflowSid -
 *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsList = function
    WorkflowCumulativeStatisticsList(version, workspaceSid, workflowSid) {
  /* jshint ignore:start */
  /**
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkflowCumulativeStatisticsListInstance(sid) {
    return WorkflowCumulativeStatisticsListInstance.get(sid);
  }

  WorkflowCumulativeStatisticsListInstance._version = version;
  // Path Solution
  WorkflowCumulativeStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    workflowSid: workflowSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a workflow_cumulative_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsList#
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  WorkflowCumulativeStatisticsListInstance.get = function get() {
    return new WorkflowCumulativeStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.workflowSid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  WorkflowCumulativeStatisticsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  WorkflowCumulativeStatisticsListInstance[util.inspect.custom] = function
      inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return WorkflowCumulativeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the WorkflowCumulativeStatisticsPage
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {WorkflowCumulativeStatisticsSolution} solution - Path solution
 *
 * @returns WorkflowCumulativeStatisticsPage
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsPage = function
    WorkflowCumulativeStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkflowCumulativeStatisticsPage.prototype, Page.prototype);
WorkflowCumulativeStatisticsPage.prototype.constructor = WorkflowCumulativeStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkflowCumulativeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsPage#
 *
 * @param {WorkflowCumulativeStatisticsPayload} payload -
 *          Payload response from the API
 *
 * @returns WorkflowCumulativeStatisticsInstance
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsPage.prototype.getInstance = function
    getInstance(payload) {
  return new WorkflowCumulativeStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.workflowSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WorkflowCumulativeStatisticsPage.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WorkflowCumulativeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {number} avgTaskAcceptanceTime -
 *          The average time in seconds between Task creation and acceptance
 * @property {Date} startTime -
 *          The beginning of the interval during which these statistics were calculated
 * @property {Date} endTime -
 *          The end of the interval during which these statistics were calculated
 * @property {number} reservationsCreated -
 *          The total number of Reservations that were created for Workers
 * @property {number} reservationsAccepted -
 *          The total number of Reservations accepted by Workers
 * @property {number} reservationsRejected -
 *          The total number of Reservations that were rejected
 * @property {number} reservationsTimedOut -
 *          The total number of Reservations that were timed out
 * @property {number} reservationsCanceled -
 *          The total number of Reservations that were canceled
 * @property {number} reservationsRescinded -
 *          The total number of Reservations that were rescinded
 * @property {object} splitByWaitTime -
 *          A list of objects that describe the Tasks canceled and reservations accepted above and below the specified thresholds
 * @property {object} waitDurationUntilAccepted -
 *          The wait duration statistics for Tasks that were accepted
 * @property {object} waitDurationUntilCanceled -
 *          The wait duration statistics for Tasks that were canceled
 * @property {number} tasksCanceled - The total number of Tasks that were canceled
 * @property {number} tasksCompleted -
 *          The total number of Tasks that were completed
 * @property {number} tasksEntered -
 *          The total number of Tasks that entered the Workflow
 * @property {number} tasksDeleted - The total number of Tasks that were deleted
 * @property {number} tasksMoved -
 *          The total number of Tasks that were moved from one queue to another
 * @property {number} tasksTimedOutInWorkflow -
 *          The total number of Tasks that were timed out of their Workflows
 * @property {string} workflowSid -
 *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value
 * @property {string} workspaceSid -
 *          The SID of the Workspace that contains the Workflow.
 * @property {string} url - The absolute URL of the Workflow statistics resource
 *
 * @param {V1} version - Version of the resource
 * @param {WorkflowCumulativeStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid - The SID of the Workspace that contains the Workflow.
 * @param {sid} workflowSid -
 *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsInstance = function
    WorkflowCumulativeStatisticsInstance(version, payload, workspaceSid,
    workflowSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.avgTaskAcceptanceTime = deserialize.integer(payload.avg_task_acceptance_time); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.reservationsCreated = deserialize.integer(payload.reservations_created); // jshint ignore:line
  this.reservationsAccepted = deserialize.integer(payload.reservations_accepted); // jshint ignore:line
  this.reservationsRejected = deserialize.integer(payload.reservations_rejected); // jshint ignore:line
  this.reservationsTimedOut = deserialize.integer(payload.reservations_timed_out); // jshint ignore:line
  this.reservationsCanceled = deserialize.integer(payload.reservations_canceled); // jshint ignore:line
  this.reservationsRescinded = deserialize.integer(payload.reservations_rescinded); // jshint ignore:line
  this.splitByWaitTime = payload.split_by_wait_time; // jshint ignore:line
  this.waitDurationUntilAccepted = payload.wait_duration_until_accepted; // jshint ignore:line
  this.waitDurationUntilCanceled = payload.wait_duration_until_canceled; // jshint ignore:line
  this.tasksCanceled = deserialize.integer(payload.tasks_canceled); // jshint ignore:line
  this.tasksCompleted = deserialize.integer(payload.tasks_completed); // jshint ignore:line
  this.tasksEntered = deserialize.integer(payload.tasks_entered); // jshint ignore:line
  this.tasksDeleted = deserialize.integer(payload.tasks_deleted); // jshint ignore:line
  this.tasksMoved = deserialize.integer(payload.tasks_moved); // jshint ignore:line
  this.tasksTimedOutInWorkflow = deserialize.integer(payload.tasks_timed_out_in_workflow); // jshint ignore:line
  this.workflowSid = payload.workflow_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, workflowSid: workflowSid, };
};

Object.defineProperty(WorkflowCumulativeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkflowCumulativeStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.workflowSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkflowCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {Date} [opts.endDate] -
 *          Only include usage that occurred on or before this date
 * @param {number} [opts.minutes] -
 *          Only calculate statistics since this many minutes in the past
 * @param {Date} [opts.startDate] -
 *          Only calculate statistics from on or after this date
 * @param {string} [opts.taskChannel] -
 *          Only calculate cumulative statistics on this TaskChannel
 * @param {string} [opts.splitByWaitTime] -
 *          A comma separated list of values that describes the thresholds to calculate statistics on
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowCumulativeStatisticsInstance
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsInstance.prototype.fetch = function fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

WorkflowCumulativeStatisticsInstance.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the WorkflowCumulativeStatisticsContext
 *
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} workspaceSid - The SID of the Workspace with the resource to fetch
 * @param {sid} workflowSid -
 *          Returns the list of Tasks that are being controlled by the Workflow with the specified Sid value
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsContext = function
    WorkflowCumulativeStatisticsContext(version, workspaceSid, workflowSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, workflowSid: workflowSid, };
  this._uri = `/Workspaces/${workspaceSid}/Workflows/${workflowSid}/CumulativeStatistics`;
};

/* jshint ignore:start */
/**
 * fetch a WorkflowCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {Date} [opts.endDate] -
 *          Only include usage that occurred on or before this date
 * @param {number} [opts.minutes] -
 *          Only calculate statistics since this many minutes in the past
 * @param {Date} [opts.startDate] -
 *          Only calculate statistics from on or after this date
 * @param {string} [opts.taskChannel] -
 *          Only calculate cumulative statistics on this TaskChannel
 * @param {string} [opts.splitByWaitTime] -
 *          A comma separated list of values that describes the thresholds to calculate statistics on
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkflowCumulativeStatisticsInstance
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsContext.prototype.fetch = function fetch(opts,
    callback) {
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
    deferred.resolve(new WorkflowCumulativeStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.workflowSid
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
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.WorkflowContext.WorkflowCumulativeStatisticsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkflowCumulativeStatisticsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

WorkflowCumulativeStatisticsContext.prototype[util.inspect.custom] = function
    inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  WorkflowCumulativeStatisticsList: WorkflowCumulativeStatisticsList,
  WorkflowCumulativeStatisticsPage: WorkflowCumulativeStatisticsPage,
  WorkflowCumulativeStatisticsInstance: WorkflowCumulativeStatisticsInstance,
  WorkflowCumulativeStatisticsContext: WorkflowCumulativeStatisticsContext
};