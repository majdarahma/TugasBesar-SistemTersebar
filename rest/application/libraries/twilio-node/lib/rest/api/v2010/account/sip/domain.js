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
var AuthTypesList = require('./domain/authTypes').AuthTypesList;
var CredentialListMappingList = require(
    './domain/credentialListMapping').CredentialListMappingList;
var IpAccessControlListMappingList = require(
    './domain/ipAccessControlListMapping').IpAccessControlListMappingList;
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var DomainList;
var DomainPage;
var DomainInstance;
var DomainContext;

/* jshint ignore:start */
/**
 * Initialize the DomainList
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
DomainList = function DomainList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function domains
   * @memberof Twilio.Api.V2010.AccountContext.SipContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext}
   */
  /* jshint ignore:end */
  function DomainListInstance(sid) {
    return DomainListInstance.get(sid);
  }

  DomainListInstance._version = version;
  // Path Solution
  DomainListInstance._solution = {accountSid: accountSid};
  DomainListInstance._uri = `/Accounts/${accountSid}/SIP/Domains.json`;
  /* jshint ignore:start */
  /**
   * Streams DomainInstance records from the API.
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
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
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
  DomainListInstance.each = function each(opts, callback) {
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
   * Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
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
  DomainListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DomainInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
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
  DomainListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new DomainPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of DomainInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DomainListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DomainPage(this._version, payload, this._solution));
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
   * create a DomainInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.domainName -
   *          The unique address on Twilio to route SIP traffic
   * @param {string} [opts.friendlyName] - A string to describe the resource
   * @param {string} [opts.voiceUrl] - The URL we should call when receiving a call
   * @param {string} [opts.voiceMethod] - The HTTP method to use with voice_url
   * @param {string} [opts.voiceFallbackUrl] -
   *          The URL we should call when an error occurs in executing TwiML
   * @param {string} [opts.voiceFallbackMethod] -
   *          The HTTP method to use with voice_fallback_url
   * @param {string} [opts.voiceStatusCallbackUrl] -
   *          The URL that we should call to pass status updates
   * @param {string} [opts.voiceStatusCallbackMethod] -
   *          The HTTP method we should use to call `voice_status_callback_url`
   * @param {boolean} [opts.sipRegistration] - Whether SIP registration is allowed
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed DomainInstance
   */
  /* jshint ignore:end */
  DomainListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.domainName)) {
      throw new Error('Required parameter "opts.domainName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'DomainName': _.get(opts, 'domainName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'VoiceUrl': _.get(opts, 'voiceUrl'),
      'VoiceMethod': _.get(opts, 'voiceMethod'),
      'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
      'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
      'VoiceStatusCallbackUrl': _.get(opts, 'voiceStatusCallbackUrl'),
      'VoiceStatusCallbackMethod': _.get(opts, 'voiceStatusCallbackMethod'),
      'SipRegistration': serialize.bool(_.get(opts, 'sipRegistration'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DomainInstance(
        this._version,
        payload,
        this._solution.accountSid,
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
   * Constructs a domain
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext}
   */
  /* jshint ignore:end */
  DomainListInstance.get = function get(sid) {
    return new DomainContext(this._version, this._solution.accountSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  DomainListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  DomainListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return DomainListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the DomainPage
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainPage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {DomainSolution} solution - Path solution
 *
 * @returns DomainPage
 */
/* jshint ignore:end */
DomainPage = function DomainPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(DomainPage.prototype, Page.prototype);
DomainPage.prototype.constructor = DomainPage;

/* jshint ignore:start */
/**
 * Build an instance of DomainInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainPage#
 *
 * @param {DomainPayload} payload - Payload response from the API
 *
 * @returns DomainInstance
 */
/* jshint ignore:end */
DomainPage.prototype.getInstance = function getInstance(payload) {
  return new DomainInstance(this._version, payload, this._solution.accountSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
DomainPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

DomainPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the DomainContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
 *
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} apiVersion - The API version used to process the call
 * @property {string} authType - The types of authentication mapped to the domain
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT that the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT that the resource was last updated
 * @property {string} domainName -
 *          The unique address on Twilio to route SIP traffic
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} uri -
 *          The URI of the resource, relative to `https://api.twilio.com`
 * @property {string} voiceFallbackMethod -
 *          The HTTP method used with voice_fallback_url
 * @property {string} voiceFallbackUrl -
 *          The URL we call when an error occurs while executing TwiML
 * @property {string} voiceMethod - The HTTP method to use with voice_url
 * @property {string} voiceStatusCallbackMethod -
 *          The HTTP method we use to call voice_status_callback_url
 * @property {string} voiceStatusCallbackUrl -
 *          The URL that we call with status updates
 * @property {string} voiceUrl - The URL we call when receiving a call
 * @property {string} subresourceUris -
 *          A list mapping resources associated with the SIP Domain resource
 * @property {boolean} sipRegistration - Whether SIP registration is allowed
 *
 * @param {V2010} version - Version of the resource
 * @param {DomainPayload} payload - The instance payload
 * @param {sid} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
DomainInstance = function DomainInstance(version, payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.authType = payload.auth_type; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.domainName = payload.domain_name; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.voiceFallbackMethod = payload.voice_fallback_method; // jshint ignore:line
  this.voiceFallbackUrl = payload.voice_fallback_url; // jshint ignore:line
  this.voiceMethod = payload.voice_method; // jshint ignore:line
  this.voiceStatusCallbackMethod = payload.voice_status_callback_method; // jshint ignore:line
  this.voiceStatusCallbackUrl = payload.voice_status_callback_url; // jshint ignore:line
  this.voiceUrl = payload.voice_url; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.sipRegistration = payload.sip_registration; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, sid: sid || this.sid, };
};

Object.defineProperty(DomainInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new DomainContext(this._version, this._solution.accountSid, this._solution.sid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a DomainInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a DomainInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.voiceFallbackMethod] -
 *          The HTTP method used with voice_fallback_url
 * @param {string} [opts.voiceFallbackUrl] -
 *          The URL we should call when an error occurs in executing TwiML
 * @param {string} [opts.voiceMethod] -
 *          The HTTP method we should use with voice_url
 * @param {string} [opts.voiceStatusCallbackMethod] -
 *          The HTTP method we should use to call voice_status_callback_url
 * @param {string} [opts.voiceStatusCallbackUrl] -
 *          The URL that we should call to pass status updates
 * @param {string} [opts.voiceUrl] - The URL we should call when receiving a call
 * @param {boolean} [opts.sipRegistration] - Whether SIP registration is allowed
 * @param {string} [opts.domainName] -
 *          The unique address on Twilio to route SIP traffic
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a DomainInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the ipAccessControlListMappings
 *
 * @function ipAccessControlListMappings
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList}
 */
/* jshint ignore:end */
DomainInstance.prototype.ipAccessControlListMappings = function
    ipAccessControlListMappings() {
  return this._proxy.ipAccessControlListMappings;
};

/* jshint ignore:start */
/**
 * Access the credentialListMappings
 *
 * @function credentialListMappings
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.CredentialListMappingList}
 */
/* jshint ignore:end */
DomainInstance.prototype.credentialListMappings = function
    credentialListMappings() {
  return this._proxy.credentialListMappings;
};

/* jshint ignore:start */
/**
 * Access the auth
 *
 * @function auth
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesList}
 */
/* jshint ignore:end */
DomainInstance.prototype.auth = function auth() {
  return this._proxy.auth;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
DomainInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

DomainInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the DomainContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext
 *
 * @property {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList} ipAccessControlListMappings -
 *          ipAccessControlListMappings resource
 * @property {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.CredentialListMappingList} credentialListMappings -
 *          credentialListMappings resource
 * @property {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesList} auth -
 *          auth resource
 *
 * @param {V2010} version - Version of the resource
 * @param {sid} accountSid -
 *          The SID of the Account that created the resource to fetch
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
DomainContext = function DomainContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, sid: sid, };
  this._uri = `/Accounts/${accountSid}/SIP/Domains/${sid}.json`;

  // Dependents
  this._ipAccessControlListMappings = undefined;
  this._credentialListMappings = undefined;
  this._auth = undefined;
};

/* jshint ignore:start */
/**
 * fetch a DomainInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * update a DomainInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {string} [opts.voiceFallbackMethod] -
 *          The HTTP method used with voice_fallback_url
 * @param {string} [opts.voiceFallbackUrl] -
 *          The URL we should call when an error occurs in executing TwiML
 * @param {string} [opts.voiceMethod] -
 *          The HTTP method we should use with voice_url
 * @param {string} [opts.voiceStatusCallbackMethod] -
 *          The HTTP method we should use to call voice_status_callback_url
 * @param {string} [opts.voiceStatusCallbackUrl] -
 *          The URL that we should call to pass status updates
 * @param {string} [opts.voiceUrl] - The URL we should call when receiving a call
 * @param {boolean} [opts.sipRegistration] - Whether SIP registration is allowed
 * @param {string} [opts.domainName] -
 *          The unique address on Twilio to route SIP traffic
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
    'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
    'VoiceMethod': _.get(opts, 'voiceMethod'),
    'VoiceStatusCallbackMethod': _.get(opts, 'voiceStatusCallbackMethod'),
    'VoiceStatusCallbackUrl': _.get(opts, 'voiceStatusCallbackUrl'),
    'VoiceUrl': _.get(opts, 'voiceUrl'),
    'SipRegistration': serialize.bool(_.get(opts, 'sipRegistration')),
    'DomainName': _.get(opts, 'domainName')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new DomainInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * remove a DomainInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed DomainInstance
 */
/* jshint ignore:end */
DomainContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(DomainContext.prototype,
  'ipAccessControlListMappings', {
  get: function() {
    if (!this._ipAccessControlListMappings) {
      this._ipAccessControlListMappings = new IpAccessControlListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._ipAccessControlListMappings;
  }
});

Object.defineProperty(DomainContext.prototype,
  'credentialListMappings', {
  get: function() {
    if (!this._credentialListMappings) {
      this._credentialListMappings = new CredentialListMappingList(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }
    return this._credentialListMappings;
  }
});

Object.defineProperty(DomainContext.prototype,
  'auth', {
  get: function() {
    if (!this._auth) {
      this._auth = new AuthTypesList(this._version, this._solution.accountSid, this._solution.sid);
    }
    return this._auth;
  }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
DomainContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

DomainContext.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  DomainList: DomainList,
  DomainPage: DomainPage,
  DomainInstance: DomainInstance,
  DomainContext: DomainContext
};
