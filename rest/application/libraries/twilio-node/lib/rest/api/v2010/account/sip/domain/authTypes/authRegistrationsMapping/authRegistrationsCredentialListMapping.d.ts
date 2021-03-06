/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../../../base/Page');
import Response = require('../../../../../../../../http/response');
import V2010 = require('../../../../../../V2010');
import { SerializableClass } from '../../../../../../../../interfaces';

/**
 * Initialize the AuthRegistrationsCredentialListMappingList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created the resource
 * @param domainSid - The unique string that identifies the resource
 */
declare function AuthRegistrationsCredentialListMappingList(version: V2010, accountSid: string, domainSid: string): AuthRegistrationsCredentialListMappingListInstance;

interface AuthRegistrationsCredentialListMappingListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AuthRegistrationsCredentialListMappingContext;
  /**
   * create a AuthRegistrationsCredentialListMappingInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: AuthRegistrationsCredentialListMappingListInstanceCreateOptions, callback?: (error: Error | null, item: AuthRegistrationsCredentialListMappingInstance) => any): Promise<AuthRegistrationsCredentialListMappingInstance>;
  /**
   * Streams AuthRegistrationsCredentialListMappingInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AuthRegistrationsCredentialListMappingListInstanceEachOptions, callback?: (item: AuthRegistrationsCredentialListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a auth_registrations_credential_list_mapping
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): AuthRegistrationsCredentialListMappingContext;
  /**
   * Retrieve a single target page of AuthRegistrationsCredentialListMappingInstance
   * records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingPage) => any): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Lists AuthRegistrationsCredentialListMappingInstance records from the API as a
   * list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AuthRegistrationsCredentialListMappingListInstanceOptions, callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingInstance[]) => any): Promise<AuthRegistrationsCredentialListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthRegistrationsCredentialListMappingInstance records
   * from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AuthRegistrationsCredentialListMappingListInstancePageOptions, callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingPage) => any): Promise<AuthRegistrationsCredentialListMappingPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property credentialListSid - The SID of the CredentialList resource to map to the SIP domain
 */
interface AuthRegistrationsCredentialListMappingListInstanceCreateOptions {
  credentialListSid: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface AuthRegistrationsCredentialListMappingListInstanceEachOptions {
  callback?: (item: AuthRegistrationsCredentialListMappingInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface AuthRegistrationsCredentialListMappingListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AuthRegistrationsCredentialListMappingListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AuthRegistrationsCredentialListMappingPayload extends AuthRegistrationsCredentialListMappingResource, Page.TwilioResponsePayload {
}

interface AuthRegistrationsCredentialListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

interface AuthRegistrationsCredentialListMappingSolution {
  accountSid?: string;
  domainSid?: string;
}


declare class AuthRegistrationsCredentialListMappingContext {
  /**
   * Initialize the AuthRegistrationsCredentialListMappingContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource to fetch
   * @param domainSid - The SID of the SIP domain that contains the resource to fetch
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, accountSid: string, domainSid: string, sid: string);

  /**
   * fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingInstance) => any): Promise<AuthRegistrationsCredentialListMappingInstance>;
  /**
   * remove a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AuthRegistrationsCredentialListMappingInstance extends SerializableClass {
  /**
   * Initialize the AuthRegistrationsCredentialListMappingContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created the resource
   * @param domainSid - The unique string that identifies the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2010, payload: AuthRegistrationsCredentialListMappingPayload, accountSid: string, domainSid: string, sid: string);

  private _proxy: AuthRegistrationsCredentialListMappingContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingInstance) => any): Promise<AuthRegistrationsCredentialListMappingInstance>;
  friendlyName: string;
  /**
   * remove a AuthRegistrationsCredentialListMappingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: AuthRegistrationsCredentialListMappingInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AuthRegistrationsCredentialListMappingPage extends Page<V2010, AuthRegistrationsCredentialListMappingPayload, AuthRegistrationsCredentialListMappingResource, AuthRegistrationsCredentialListMappingInstance> {
  /**
   * Initialize the AuthRegistrationsCredentialListMappingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AuthRegistrationsCredentialListMappingSolution);

  /**
   * Build an instance of AuthRegistrationsCredentialListMappingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthRegistrationsCredentialListMappingPayload): AuthRegistrationsCredentialListMappingInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AuthRegistrationsCredentialListMappingContext, AuthRegistrationsCredentialListMappingInstance, AuthRegistrationsCredentialListMappingList, AuthRegistrationsCredentialListMappingListInstance, AuthRegistrationsCredentialListMappingListInstanceCreateOptions, AuthRegistrationsCredentialListMappingListInstanceEachOptions, AuthRegistrationsCredentialListMappingListInstanceOptions, AuthRegistrationsCredentialListMappingListInstancePageOptions, AuthRegistrationsCredentialListMappingPage, AuthRegistrationsCredentialListMappingPayload, AuthRegistrationsCredentialListMappingResource, AuthRegistrationsCredentialListMappingSolution }
