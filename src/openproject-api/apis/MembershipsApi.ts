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
  MembershipCollectionModel,
  MembershipFormModel,
  MembershipReadModel,
  MembershipSchemaModel,
  MembershipWriteModel,
  ProjectCollectionModel,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    MembershipCollectionModelFromJSON,
    MembershipCollectionModelToJSON,
    MembershipFormModelFromJSON,
    MembershipFormModelToJSON,
    MembershipReadModelFromJSON,
    MembershipReadModelToJSON,
    MembershipSchemaModelFromJSON,
    MembershipSchemaModelToJSON,
    MembershipWriteModelFromJSON,
    MembershipWriteModelToJSON,
    ProjectCollectionModelFromJSON,
    ProjectCollectionModelToJSON,
} from '../models/index';

export interface CreateMembershipRequest {
    membershipWriteModel?: MembershipWriteModel;
}

export interface DeleteMembershipRequest {
    id: number;
}

export interface FormCreateMembershipRequest {
    membershipWriteModel?: MembershipWriteModel;
}

export interface FormUpdateMembershipRequest {
    id: number;
    membershipWriteModel?: MembershipWriteModel;
}

export interface GetMembershipRequest {
    id: number;
}

export interface ListMembershipsRequest {
    filters?: string;
    sortBy?: string;
}

export interface UpdateMembershipRequest {
    id: number;
    membershipWriteModel?: MembershipWriteModel;
}

/**
 * 
 */
export class MembershipsApi extends runtime.BaseAPI {

    /**
     * Creates a new membership applying the attributes provided in the body.  You can use the form and schema to retrieve the valid attribute values and by that be guided towards successful creation.  By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized message to the user of the newly created membership. In case of a group, the message will be sent to every user belonging to the group.  By including `{ \"sendNotifications\": false }` within the `_meta` block of the payload, no notifications is send out at all.
     * Create a membership
     */
    async createMembershipRaw(requestParameters: CreateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipReadModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MembershipWriteModelToJSON(requestParameters.membershipWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipReadModelFromJSON(jsonValue));
    }

    /**
     * Creates a new membership applying the attributes provided in the body.  You can use the form and schema to retrieve the valid attribute values and by that be guided towards successful creation.  By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized message to the user of the newly created membership. In case of a group, the message will be sent to every user belonging to the group.  By including `{ \"sendNotifications\": false }` within the `_meta` block of the payload, no notifications is send out at all.
     * Create a membership
     */
    async createMembership(requestParameters: CreateMembershipRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipReadModel> {
        const response = await this.createMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the membership.
     * Delete membership
     */
    async deleteMembershipRaw(requestParameters: DeleteMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteMembership.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes the membership.
     * Delete membership
     */
    async deleteMembership(requestParameters: DeleteMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteMembershipRaw(requestParameters, initOverrides);
    }

    /**
     * Requests and validates the creation form for memberships. The request payload, if sent, is validated. The form endpoint itself does not create a membership.
     * Form create membership
     */
    async formCreateMembershipRaw(requestParameters: FormCreateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipFormModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/form`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MembershipWriteModelToJSON(requestParameters.membershipWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipFormModelFromJSON(jsonValue));
    }

    /**
     * Requests and validates the creation form for memberships. The request payload, if sent, is validated. The form endpoint itself does not create a membership.
     * Form create membership
     */
    async formCreateMembership(requestParameters: FormCreateMembershipRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipFormModel> {
        const response = await this.formCreateMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Requests and validates the update form for a membership identified by the given id. The request payload, if sent, is validated. The form endpoint itself does not change the membership.
     * Form update membership
     */
    async formUpdateMembershipRaw(requestParameters: FormUpdateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling formUpdateMembership.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/{id}/form`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MembershipWriteModelToJSON(requestParameters.membershipWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipReadModelFromJSON(jsonValue));
    }

    /**
     * Requests and validates the update form for a membership identified by the given id. The request payload, if sent, is validated. The form endpoint itself does not change the membership.
     * Form update membership
     */
    async formUpdateMembership(requestParameters: FormUpdateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipReadModel> {
        const response = await this.formUpdateMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves a membership resource identified by the given id.
     * Get a membership
     */
    async getMembershipRaw(requestParameters: GetMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getMembership.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipReadModelFromJSON(jsonValue));
    }

    /**
     * Retrieves a membership resource identified by the given id.
     * Get a membership
     */
    async getMembership(requestParameters: GetMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipReadModel> {
        const response = await this.getMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the schema for the membership resource object.
     * Schema membership
     */
    async getMembershipSchemaRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipSchemaModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/schema`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipSchemaModelFromJSON(jsonValue));
    }

    /**
     * Retrieves the schema for the membership resource object.
     * Schema membership
     */
    async getMembershipSchema(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipSchemaModel> {
        const response = await this.getMembershipSchemaRaw(initOverrides);
        return await response.value();
    }

    /**
     * Gets a list of projects in which a membership can be created in. The list contains all projects in which the user issuing the request has the manage members permissions.
     * Available projects for memberships
     */
    async getMembershipsAvailableProjectsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectCollectionModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/available_projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectCollectionModelFromJSON(jsonValue));
    }

    /**
     * Gets a list of projects in which a membership can be created in. The list contains all projects in which the user issuing the request has the manage members permissions.
     * Available projects for memberships
     */
    async getMembershipsAvailableProjects(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectCollectionModel> {
        const response = await this.getMembershipsAvailableProjectsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns a collection of memberships. The client can choose to filter the memberships similar to how work packages are filtered. In addition to the provided filters, the server will reduce the result set to only contain memberships, for which the requesting client has sufficient permissions (*view_members*, *manage_members*).
     * List memberships
     */
    async listMembershipsRaw(requestParameters: ListMembershipsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipCollectionModel>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sortBy'] = requestParameters.sortBy;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipCollectionModelFromJSON(jsonValue));
    }

    /**
     * Returns a collection of memberships. The client can choose to filter the memberships similar to how work packages are filtered. In addition to the provided filters, the server will reduce the result set to only contain memberships, for which the requesting client has sufficient permissions (*view_members*, *manage_members*).
     * List memberships
     */
    async listMemberships(requestParameters: ListMembershipsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipCollectionModel> {
        const response = await this.listMembershipsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates the given membership by applying the attributes provided in the body.  By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized message to the user of the updated membership. In case of a group, the message will be sent to every user belonging to the group.  By including `{ \"sendNotifications\": false }` within the `_meta` block of the payload, no notifications is send out at all.
     * Update membership
     */
    async updateMembershipRaw(requestParameters: UpdateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MembershipReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateMembership.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/memberships/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: MembershipWriteModelToJSON(requestParameters.membershipWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MembershipReadModelFromJSON(jsonValue));
    }

    /**
     * Updates the given membership by applying the attributes provided in the body.  By providing a `notificationMessage` within the `_meta` block of the payload, the client can include a customized message to the user of the updated membership. In case of a group, the message will be sent to every user belonging to the group.  By including `{ \"sendNotifications\": false }` within the `_meta` block of the payload, no notifications is send out at all.
     * Update membership
     */
    async updateMembership(requestParameters: UpdateMembershipRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MembershipReadModel> {
        const response = await this.updateMembershipRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
