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
var MessageInteractionList = require(
    './participant/messageInteraction').MessageInteractionList;
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var ParticipantList;
var ParticipantPage;
var ParticipantInstance;
var ParticipantContext;

/* jshint ignore:start */
/**
 * Initialize the ParticipantList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {string} serviceSid - The SID of the resource's parent Service
 * @param {string} sessionSid - The SID of the resource's parent Session
 */
/* jshint ignore:end */
ParticipantList = function ParticipantList(version, serviceSid, sessionSid) {
  /* jshint ignore:start */
  /**
   * @function participants
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext}
   */
  /* jshint ignore:end */
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {serviceSid: serviceSid, sessionSid: sessionSid};
  ParticipantListInstance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants`;
  /* jshint ignore:start */
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  ParticipantListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantPage(this._version, payload, this._solution));
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
   * create a ParticipantInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.identifier - The phone number of the Participant
   * @param {string} [opts.friendlyName] -
   *          The string that you assigned to describe the participant
   * @param {string} [opts.proxyIdentifier] -
   *          The proxy phone number to use for the Participant
   * @param {string} [opts.proxyIdentifierSid] - The Proxy Identifier Sid
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ParticipantInstance
   */
  /* jshint ignore:end */
  ParticipantListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.identifier)) {
      throw new Error('Required parameter "opts.identifier" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Identifier': _.get(opts, 'identifier'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'ProxyIdentifier': _.get(opts, 'proxyIdentifier'),
      'ProxyIdentifierSid': _.get(opts, 'proxyIdentifierSid')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.sid
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
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext}
   */
  /* jshint ignore:end */
  ParticipantListInstance.get = function get(sid) {
    return new ParticipantContext(
      this._version,
      this._solution.serviceSid,
      this._solution.sessionSid,
      sid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ParticipantListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ParticipantListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return ParticipantListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ParticipantSolution} solution - Path solution
 *
 * @returns ParticipantPage
 */
/* jshint ignore:end */
ParticipantPage = function ParticipantPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/* jshint ignore:start */
/**
 * Build an instance of ParticipantInstance
 *
 * @function getInstance
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantPage#
 *
 * @param {ParticipantPayload} payload - Payload response from the API
 *
 * @returns ParticipantInstance
 */
/* jshint ignore:end */
ParticipantPage.prototype.getInstance = function getInstance(payload) {
  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.sessionSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ParticipantPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} sessionSid - The SID of the resource's parent Session
 * @property {string} serviceSid - The SID of the resource's parent Service
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the participant
 * @property {string} identifier - The phone number of the Participant
 * @property {string} proxyIdentifier -
 *          The phone number or short code of the participant's partner
 * @property {string} proxyIdentifierSid -
 *          The SID of the Proxy Identifier assigned to the Participant
 * @property {Date} dateDeleted - The ISO 8601 date the Participant was removed
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the Participant resource
 * @property {string} links - The URLs to resources related the participant
 *
 * @param {V1} version - Version of the resource
 * @param {ParticipantPayload} payload - The instance payload
 * @param {sid} serviceSid - The SID of the resource's parent Service
 * @param {sid} sessionSid - The SID of the resource's parent Session
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ParticipantInstance = function ParticipantInstance(version, payload, serviceSid,
                                                    sessionSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.sessionSid = payload.session_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.identifier = payload.identifier; // jshint ignore:line
  this.proxyIdentifier = payload.proxy_identifier; // jshint ignore:line
  this.proxyIdentifierSid = payload.proxy_identifier_sid; // jshint ignore:line
  this.dateDeleted = deserialize.iso8601DateTime(payload.date_deleted); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, sessionSid: sessionSid, sid: sid || this.sid, };
};

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the messageInteractions
 *
 * @function messageInteractions
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantInstance#
 *
 * @returns {Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList}
 */
/* jshint ignore:end */
ParticipantInstance.prototype.messageInteractions = function
    messageInteractions() {
  return this._proxy.messageInteractions;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ParticipantInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ParticipantContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext
 *
 * @property {Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList} messageInteractions -
 *          messageInteractions resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid} serviceSid - The SID of the parent Service of the resource to fetch
 * @param {sid} sessionSid - The SID of the parent Session of the resource to fetch
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ParticipantContext = function ParticipantContext(version, serviceSid,
                                                  sessionSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, sessionSid: sessionSid, sid: sid, };
  this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${sid}`;

  // Dependents
  this._messageInteractions = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.sessionSid,
      this._solution.sid
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
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(ParticipantContext.prototype,
  'messageInteractions', {
  get: function() {
    if (!this._messageInteractions) {
      this._messageInteractions = new MessageInteractionList(
        this._version,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.sid
      );
    }
    return this._messageInteractions;
  }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ParticipantContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ParticipantContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ParticipantList: ParticipantList,
  ParticipantPage: ParticipantPage,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
