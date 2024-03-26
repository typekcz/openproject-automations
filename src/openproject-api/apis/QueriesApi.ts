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
  ErrorResponse,
  QueryCreateForm,
  QueryModel,
  QueryUpdateForm,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    QueryCreateFormFromJSON,
    QueryCreateFormToJSON,
    QueryModelFromJSON,
    QueryModelToJSON,
    QueryUpdateFormFromJSON,
    QueryUpdateFormToJSON,
} from '../models/index';

export interface CreateQueryRequest {
    queryCreateForm?: QueryCreateForm;
}

export interface DeleteQueryRequest {
    id: number;
}

export interface EditQueryRequest {
    id: number;
    queryUpdateForm?: QueryUpdateForm;
}

export interface ListQueriesRequest {
    filters?: string;
}

export interface QueryCreateFormRequest {
    queryCreateForm?: QueryCreateForm;
}

export interface QueryUpdateFormRequest {
    id: number;
    queryUpdateForm?: QueryUpdateForm;
}

export interface StarQueryRequest {
    id: number;
}

export interface UnstarQueryRequest {
    id: number;
}

export interface ViewDefaultQueryRequest {
    filters?: string;
    offset?: number;
    pageSize?: number;
    sortBy?: string;
    groupBy?: string;
    showSums?: boolean;
    timestamps?: string;
    timelineVisible?: boolean;
    timelineZoomLevel?: string;
    showHierarchies?: boolean;
}

export interface ViewDefaultQueryForProjectRequest {
    id: number;
    filters?: string;
    offset?: number;
    pageSize?: number;
    sortBy?: string;
    groupBy?: string;
    showSums?: boolean;
    timestamps?: string;
    timelineVisible?: boolean;
    showHierarchies?: boolean;
}

export interface ViewQueryRequest {
    id: number;
    filters?: string;
    offset?: number;
    pageSize?: number;
    columns?: string;
    sortBy?: string;
    groupBy?: string;
    showSums?: boolean;
    timestamps?: string;
    timelineVisible?: boolean;
    timelineLabels?: string;
    highlightingMode?: string;
    highlightedAttributes?: string;
    showHierarchies?: boolean;
}

export interface ViewSchemaForProjectQueriesRequest {
    id: number;
}

/**
 * 
 */
export class QueriesApi extends runtime.BaseAPI {

    /**
     * Gets a list of projects that are available as projects a query can be assigned to.
     * Available projects for query
     */
    async availableProjectsForQueryRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/available_projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Gets a list of projects that are available as projects a query can be assigned to.
     * Available projects for query
     */
    async availableProjectsForQuery(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.availableProjectsForQueryRaw(initOverrides);
        return await response.value();
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a Query can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create query
     */
    async createQueryRaw(requestParameters: CreateQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryCreateFormToJSON(requestParameters.queryCreateForm),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryModelFromJSON(jsonValue));
    }

    /**
     * When calling this endpoint the client provides a single object, containing at least the properties and links that are required, in the body. The required fields of a Query can be found in its schema, which is embedded in the respective form. Note that it is only allowed to provide properties or links supporting the write operation.
     * Create query
     */
    async createQuery(requestParameters: CreateQueryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryModel> {
        const response = await this.createQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete the query identified by the id parameter
     * Delete query
     */
    async deleteQueryRaw(requestParameters: DeleteQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteQuery.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete the query identified by the id parameter
     * Delete query
     */
    async deleteQuery(requestParameters: DeleteQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteQueryRaw(requestParameters, initOverrides);
    }

    /**
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants to change, in the body. Note that it is only allowed to provide properties or links supporting the **write** operation.
     * Edit Query
     */
    async editQueryRaw(requestParameters: EditQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling editQuery.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: QueryUpdateFormToJSON(requestParameters.queryUpdateForm),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryModelFromJSON(jsonValue));
    }

    /**
     * When calling this endpoint the client provides a single object, containing the properties and links that it wants to change, in the body. Note that it is only allowed to provide properties or links supporting the **write** operation.
     * Edit Query
     */
    async editQuery(requestParameters: EditQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryModel> {
        const response = await this.editQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a collection of queries. The collection can be filtered via query parameters similar to how work packages are filtered. Please note however, that the filters are applied to the queries and not to the work packages the queries in turn might return.
     * List queries
     */
    async listQueriesRaw(requestParameters: ListQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a collection of queries. The collection can be filtered via query parameters similar to how work packages are filtered. Please note however, that the filters are applied to the queries and not to the work packages the queries in turn might return.
     * List queries
     */
    async listQueries(requestParameters: ListQueriesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.listQueriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Query Create Form
     */
    async queryCreateFormRaw(requestParameters: QueryCreateFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/form`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryCreateFormToJSON(requestParameters.queryCreateForm),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Query Create Form
     */
    async queryCreateForm(requestParameters: QueryCreateFormRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.queryCreateFormRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Query Update Form
     */
    async queryUpdateFormRaw(requestParameters: QueryUpdateFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling queryUpdateForm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}/form`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryUpdateFormToJSON(requestParameters.queryUpdateForm),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 
     * Query Update Form
     */
    async queryUpdateForm(requestParameters: QueryUpdateFormRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.queryUpdateFormRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * Star query
     */
    async starQueryRaw(requestParameters: StarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling starQuery.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}/star`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * Star query
     */
    async starQuery(requestParameters: StarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.starQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * Unstar query
     */
    async unstarQueryRaw(requestParameters: UnstarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling unstarQuery.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}/unstar`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * 
     * Unstar query
     */
    async unstarQuery(requestParameters: UnstarQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.unstarQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query.
     * View default query
     */
    async viewDefaultQueryRaw(requestParameters: ViewDefaultQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
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

        if (requestParameters.timestamps !== undefined) {
            queryParameters['timestamps'] = requestParameters.timestamps;
        }

        if (requestParameters.timelineVisible !== undefined) {
            queryParameters['timelineVisible'] = requestParameters.timelineVisible;
        }

        if (requestParameters.timelineZoomLevel !== undefined) {
            queryParameters['timelineZoomLevel'] = requestParameters.timelineZoomLevel;
        }

        if (requestParameters.showHierarchies !== undefined) {
            queryParameters['showHierarchies'] = requestParameters.showHierarchies;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/default`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query.
     * View default query
     */
    async viewDefaultQuery(requestParameters: ViewDefaultQueryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.viewDefaultQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query. The query will already be scoped for the project.
     * View default query for project
     */
    async viewDefaultQueryForProjectRaw(requestParameters: ViewDefaultQueryForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewDefaultQueryForProject.');
        }

        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
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

        if (requestParameters.timestamps !== undefined) {
            queryParameters['timestamps'] = requestParameters.timestamps;
        }

        if (requestParameters.timelineVisible !== undefined) {
            queryParameters['timelineVisible'] = requestParameters.timelineVisible;
        }

        if (requestParameters.showHierarchies !== undefined) {
            queryParameters['showHierarchies'] = requestParameters.showHierarchies;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/queries/default`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Same as [viewing an existing, persisted Query](https://www.openproject.org/docs/api/endpoints/queries/#list-queries) in its response, this resource returns an unpersisted query and by that allows to get the default query configuration. The client may also provide additional parameters which will modify the default query. The query will already be scoped for the project.
     * View default query for project
     */
    async viewDefaultQueryForProject(requestParameters: ViewDefaultQueryForProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.viewDefaultQueryForProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an individual query as identified by the id parameter. Then end point accepts a number of parameters that can be used to override the resources\' persisted parameters.
     * View query
     */
    async viewQueryRaw(requestParameters: ViewQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QueryModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.columns !== undefined) {
            queryParameters['columns'] = requestParameters.columns;
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

        if (requestParameters.timestamps !== undefined) {
            queryParameters['timestamps'] = requestParameters.timestamps;
        }

        if (requestParameters.timelineVisible !== undefined) {
            queryParameters['timelineVisible'] = requestParameters.timelineVisible;
        }

        if (requestParameters.timelineLabels !== undefined) {
            queryParameters['timelineLabels'] = requestParameters.timelineLabels;
        }

        if (requestParameters.highlightingMode !== undefined) {
            queryParameters['highlightingMode'] = requestParameters.highlightingMode;
        }

        if (requestParameters.highlightedAttributes !== undefined) {
            queryParameters['highlightedAttributes'] = requestParameters.highlightedAttributes;
        }

        if (requestParameters.showHierarchies !== undefined) {
            queryParameters['showHierarchies'] = requestParameters.showHierarchies;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryModelFromJSON(jsonValue));
    }

    /**
     * Retrieve an individual query as identified by the id parameter. Then end point accepts a number of parameters that can be used to override the resources\' persisted parameters.
     * View query
     */
    async viewQuery(requestParameters: ViewQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QueryModel> {
        const response = await this.viewQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the schema for global queries, those, that are not assigned to a project.
     * View schema for global queries
     */
    async viewSchemaForGlobalQueriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/queries/schema`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve the schema for global queries, those, that are not assigned to a project.
     * View schema for global queries
     */
    async viewSchemaForGlobalQueries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.viewSchemaForGlobalQueriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve the schema for project queries.
     * View schema for project queries
     */
    async viewSchemaForProjectQueriesRaw(requestParameters: ViewSchemaForProjectQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewSchemaForProjectQueries.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/projects/{id}/queries/schema`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Retrieve the schema for project queries.
     * View schema for project queries
     */
    async viewSchemaForProjectQueries(requestParameters: ViewSchemaForProjectQueriesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.viewSchemaForProjectQueriesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
