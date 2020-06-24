/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the PublicKeyList
 *
 * @param version - Version of the resource
 */
declare function PublicKeyList(version: V1): PublicKeyListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the resource
 */
interface PublicKeyInstanceUpdateOptions {
  friendlyName?: string;
}

interface PublicKeyListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PublicKeyContext;
  /**
   * create a PublicKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: PublicKeyListInstanceCreateOptions, callback?: (error: Error | null, item: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
  /**
   * Streams PublicKeyInstance records from the API.
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
  each(opts?: PublicKeyListInstanceEachOptions, callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a public_key
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): PublicKeyContext;
  /**
   * Retrieve a single target page of PublicKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
  /**
   * Lists PublicKeyInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: PublicKeyListInstanceOptions, callback?: (error: Error | null, items: PublicKeyInstance[]) => any): Promise<PublicKeyInstance[]>;
  /**
   * Retrieve a single page of PublicKeyInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: PublicKeyListInstancePageOptions, callback?: (error: Error | null, items: PublicKeyPage) => any): Promise<PublicKeyPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property accountSid - The Subaccount this Credential should be associated with.
 * @property friendlyName - A string to describe the resource
 * @property publicKey - A URL encoded representation of the public key
 */
interface PublicKeyListInstanceCreateOptions {
  accountSid?: string;
  friendlyName?: string;
  publicKey: string;
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
interface PublicKeyListInstanceEachOptions {
  callback?: (item: PublicKeyInstance, done: (err?: Error) => void) => void;
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
interface PublicKeyListInstanceOptions {
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
interface PublicKeyListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface PublicKeyPayload extends PublicKeyResource, Page.TwilioResponsePayload {
}

interface PublicKeyResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  url: string;
}

interface PublicKeySolution {
}


declare class PublicKeyContext {
  /**
   * Initialize the PublicKeyContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
  /**
   * remove a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a PublicKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: PublicKeyInstanceUpdateOptions, callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
}


declare class PublicKeyInstance extends SerializableClass {
  /**
   * Initialize the PublicKeyContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: PublicKeyPayload, sid: string);

  private _proxy: PublicKeyContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
  friendlyName: string;
  /**
   * remove a PublicKeyInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a PublicKeyInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: PublicKeyInstanceUpdateOptions, callback?: (error: Error | null, items: PublicKeyInstance) => any): Promise<PublicKeyInstance>;
  url: string;
}


declare class PublicKeyPage extends Page<V1, PublicKeyPayload, PublicKeyResource, PublicKeyInstance> {
  /**
   * Initialize the PublicKeyPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: PublicKeySolution);

  /**
   * Build an instance of PublicKeyInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: PublicKeyPayload): PublicKeyInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { PublicKeyContext, PublicKeyInstance, PublicKeyInstanceUpdateOptions, PublicKeyList, PublicKeyListInstance, PublicKeyListInstanceCreateOptions, PublicKeyListInstanceEachOptions, PublicKeyListInstanceOptions, PublicKeyListInstancePageOptions, PublicKeyPage, PublicKeyPayload, PublicKeyResource, PublicKeySolution }
