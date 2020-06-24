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

describe('AuthorizedConnectApp', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .authorizedConnectApps('CNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var connectAppSid = 'CNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/AuthorizedConnectApps/${connectAppSid}.json`;

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
          'connect_app_company_name': 'aaa',
          'connect_app_description': 'alksjdfl;ajseifj;alsijfl;ajself;jasjfjas;lejflj',
          'connect_app_friendly_name': 'aaa',
          'connect_app_homepage_url': 'http://www.google.com',
          'connect_app_sid': 'CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
          'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
          'permissions': [
              'get-all'
          ],
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps/CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .authorizedConnectApps('CNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'authorized_connect_apps': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'connect_app_company_name': 'YOUR OTHER MOM',
                  'connect_app_description': 'alksjdfl;ajseifj;alsijfl;ajself;jasjfjas;lejflj',
                  'connect_app_friendly_name': 'YOUR MOM',
                  'connect_app_homepage_url': 'http://www.google.com',
                  'connect_app_sid': 'CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
                  'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
                  'permissions': [
                      'get-all'
                  ],
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps/CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .authorizedConnectApps.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'authorized_connect_apps': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'connect_app_company_name': 'YOUR OTHER MOM',
                  'connect_app_description': 'alksjdfl;ajseifj;alsijfl;ajself;jasjfjas;lejflj',
                  'connect_app_friendly_name': 'YOUR MOM',
                  'connect_app_homepage_url': 'http://www.google.com',
                  'connect_app_sid': 'CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
                  'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
                  'permissions': [
                      'get-all'
                  ],
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps/CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .authorizedConnectApps.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/AuthorizedConnectApps.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'authorized_connect_apps': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'connect_app_company_name': 'YOUR OTHER MOM',
                  'connect_app_description': 'alksjdfl;ajseifj;alsijfl;ajself;jasjfjas;lejflj',
                  'connect_app_friendly_name': 'YOUR MOM',
                  'connect_app_homepage_url': 'http://www.google.com',
                  'connect_app_sid': 'CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
                  'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
                  'permissions': [
                      'get-all'
                  ],
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps/CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .authorizedConnectApps.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .authorizedConnectApps.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/AuthorizedConnectApps.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'authorized_connect_apps': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'connect_app_company_name': 'YOUR OTHER MOM',
                  'connect_app_description': 'alksjdfl;ajseifj;alsijfl;ajself;jasjfjas;lejflj',
                  'connect_app_friendly_name': 'YOUR MOM',
                  'connect_app_homepage_url': 'http://www.google.com',
                  'connect_app_sid': 'CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Tue, 31 Aug 2010 20:36:28 +0000',
                  'date_updated': 'Tue, 31 Aug 2010 20:36:44 +0000',
                  'permissions': [
                      'get-all'
                  ],
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps/CNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .authorizedConnectApps.list();
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
          'authorized_connect_apps': [],
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'last_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'num_pages': 1,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'start': 0,
          'total': 1,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AuthorizedConnectApps.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .authorizedConnectApps.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
