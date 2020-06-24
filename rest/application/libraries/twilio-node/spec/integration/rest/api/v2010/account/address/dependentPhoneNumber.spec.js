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

describe('DependentPhoneNumber', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'dependent_phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '3197004499318',
                  'phone_number': '+3197004499318',
                  'voice_url': null,
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': 'POST',
                  'voice_caller_id_lookup': false,
                  'date_created': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'date_updated': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'address_requirements': 'any',
                  'capabilities': {
                      'Voice': false,
                      'SMS': true,
                      'MMS': false
                  },
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'api_version': '2010-04-01',
                  'voice_application_sid': null,
                  'sms_application_sid': '',
                  'trunk_sid': null,
                  'emergency_status': 'Inactive',
                  'emergency_address_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .dependentPhoneNumbers.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'dependent_phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '3197004499318',
                  'phone_number': '+3197004499318',
                  'voice_url': null,
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': 'POST',
                  'voice_caller_id_lookup': false,
                  'date_created': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'date_updated': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'address_requirements': 'any',
                  'capabilities': {
                      'Voice': false,
                      'SMS': true,
                      'MMS': false
                  },
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'api_version': '2010-04-01',
                  'voice_application_sid': null,
                  'sms_application_sid': '',
                  'trunk_sid': null,
                  'emergency_status': 'Inactive',
                  'emergency_address_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .dependentPhoneNumbers.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Addresses/${addressSid}/DependentPhoneNumbers.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'dependent_phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '3197004499318',
                  'phone_number': '+3197004499318',
                  'voice_url': null,
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': 'POST',
                  'voice_caller_id_lookup': false,
                  'date_created': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'date_updated': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'address_requirements': 'any',
                  'capabilities': {
                      'Voice': false,
                      'SMS': true,
                      'MMS': false
                  },
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'api_version': '2010-04-01',
                  'voice_application_sid': null,
                  'sms_application_sid': '',
                  'trunk_sid': null,
                  'emergency_status': 'Inactive',
                  'emergency_address_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .dependentPhoneNumbers.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .dependentPhoneNumbers.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var addressSid = 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Addresses/${addressSid}/DependentPhoneNumbers.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = JSON.stringify({
          'dependent_phone_numbers': [
              {
                  'sid': 'PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': '3197004499318',
                  'phone_number': '+3197004499318',
                  'voice_url': null,
                  'voice_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_fallback_method': 'POST',
                  'voice_caller_id_lookup': false,
                  'date_created': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'date_updated': 'Thu, 23 Feb 2017 10:26:31 -0800',
                  'sms_url': '',
                  'sms_method': 'POST',
                  'sms_fallback_url': '',
                  'sms_fallback_method': 'POST',
                  'address_requirements': 'any',
                  'capabilities': {
                      'Voice': false,
                      'SMS': true,
                      'MMS': false
                  },
                  'status_callback': '',
                  'status_callback_method': 'POST',
                  'api_version': '2010-04-01',
                  'voice_application_sid': null,
                  'sms_application_sid': '',
                  'trunk_sid': null,
                  'emergency_status': 'Inactive',
                  'emergency_address_sid': null,
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IncomingPhoneNumbers/PNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .dependentPhoneNumbers.list();
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
          'dependent_phone_numbers': [],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json?Page=0&PageSize=50',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Addresses/ADaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/DependentPhoneNumbers.json'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addresses('ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .dependentPhoneNumbers.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
