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
var ConversationList = require('./v1/conversation').ConversationList;
var Version = require('../../base/Version');  /* jshint ignore:line */
var WebhookList = require('./v1/webhook').WebhookList;


/* jshint ignore:start */
/**
 * Initialize the V1 version of Conversations
 *
 * @constructor Twilio.Conversations.V1
 *
 * @property {Twilio.Conversations.V1.ConversationList} conversations -
 *          conversations resource
 * @property {Twilio.Conversations.V1.WebhookList} webhooks - webhooks resource
 *
 * @param {Twilio.Conversations} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._conversations = undefined;
  this._webhooks = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'conversations', {
  get: function() {
    this._conversations = this._conversations || new ConversationList(this);
    return this._conversations;
  }
});

Object.defineProperty(V1.prototype,
  'webhooks', {
  get: function() {
    this._webhooks = this._webhooks || new WebhookList(this);
    return this._webhooks;
  }
});

module.exports = V1;
