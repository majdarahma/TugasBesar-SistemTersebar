/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ActivityList } from './workspace/activity';
import { ActivityListInstance } from './workspace/activity';
import { EventList } from './workspace/event';
import { EventListInstance } from './workspace/event';
import { SerializableClass } from '../../../interfaces';
import { TaskChannelList } from './workspace/taskChannel';
import { TaskChannelListInstance } from './workspace/taskChannel';
import { TaskList } from './workspace/task';
import { TaskListInstance } from './workspace/task';
import { TaskQueueList } from './workspace/taskQueue';
import { TaskQueueListInstance } from './workspace/taskQueue';
import { WorkerList } from './workspace/worker';
import { WorkerListInstance } from './workspace/worker';
import { WorkflowList } from './workspace/workflow';
import { WorkflowListInstance } from './workspace/workflow';
import { WorkspaceCumulativeStatisticsList } from './workspace/workspaceCumulativeStatistics';
import { WorkspaceCumulativeStatisticsListInstance } from './workspace/workspaceCumulativeStatistics';
import { WorkspaceRealTimeStatisticsList } from './workspace/workspaceRealTimeStatistics';
import { WorkspaceRealTimeStatisticsListInstance } from './workspace/workspaceRealTimeStatistics';
import { WorkspaceStatisticsList } from './workspace/workspaceStatistics';
import { WorkspaceStatisticsListInstance } from './workspace/workspaceStatistics';

type WorkspaceQueueOrder = 'FIFO'|'LIFO';

/**
 * Initialize the WorkspaceList
 *
 * @param version - Version of the resource
 */
declare function WorkspaceList(version: V1): WorkspaceListInstance;

/**
 * Options to pass to update
 *
 * @property defaultActivitySid - The SID of the Activity that will be used when new Workers are created in the Workspace
 * @property eventCallbackUrl - The URL we should call when an event occurs
 * @property eventsFilter - The list of Workspace events for which to call event_callback_url
 * @property friendlyName - A string to describe the Workspace resource
 * @property multiTaskEnabled - Whether multi-tasking is enabled
 * @property prioritizeQueueOrder - The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of TaskQueues
 * @property timeoutActivitySid - The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response
 */
interface WorkspaceInstanceUpdateOptions {
  defaultActivitySid?: string;
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName?: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: WorkspaceQueueOrder;
  timeoutActivitySid?: string;
}

interface WorkspaceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkspaceContext;
  /**
   * create a WorkspaceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkspaceListInstanceCreateOptions, callback?: (error: Error | null, item: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  /**
   * Streams WorkspaceInstance records from the API.
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
  each(opts?: WorkspaceListInstanceEachOptions, callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a workspace
   *
   * @param sid - The SID of the resource to fetch
   */
  get(sid: string): WorkspaceContext;
  /**
   * Retrieve a single target page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  /**
   * Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkspaceListInstanceOptions, callback?: (error: Error | null, items: WorkspaceInstance[]) => any): Promise<WorkspaceInstance[]>;
  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkspaceListInstancePageOptions, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property eventCallbackUrl - The URL we should call when an event occurs
 * @property eventsFilter - The list of Workspace events for which to call event_callback_url
 * @property friendlyName - A string to describe the Workspace resource
 * @property multiTaskEnabled - Whether multi-tasking is enabled
 * @property prioritizeQueueOrder - The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of TaskQueues
 * @property template - An available template name
 */
interface WorkspaceListInstanceCreateOptions {
  eventCallbackUrl?: string;
  eventsFilter?: string;
  friendlyName: string;
  multiTaskEnabled?: boolean;
  prioritizeQueueOrder?: WorkspaceQueueOrder;
  template?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - The friendly_name of the Workspace resources to read
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
interface WorkspaceListInstanceEachOptions {
  callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - The friendly_name of the Workspace resources to read
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
interface WorkspaceListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - The friendly_name of the Workspace resources to read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface WorkspaceListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface WorkspacePayload extends WorkspaceResource, Page.TwilioResponsePayload {
}

interface WorkspaceResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  default_activity_name: string;
  default_activity_sid: string;
  event_callback_url: string;
  events_filter: string;
  friendly_name: string;
  links: string;
  multi_task_enabled: boolean;
  prioritize_queue_order: WorkspaceQueueOrder;
  sid: string;
  timeout_activity_name: string;
  timeout_activity_sid: string;
  url: string;
}

interface WorkspaceSolution {
}


declare class WorkspaceContext {
  /**
   * Initialize the WorkspaceContext
   *
   * @param version - Version of the resource
   * @param sid - The SID of the resource to fetch
   */
  constructor(version: V1, sid: string);

  activities: ActivityListInstance;
  cumulativeStatistics: WorkspaceCumulativeStatisticsListInstance;
  events: EventListInstance;
  /**
   * fetch a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  realTimeStatistics: WorkspaceRealTimeStatisticsListInstance;
  /**
   * remove a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<boolean>;
  statistics: WorkspaceStatisticsListInstance;
  taskChannels: TaskChannelListInstance;
  taskQueues: TaskQueueListInstance;
  tasks: TaskListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkspaceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkspaceInstanceUpdateOptions, callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  workers: WorkerListInstance;
  workflows: WorkflowListInstance;
}


declare class WorkspaceInstance extends SerializableClass {
  /**
   * Initialize the WorkspaceContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the resource to fetch
   */
  constructor(version: V1, payload: WorkspacePayload, sid: string);

  private _proxy: WorkspaceContext;
  accountSid: string;
  /**
   * Access the activities
   */
  activities(): ActivityListInstance;
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  defaultActivityName: string;
  defaultActivitySid: string;
  eventCallbackUrl: string;
  /**
   * Access the events
   */
  events(): EventListInstance;
  eventsFilter: string;
  /**
   * fetch a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  friendlyName: string;
  links: string;
  multiTaskEnabled: boolean;
  prioritizeQueueOrder: WorkspaceQueueOrder;
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance;
  /**
   * remove a WorkspaceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Access the statistics
   */
  statistics(): WorkspaceStatisticsListInstance;
  /**
   * Access the taskChannels
   */
  taskChannels(): TaskChannelListInstance;
  /**
   * Access the taskQueues
   */
  taskQueues(): TaskQueueListInstance;
  /**
   * Access the tasks
   */
  tasks(): TaskListInstance;
  timeoutActivityName: string;
  timeoutActivitySid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WorkspaceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkspaceInstanceUpdateOptions, callback?: (error: Error | null, items: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  url: string;
  /**
   * Access the workers
   */
  workers(): WorkerListInstance;
  /**
   * Access the workflows
   */
  workflows(): WorkflowListInstance;
}


declare class WorkspacePage extends Page<V1, WorkspacePayload, WorkspaceResource, WorkspaceInstance> {
  /**
   * Initialize the WorkspacePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkspaceSolution);

  /**
   * Build an instance of WorkspaceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkspacePayload): WorkspaceInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WorkspaceContext, WorkspaceInstance, WorkspaceInstanceUpdateOptions, WorkspaceList, WorkspaceListInstance, WorkspaceListInstanceCreateOptions, WorkspaceListInstanceEachOptions, WorkspaceListInstanceOptions, WorkspaceListInstancePageOptions, WorkspacePage, WorkspacePayload, WorkspaceQueueOrder, WorkspaceResource, WorkspaceSolution }
