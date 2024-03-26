/* tslint:disable */
/* eslint-disable */
/**
 * OpenProject API V3 (Stable)
 * You\'re looking at the current **stable** documentation of the OpenProject APIv3. If you\'re interested in the current development version, please go to [github.com/opf](https://github.com/opf/openproject/tree/dev/docs/api/apiv3).  ## Introduction  The documentation for the APIv3 is written according to the [OpenAPI 3.0 Specification](https://swagger.io/specification/). You can either view the static version of this documentation on the [website](https://www.openproject.org/docs/api/introduction/) or the interactive version, rendered with [OpenAPI Explorer](https://github.com/Rhosys/openapi-explorer/blob/main/README.md), in your OpenProject installation under `/api/docs`. In the latter you can try out the various API endpoints directly interacting with our OpenProject data. Moreover you can access the specification source itself under `/api/v3/spec.json` and `/api/v3/spec.yml` (e.g. [here](https://community.openproject.org/api/v3/spec.yml)).  The APIv3 is a hypermedia REST API, a shorthand for \"Hypermedia As The Engine Of Application State\" (HATEOAS). This means that each endpoint of this API will have links to other resources or actions defined in the resulting body.  These related resources and actions for any given resource will be context sensitive. For example, only actions that the authenticated user can take are being rendered. This can be used to dynamically identify actions that the user might take for any given response.  As an example, if you fetch a work package through the [Work Package endpoint](https://www.openproject.org/docs/api/endpoints/work-packages/), the `update` link will only be present when the user you authenticated has been granted a permission to update the work package in the assigned project.  ## HAL+JSON  HAL is a simple format that gives a consistent and easy way to hyperlink between resources in your API. Read more in the following specification: [https://tools.ietf.org/html/draft-kelly-json-hal-08](https://tools.ietf.org/html/draft-kelly-json-hal-08)  **OpenProject API implementation of HAL+JSON format** enriches JSON and introduces a few meta properties:  - `_type` - specifies the type of the resource (e.g.: WorkPackage, Project) - `_links` - contains all related resource and action links available for the resource - `_embedded` - contains all embedded objects  HAL does not guarantee that embedded resources are embedded in their full representation, they might as well be partially represented (e.g. some properties can be left out). However in this API you have the guarantee that whenever a resource is **embedded**, it is embedded in its **full representation**.  ## API response structure  All API responses contain a single HAL+JSON object, even collections of objects are technically represented by a single HAL+JSON object that itself contains its members. More details on collections can be found in the [Collections Section](https://www.openproject.org/docs/api/collections/).  ## Authentication  The API supports the following authentication schemes: OAuth2, session based authentication, and basic auth.  Depending on the settings of the OpenProject instance many resources can be accessed without being authenticated. In case the instance requires authentication on all requests the client will receive an **HTTP 401** status code in response to any request.  Otherwise unauthenticated clients have all the permissions of the anonymous user.  ### Session-based Authentication  This means you have to login to OpenProject via the Web-Interface to be authenticated in the API. This method is well-suited for clients acting within the browser, like the Angular-Client built into OpenProject.  In this case, you always need to pass the HTTP header `X-Requested-With \"XMLHttpRequest\"` for authentication.  ### API Key through Basic Auth  Users can authenticate towards the API v3 using basic auth with the user name `apikey` (NOT your login) and the API key as the password. Users can find their API key on their account page.  Example:  ```shell API_KEY=2519132cdf62dcf5a66fd96394672079f9e9cad1 curl -u apikey:$API_KEY https://community.openproject.org/api/v3/users/42 ```  ### OAuth2.0 authentication  OpenProject allows authentication and authorization with OAuth2 with *Authorization code flow*, as well as *Client credentials* operation modes.  To get started, you first need to register an application in the OpenProject OAuth administration section of your installation. This will save an entry for your application with a client unique identifier (`client_id`) and an accompanying secret key (`client_secret`).  You can then use one the following guides to perform the supported OAuth 2.0 flows:  - [Authorization code flow](https://oauth.net/2/grant-types/authorization-code)  - [Authorization code flow with PKCE](https://doorkeeper.gitbook.io/guides/ruby-on-rails/pkce-flow), recommended for clients unable to keep the client_secret confidential.  - [Client credentials](https://oauth.net/2/grant-types/client-credentials/) - Requires an application to be bound to an impersonating user for non-public access  ### Why not username and password?  The simplest way to do basic auth would be to use a user\'s username and password naturally. However, OpenProject already has supported API keys in the past for the API v2, though not through basic auth.  Using **username and password** directly would have some advantages:  * It is intuitive for the user who then just has to provide those just as they would when logging into OpenProject.  * No extra logic for token management necessary.  On the other hand using **API keys** has some advantages too, which is why we went for that:  * If compromised while saved on an insecure client the user only has to regenerate the API key instead of changing their password, too.  * They are naturally long and random which makes them invulnerable to dictionary attacks and harder to crack in general.  Most importantly users may not actually have a password to begin with. Specifically when they have registered through an OpenID Connect provider.  ## Cross-Origin Resource Sharing (CORS)  By default, the OpenProject API is _not_ responding with any CORS headers. If you want to allow cross-domain AJAX calls against your OpenProject instance, you need to enable CORS headers being returned.  Please see [our API settings documentation](https://www.openproject.org/docs/system-admin-guide/api-and-webhooks/) on how to selectively enable CORS.  ## Allowed HTTP methods  - `GET` - Get a single resource or collection of resources  - `POST` - Create a new resource or perform  - `PATCH` - Update a resource  - `DELETE` - Delete a resource  ## Compression  Responses are compressed if requested by the client. Currently [gzip](https://www.gzip.org/) and [deflate](https://tools.ietf.org/html/rfc1951) are supported. The client signals the desired compression by setting the [`Accept-Encoding` header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3). If no `Accept-Encoding` header is send, `Accept-Encoding: identity` is assumed which will result in the API responding uncompressed.
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddWatcherRequest,
  CommentWorkPackageRequest,
  ErrorResponse,
  FileLinkCollectionReadModel,
  FileLinkCollectionWriteModel,
  WatchersModel,
  WorkPackageModel,
  WorkPackagePatchModel,
  WorkPackagesModel,
} from '../models/index';
import {
    AddWatcherRequestFromJSON,
    AddWatcherRequestToJSON,
    CommentWorkPackageRequestFromJSON,
    CommentWorkPackageRequestToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    FileLinkCollectionReadModelFromJSON,
    FileLinkCollectionReadModelToJSON,
    FileLinkCollectionWriteModelFromJSON,
    FileLinkCollectionWriteModelToJSON,
    WatchersModelFromJSON,
    WatchersModelToJSON,
    WorkPackageModelFromJSON,
    WorkPackageModelToJSON,
    WorkPackagePatchModelFromJSON,
    WorkPackagePatchModelToJSON,
    WorkPackagesModelFromJSON,
    WorkPackagesModelToJSON,
    partialWorkPackageModelToJSON,
} from '../models/index';

export interface AddWatcherOperationRequest {
    id: number;
    addWatcherRequest?: AddWatcherRequest;
}

export interface AvailableProjectsForWorkPackageRequest {
    id: number;
}

export interface AvailableResponsiblesRequest {
    id: number;
}

export interface AvailableWatchersRequest {
    id: number;
}

export interface CommentWorkPackageOperationRequest {
    id: number;
    notify?: boolean;
    commentWorkPackageRequest?: CommentWorkPackageRequest;
}

export interface CreateProjectWorkPackageRequest {
    id: number;
    notify?: boolean;
}

export interface CreateRelationRequest {
    id: number;
}

export interface CreateWorkPackageRequest {
    notify?: boolean;
    workPackageModel?: WorkPackageModel;
}

export interface CreateWorkPackageFileLinkRequest {
    id: number;
    fileLinkCollectionWriteModel?: FileLinkCollectionWriteModel;
}

export interface DeleteWorkPackageRequest {
    id: number;
}

export interface GetProjectWorkPackageCollectionRequest {
    id: number;
    offset?: number;
    pageSize?: number;
    filters?: string;
    sortBy?: string;
    groupBy?: string;
    showSums?: boolean;
    select?: string;
}

export interface ListAvailableRelationCandidatesRequest {
    id: number;
    pageSize?: number;
    filters?: string;
    query?: string;
    type?: string;
    sortBy?: string;
}

export interface ListRelationsRequest {
    id: number;
}

export interface ListWatchersRequest {
    id: number;
}

export interface ListWorkPackageActivitiesRequest {
    id: number;
}

export interface ListWorkPackageFileLinksRequest {
    id: number;
    filters?: string;
}

export interface ListWorkPackageSchemasRequest {
    filters: string;
}

export interface ListWorkPackagesRequest {
    offset?: number;
    pageSize?: number;
    filters?: string;
    sortBy?: string;
    groupBy?: string;
    showSums?: boolean;
    select?: string;
    timestamps?: string;
}

export interface ProjectAvailableAssigneesRequest {
    id: number;
}

export interface RemoveWatcherRequest {
    id: number;
    userId: number;
}

export interface RevisionsRequest {
    id: number;
}

export interface UpdateWorkPackageRequest {
    id: number;
    notify?: boolean;
    workPackageModel?: WorkPackageModel;
}

export interface ViewWorkPackageRequest {
    id: number;
    timestamps?: string;
}

export interface ViewWorkPackageSchemaRequest {
    identifier: string;
}

export interface WorkPackageAvailableAssigneesRequest {
    id: number;
}

export interface WorkPackageCreateFormForProjectRequest {
    id: number;
}

export interface WorkPackageEditFormRequest {
    id: number;
    workPackageModel?: WorkPackageModel;
}

/**
 * 
 */
export class WorkPackagesApi extends runtime.BaseAPI {

    /**
     * Adds a watcher to the specified work package.  The request is expected to contain a single JSON object, that contains a link object under the `user` key.  The response will be user added as watcher. In case the user was already watching the work package an `HTTP 200` is returned, an `HTTP 201` if the user was added as a new watcher.
     * Add watcher
     */
    async addWatcherRaw(requestParameters: AddWatcherOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addWatcher.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/watchers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddWatcherRequestToJSON(requestParameters.addWatcherRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds a watcher to the specified work package.  The request is expected to contain a single JSON object, that contains a link object under the `user` key.  The response will be user added as watcher. In case the user was already watching the work package an `HTTP 200` is returned, an `HTTP 201` if the user was added as a new watcher.
     * Add watcher
     */
    async addWatcher(requestParameters: AddWatcherOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addWatcherRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a list of projects that are available as projects to which the work package can be moved.
     * Available projects for work package
     */
    async availableProjectsForWorkPackageRaw(requestParameters: AvailableProjectsForWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling availableProjectsForWorkPackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/available_projects`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of projects that are available as projects to which the work package can be moved.
     * Available projects for work package
     */
    async availableProjectsForWorkPackage(requestParameters: AvailableProjectsForWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.availableProjectsForWorkPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of users that can be assigned as the responsible of a work package in the given project.
     * Available responsibles
     */
    async availableResponsiblesRaw(requestParameters: AvailableResponsiblesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling availableResponsibles.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/available_responsibles`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of users that can be assigned as the responsible of a work package in the given project.
     * Available responsibles
     */
    async availableResponsibles(requestParameters: AvailableResponsiblesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.availableResponsiblesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of users that are able to be watchers of the specified work package.
     * Available watchers
     */
    async availableWatchersRaw(requestParameters: AvailableWatchersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling availableWatchers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/available_watchers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of users that are able to be watchers of the specified work package.
     * Available watchers
     */
    async availableWatchers(requestParameters: AvailableWatchersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.availableWatchersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates an activity for the selected work package and, on success, returns the updated activity.
     * Comment work package
     */
    async commentWorkPackageRaw(requestParameters: CommentWorkPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentWorkPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.notify !== undefined) {
            queryParameters['notify'] = requestParameters.notify;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/activities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommentWorkPackageRequestToJSON(requestParameters.commentWorkPackageRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates an activity for the selected work package and, on success, returns the updated activity.
     * Comment work package
     */
    async commentWorkPackage(requestParameters: CommentWorkPackageOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.commentWorkPackageRaw(requestParameters, initOverrides);
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create work package in project
     */
    async createProjectWorkPackageRaw(requestParameters: CreateProjectWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackageModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createProjectWorkPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.notify !== undefined) {
            queryParameters['notify'] = requestParameters.notify;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/work_packages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackageModelFromJSON(jsonValue));
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create work package in project
     */
    async createProjectWorkPackage(requestParameters: CreateProjectWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackageModel> {
        const response = await this.createProjectWorkPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a Relation can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create Relation
     */
    async createRelationRaw(requestParameters: CreateRelationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createRelation.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/relations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a Relation can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create Relation
     */
    async createRelation(requestParameters: CreateRelationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createRelationRaw(requestParameters, initOverrides);
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.  A project link must be set when creating work packages through this route.  When setting start date, finish date, and duration together, their correctness will be checked and a 422 error will be returned if one value does not match with the two others. You can make the server compute a value: set only two values in the request and the third one will be computed and returned in the response. For instance, when sending `{ \"startDate\": \"2022-08-23\", duration: \"P2D\" }`, the response will include `{ \"dueDate\": \"2022-08-24\" }`.
     * Create Work Package
     */
    async createWorkPackageRaw(requestParameters: CreateWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackageModel>> {
        const queryParameters: any = {};

        if (requestParameters.notify !== undefined) {
            queryParameters['notify'] = requestParameters.notify;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WorkPackageModelToJSON(requestParameters.workPackageModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackageModelFromJSON(jsonValue));
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a WorkPackage can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.  A project link must be set when creating work packages through this route.  When setting start date, finish date, and duration together, their correctness will be checked and a 422 error will be returned if one value does not match with the two others. You can make the server compute a value: set only two values in the request and the third one will be computed and returned in the response. For instance, when sending `{ \"startDate\": \"2022-08-23\", duration: \"P2D\" }`, the response will include `{ \"dueDate\": \"2022-08-24\" }`.
     * Create Work Package
     */
    async createWorkPackage(requestParameters: CreateWorkPackageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackageModel> {
        const response = await this.createWorkPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates file links on a work package.  The request is interpreted as a bulk insert, where every element of the collection is validated separately. Each element contains the origin meta data and a link to the storage, the file link is about to point to. The storage link can be provided as a resource link with id or as the host url.  The file\'s id and name are considered mandatory information. The rest of the origin meta data SHOULD be provided by the client. The _mimeType_ SHOULD be a standard mime type. An empty mime type will be handled as unknown. To link a folder, the custom mime type `application/x-op-directory` MUST be used.  Up to 20 file links can be submitted at once.  If any element data is invalid, no file links will be created.  If a file link with matching origin id, work package, and storage already exists, then it will not create an additional file link or update the meta data. Instead the information from the existing file link will be returned.
     * Creates file links.
     */
    async createWorkPackageFileLinkRaw(requestParameters: CreateWorkPackageFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileLinkCollectionReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createWorkPackageFileLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/file_links`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: FileLinkCollectionWriteModelToJSON(requestParameters.fileLinkCollectionWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileLinkCollectionReadModelFromJSON(jsonValue));
    }

    /**
     * Creates file links on a work package.  The request is interpreted as a bulk insert, where every element of the collection is validated separately. Each element contains the origin meta data and a link to the storage, the file link is about to point to. The storage link can be provided as a resource link with id or as the host url.  The file\'s id and name are considered mandatory information. The rest of the origin meta data SHOULD be provided by the client. The _mimeType_ SHOULD be a standard mime type. An empty mime type will be handled as unknown. To link a folder, the custom mime type `application/x-op-directory` MUST be used.  Up to 20 file links can be submitted at once.  If any element data is invalid, no file links will be created.  If a file link with matching origin id, work package, and storage already exists, then it will not create an additional file link or update the meta data. Instead the information from the existing file link will be returned.
     * Creates file links.
     */
    async createWorkPackageFileLink(requestParameters: CreateWorkPackageFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileLinkCollectionReadModel> {
        const response = await this.createWorkPackageFileLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the work package, as well as:  - all associated time entries - its hierarchy of child work packages
     * Delete Work Package
     */
    async deleteWorkPackageRaw(requestParameters: DeleteWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteWorkPackage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the work package, as well as:  - all associated time entries - its hierarchy of child work packages
     * Delete Work Package
     */
    async deleteWorkPackage(requestParameters: DeleteWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorkPackageRaw(requestParameters, initOverrides);
    }

    /**
     * Returns the collection of work packages that are related to the given project.
     * Get work packages of project
     */
    async getProjectWorkPackageCollectionRaw(requestParameters: GetProjectWorkPackageCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackagesModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjectWorkPackageCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['groupBy'] = requestParameters.groupBy;
        }

        if (requestParameters.showSums !== undefined) {
            queryParameters['showSums'] = requestParameters.showSums;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/work_packages`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackagesModelFromJSON(jsonValue));
    }

    /**
     * Returns the collection of work packages that are related to the given project.
     * Get work packages of project
     */
    async getProjectWorkPackageCollection(requestParameters: GetProjectWorkPackageCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackagesModel> {
        const response = await this.getProjectWorkPackageCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Available relation candidates
     */
    async listAvailableRelationCandidatesRaw(requestParameters: ListAvailableRelationCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAvailableRelationCandidates.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/available_relation_candidates`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * Available relation candidates
     */
    async listAvailableRelationCandidates(requestParameters: ListAvailableRelationCandidatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.listAvailableRelationCandidatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all relations this work package is involved in.
     * List relations
     */
    async listRelationsRaw(requestParameters: ListRelationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listRelations.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/relations`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Lists all relations this work package is involved in.
     * List relations
     */
    async listRelations(requestParameters: ListRelationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.listRelationsRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * List watchers
     */
    async listWatchersRaw(requestParameters: ListWatchersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WatchersModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listWatchers.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/watchers`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WatchersModelFromJSON(jsonValue));
    }

    /**
     * 
     * List watchers
     */
    async listWatchers(requestParameters: ListWatchersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WatchersModel> {
        const response = await this.listWatchersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * List work package activities
     */
    async listWorkPackageActivitiesRaw(requestParameters: ListWorkPackageActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listWorkPackageActivities.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/activities`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * List work package activities
     */
    async listWorkPackageActivities(requestParameters: ListWorkPackageActivitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.listWorkPackageActivitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets all file links of a work package.  As a side effect, for every file link a request is sent to the storage\'s origin to fetch live data and patch the file link\'s data before returning, as well as retrieving permissions of the user on this origin file. 
     * Gets all file links of a work package
     */
    async listWorkPackageFileLinksRaw(requestParameters: ListWorkPackageFileLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileLinkCollectionReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listWorkPackageFileLinks.');
        }

        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/file_links`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileLinkCollectionReadModelFromJSON(jsonValue));
    }

    /**
     * Gets all file links of a work package.  As a side effect, for every file link a request is sent to the storage\'s origin to fetch live data and patch the file link\'s data before returning, as well as retrieving permissions of the user on this origin file. 
     * Gets all file links of a work package
     */
    async listWorkPackageFileLinks(requestParameters: ListWorkPackageFileLinksRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileLinkCollectionReadModel> {
        const response = await this.listWorkPackageFileLinksRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List work package schemas.
     * List Work Package Schemas
     */
    async listWorkPackageSchemasRaw(requestParameters: ListWorkPackageSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.filters === null || requestParameters.filters === undefined) {
            throw new runtime.RequiredError('filters','Required parameter requestParameters.filters was null or undefined when calling listWorkPackageSchemas.');
        }

        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/schemas`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List work package schemas.
     * List Work Package Schemas
     */
    async listWorkPackageSchemas(requestParameters: ListWorkPackageSchemasRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.listWorkPackageSchemasRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a collection of work packages.
     * List work packages
     */
    async listWorkPackagesRaw(requestParameters: ListWorkPackagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackagesModel>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        if (requestParameters.groupBy !== undefined) {
            queryParameters['groupBy'] = requestParameters.groupBy;
        }

        if (requestParameters.showSums !== undefined) {
            queryParameters['showSums'] = requestParameters.showSums;
        }

        if (requestParameters.select !== undefined) {
            queryParameters['select'] = requestParameters.select;
        }

        if (requestParameters.timestamps !== undefined) {
            queryParameters['timestamps'] = requestParameters.timestamps;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackagesModelFromJSON(jsonValue));
    }

    /**
     * Returns a collection of work packages.
     * List work packages
     */
    async listWorkPackages(requestParameters: ListWorkPackagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackagesModel> {
        const response = await this.listWorkPackagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of users that can be assigned to work packages in the given project.
     * Project Available assignees
     */
    async projectAvailableAssigneesRaw(requestParameters: ProjectAvailableAssigneesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling projectAvailableAssignees.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/available_assignees`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of users that can be assigned to work packages in the given project.
     * Project Available assignees
     */
    async projectAvailableAssignees(requestParameters: ProjectAvailableAssigneesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.projectAvailableAssigneesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removes the specified user from the list of watchers for the given work package.  If the request succeeds, the specified user is not watching the work package anymore.  *Note: This might also be the case, if the specified user did not watch the work package prior to the request.*
     * Remove watcher
     */
    async removeWatcherRaw(requestParameters: RemoveWatcherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling removeWatcher.');
        }

        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling removeWatcher.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/watchers/{user_id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))).replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes the specified user from the list of watchers for the given work package.  If the request succeeds, the specified user is not watching the work package anymore.  *Note: This might also be the case, if the specified user did not watch the work package prior to the request.*
     * Remove watcher
     */
    async removeWatcher(requestParameters: RemoveWatcherRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeWatcherRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a list of revisions that are linked to this work package, e.g., because it is referenced in the commit message of the revision. Only linked revisions from repositories are shown if the user has the view changesets permission in the defining project.
     * Revisions
     */
    async revisionsRaw(requestParameters: RevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling revisions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/revisions`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of revisions that are linked to this work package, e.g., because it is referenced in the commit message of the revision. Only linked revisions from repositories are shown if the user has the view changesets permission in the defining project.
     * Revisions
     */
    async revisions(requestParameters: RevisionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.revisionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants to change, in the body. Note that it is only allowed to provide properties or links supporting the **write** operation.  Additionally to the fields the client wants to change, it is mandatory to provide the value of `lockVersion` which was received by the `GET` request this change originates from.  The value of `lockVersion` is used to implement [optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control).
     * Update a Work Package
     */
    async updateWorkPackageRaw(requestParameters: UpdateWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackagePatchModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateWorkPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.notify !== undefined) {
            queryParameters['notify'] = requestParameters.notify;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WorkPackageModelToJSON(requestParameters.workPackageModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackagePatchModelFromJSON(jsonValue));
    }

    /**
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants to change, in the body. Note that it is only allowed to provide properties or links supporting the **write** operation.  Additionally to the fields the client wants to change, it is mandatory to provide the value of `lockVersion` which was received by the `GET` request this change originates from.  The value of `lockVersion` is used to implement [optimistic locking](https://en.wikipedia.org/wiki/Optimistic_concurrency_control).
     * Update a Work Package
     */
    async updateWorkPackage(requestParameters: UpdateWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackagePatchModel> {
        const response = await this.updateWorkPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the specified work package.
     * View Work Package
     */
    async viewWorkPackageRaw(requestParameters: ViewWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkPackageModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewWorkPackage.');
        }

        const queryParameters: any = {};

        if (requestParameters.timestamps !== undefined) {
            queryParameters['timestamps'] = requestParameters.timestamps;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkPackageModelFromJSON(jsonValue));
    }

    /**
     * Returns the specified work package.
     * View Work Package
     */
    async viewWorkPackage(requestParameters: ViewWorkPackageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkPackageModel> {
        const response = await this.viewWorkPackageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * View Work Package Schema
     */
    async viewWorkPackageSchemaRaw(requestParameters: ViewWorkPackageSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.identifier === null || requestParameters.identifier === undefined) {
            throw new runtime.RequiredError('identifier','Required parameter requestParameters.identifier was null or undefined when calling viewWorkPackageSchema.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/schemas/{identifier}`.replace(`{${"identifier"}}`, encodeURIComponent(String(requestParameters.identifier))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * View Work Package Schema
     */
    async viewWorkPackageSchema(requestParameters: ViewWorkPackageSchemaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.viewWorkPackageSchemaRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a list of users that can be assigned to the given work package.
     * Work Package Available assignees
     */
    async workPackageAvailableAssigneesRaw(requestParameters: WorkPackageAvailableAssigneesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling workPackageAvailableAssignees.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/available_assignees`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of users that can be assigned to the given work package.
     * Work Package Available assignees
     */
    async workPackageAvailableAssignees(requestParameters: WorkPackageAvailableAssigneesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.workPackageAvailableAssigneesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Work Package Create Form
     */
    async workPackageCreateFormRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/form`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Work Package Create Form
     */
    async workPackageCreateForm(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.workPackageCreateFormRaw(initOverrides);
    }

    /**
     * 
     * Work Package Create Form For Project
     */
    async workPackageCreateFormForProjectRaw(requestParameters: WorkPackageCreateFormForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling workPackageCreateFormForProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/work_packages/form`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Work Package Create Form For Project
     */
    async workPackageCreateFormForProject(requestParameters: WorkPackageCreateFormForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.workPackageCreateFormForProjectRaw(requestParameters, initOverrides);
    }

    /**
     * When calling this endpoint, the client provides a single object containing the properties and links to be edited, in the body.  Note that it is only allowed to provide properties or links supporting the write operation.  When setting start date, finish date, and duration together, their correctness will be checked and a 422 error will be returned if one value does not match with the two others. You can make the server compute a value: set only two values in the request and the third one will be computed and returned in the response. For instance, when sending `{ \"startDate\": \"2022-08-23\", duration: \"P2D\" }`, the response will include `{ \"dueDate\": \"2022-08-24\" }`.
     * Work Package Edit Form
     */
    async workPackageEditFormRaw(requestParameters: WorkPackageEditFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling workPackageEditForm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/form`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WorkPackageModelToJSON(requestParameters.workPackageModel),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * When calling this endpoint, the client provides a single object containing the properties and links to be edited, in the body.  Note that it is only allowed to provide properties or links supporting the write operation.  When setting start date, finish date, and duration together, their correctness will be checked and a 422 error will be returned if one value does not match with the two others. You can make the server compute a value: set only two values in the request and the third one will be computed and returned in the response. For instance, when sending `{ \"startDate\": \"2022-08-23\", duration: \"P2D\" }`, the response will include `{ \"dueDate\": \"2022-08-24\" }`.
     * Work Package Edit Form
     */
    async workPackageEditForm(requestParameters: WorkPackageEditFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.workPackageEditFormRaw(requestParameters, initOverrides);
    }

}
