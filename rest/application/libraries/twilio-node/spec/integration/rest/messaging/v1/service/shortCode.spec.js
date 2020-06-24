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

describe('ShortCode', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var opts = {shortCodeSid: 'SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${serviceSid}/ShortCodes`;

      var values = {ShortCodeSid: 'SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', };
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
          'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:12:31Z',
          'date_updated': '2015-07-30T20:12:33Z',
          'short_code': '12345',
          'country_code': 'US',
          'capabilities': [],
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var opts = {shortCodeSid: 'SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes.create(opts);
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

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes('SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${serviceSid}/ShortCodes/${sid}`;

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

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes('SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'short_codes',
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0'
          },
          'short_codes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:12:31Z',
                  'date_updated': '2015-07-30T20:12:33Z',
                  'short_code': '12345',
                  'country_code': 'US',
                  'capabilities': [],
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .shortCodes.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'short_codes',
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0'
          },
          'short_codes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:12:31Z',
                  'date_updated': '2015-07-30T20:12:33Z',
                  'short_code': '12345',
                  'country_code': 'US',
                  'capabilities': [],
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .shortCodes.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/Services/${serviceSid}/ShortCodes',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'short_codes',
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0'
          },
          'short_codes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:12:31Z',
                  'date_updated': '2015-07-30T20:12:33Z',
                  'short_code': '12345',
                  'country_code': 'US',
                  'capabilities': [],
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .shortCodes.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${serviceSid}/ShortCodes`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'short_codes',
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes?PageSize=50&Page=0'
          },
          'short_codes': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2015-07-30T20:12:31Z',
                  'date_updated': '2015-07-30T20:12:33Z',
                  'short_code': '12345',
                  'country_code': 'US',
                  'capabilities': [],
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      });

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes('SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${serviceSid}/ShortCodes/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = JSON.stringify({
          'sid': 'SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:12:31Z',
          'date_updated': '2015-07-30T20:12:33Z',
          'short_code': '12345',
          'country_code': 'US',
          'capabilities': [],
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/ShortCodes/SCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .shortCodes('SCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});