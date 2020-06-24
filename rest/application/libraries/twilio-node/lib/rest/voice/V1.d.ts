/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import Voice = require('../Voice');
import { DialingPermissionsList } from './v1/dialingPermissions';
import { DialingPermissionsListInstance } from './v1/dialingPermissions';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Voice
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Voice);

  readonly dialingPermissions: DialingPermissionsListInstance;
}

export = V1;
