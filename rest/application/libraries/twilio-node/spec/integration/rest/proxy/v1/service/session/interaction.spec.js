'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Interaction', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions('KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Interactions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'data': '{\'body\':\'some message\'}',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'inbound_participant_sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_resource_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'inbound_resource_status': 'sent',
          'inbound_resource_type': 'Message',
          'inbound_resource_url': null,
          'outbound_participant_sid': 'KPbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          'outbound_resource_sid': 'SMbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
          'outbound_resource_status': 'sent',
          'outbound_resource_type': 'Message',
          'outbound_resource_url': null,
          'sid': 'KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'type': 'message',
          'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions/KIaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions('KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Interactions`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'interactions': [],
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Interactions?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'interactions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions('KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Interactions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .interactions('KIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
