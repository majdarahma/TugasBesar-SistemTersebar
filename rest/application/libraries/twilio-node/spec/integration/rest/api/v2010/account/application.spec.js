'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Application', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications.json`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'date_created': 'Mon, 22 Aug 2011 20:59:45 +0000',
          'date_updated': 'Tue, 18 Aug 2015 16:48:57 +0000',
          'friendly_name': 'Application Friendly Name',
          'message_status_callback': 'http://www.example.com/sms-status-callback',
          'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_fallback_method': 'GET',
          'sms_fallback_url': 'http://www.example.com/sms-fallback',
          'sms_method': 'GET',
          'sms_status_callback': 'http://www.example.com/sms-status-callback',
          'sms_url': 'http://example.com',
          'status_callback': 'http://example.com',
          'status_callback_method': 'GET',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'GET',
          'voice_fallback_url': 'http://www.example.com/voice-callback',
          'voice_method': 'GET',
          'voice_url': 'http://example.com'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications.create();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications/${sid}.json`;

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'date_created': 'Mon, 22 Aug 2011 20:59:45 +0000',
          'date_updated': 'Tue, 18 Aug 2015 16:48:57 +0000',
          'friendly_name': 'Application Friendly Name',
          'message_status_callback': 'http://www.example.com/sms-status-callback',
          'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_fallback_method': 'GET',
          'sms_fallback_url': 'http://www.example.com/sms-fallback',
          'sms_method': 'GET',
          'sms_status_callback': 'http://www.example.com/sms-status-callback',
          'sms_url': 'http://example.com',
          'status_callback': 'http://example.com',
          'status_callback_method': 'GET',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'GET',
          'voice_fallback_url': 'http://www.example.com/voice-callback',
          'voice_method': 'GET',
          'voice_url': 'http://example.com'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'applications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'date_created': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'date_updated': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'friendly_name': 'd8821fb7-4d01-48b2-bdc5-34e46252b90b',
                  'message_status_callback': null,
                  'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': null,
                  'sms_method': 'POST',
                  'sms_status_callback': null,
                  'sms_url': null,
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'previous_page_uri': null,
          'page_size': 1,
          'page': 0,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .applications.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'applications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'date_created': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'date_updated': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'friendly_name': 'd8821fb7-4d01-48b2-bdc5-34e46252b90b',
                  'message_status_callback': null,
                  'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': null,
                  'sms_method': 'POST',
                  'sms_status_callback': null,
                  'sms_url': null,
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'previous_page_uri': null,
          'page_size': 1,
          'page': 0,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .applications.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'applications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'date_created': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'date_updated': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'friendly_name': 'd8821fb7-4d01-48b2-bdc5-34e46252b90b',
                  'message_status_callback': null,
                  'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': null,
                  'sms_method': 'POST',
                  'sms_status_callback': null,
                  'sms_url': null,
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'previous_page_uri': null,
          'page_size': 1,
          'page': 0,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .applications.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'applications': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'date_created': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'date_updated': 'Fri, 21 Aug 2015 00:07:25 +0000',
                  'friendly_name': 'd8821fb7-4d01-48b2-bdc5-34e46252b90b',
                  'message_status_callback': null,
                  'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sms_fallback_method': 'POST',
                  'sms_fallback_url': null,
                  'sms_method': 'POST',
                  'sms_status_callback': null,
                  'sms_url': null,
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_caller_id_lookup': false,
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_url': null
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0',
          'next_page_uri': null,
          'previous_page_uri': null,
          'page_size': 1,
          'page': 0,
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = JSON.stringify({
          'applications': [],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0',
          'previous_page_uri': null,
          'page_size': 1,
          'start': 0,
          'next_page_uri': null,
          'page': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications.json?PageSize=1&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Applications/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'date_created': 'Mon, 22 Aug 2011 20:59:45 +0000',
          'date_updated': 'Tue, 18 Aug 2015 16:48:57 +0000',
          'friendly_name': 'Application Friendly Name',
          'message_status_callback': 'http://www.example.com/sms-status-callback',
          'sid': 'APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sms_fallback_method': 'GET',
          'sms_fallback_url': 'http://www.example.com/sms-fallback',
          'sms_method': 'GET',
          'sms_status_callback': 'http://www.example.com/sms-status-callback',
          'sms_url': 'http://example.com',
          'status_callback': 'http://example.com',
          'status_callback_method': 'GET',
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Applications/APaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_caller_id_lookup': false,
          'voice_fallback_method': 'GET',
          'voice_fallback_url': 'http://www.example.com/voice-callback',
          'voice_method': 'GET',
          'voice_url': 'http://example.com'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .applications('APXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
