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

describe('Participant', function() {
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
                                   .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identifier': '+14155551212',
          'proxy_identifier': '+14155559999',
          'proxy_identifier_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'date_deleted': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'message_interactions': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_channel response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identifier': 'messenger:14155551212',
          'proxy_identifier': 'messenger:14155559999',
          'proxy_identifier_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'a facebook user',
          'date_deleted': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'message_interactions': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
                                   .participants.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Participants`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'page': 0,
              'first_page_url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'participants'
          },
          'participants': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {identifier: 'identifier'};
      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Participants`;

      var values = {Identifier: 'identifier', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identifier': '+14155551212',
          'proxy_identifier': '+14155559999',
          'proxy_identifier_sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'date_deleted': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'message_interactions': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {identifier: 'identifier'};
      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_channel response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'session_sid': 'KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identifier': 'messenger:123456',
          'proxy_identifier': 'messenger:987654532',
          'proxy_identifier_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'a facebook user',
          'date_deleted': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'message_interactions': 'https://proxy.twilio.com/v1/Services/KSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Sessions/KCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/KPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/MessageInteractions'
          }
      });

      holodeck.mock(new Response(201, body));

      var opts = {identifier: 'identifier'};
      var promise = client.proxy.v1.services('KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .sessions('KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants.create(opts);
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
                                   .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'KSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sessionSid = 'KCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://proxy.twilio.com/v1/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${sid}`;

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
                                   .participants('KPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});