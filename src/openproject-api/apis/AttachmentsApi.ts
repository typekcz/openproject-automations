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
  AttachmentModel,
  AttachmentsModel,
  ErrorResponse,
} from '../models/index';
import {
    AttachmentModelFromJSON,
    AttachmentModelToJSON,
    AttachmentsModelFromJSON,
    AttachmentsModelToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models/index';

export interface AddAttachmentToPostRequest {
    id: number;
}

export interface AddAttachmentToWikiPageRequest {
    id: number;
}

export interface CreateWorkPackageAttachmentRequest {
    id: number;
}

export interface DeleteAttachmentRequest {
    id: number;
}

export interface ListAttachmentsByPostRequest {
    id: number;
}

export interface ListAttachmentsByWikiPageRequest {
    id: number;
}

export interface ListWorkPackageAttachmentsRequest {
    id: number;
}

export interface ViewAttachmentRequest {
    id: number;
}

/**
 * 
 */
export class AttachmentsApi extends runtime.BaseAPI {

    /**
     * Adds an attachment with the post as it\'s container.
     * Add attachment to post
     */
    async addAttachmentToPostRaw(requestParameters: AddAttachmentToPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addAttachmentToPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/posts/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds an attachment with the post as it\'s container.
     * Add attachment to post
     */
    async addAttachmentToPost(requestParameters: AddAttachmentToPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addAttachmentToPostRaw(requestParameters, initOverrides);
    }

    /**
     * Adds an attachment with the wiki page as it\'s container.
     * Add attachment to wiki page
     */
    async addAttachmentToWikiPageRaw(requestParameters: AddAttachmentToWikiPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling addAttachmentToWikiPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/wiki_pages/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Adds an attachment with the wiki page as it\'s container.
     * Add attachment to wiki page
     */
    async addAttachmentToWikiPage(requestParameters: AddAttachmentToWikiPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.addAttachmentToWikiPageRaw(requestParameters, initOverrides);
    }

    /**
     * Clients can create attachments without a container first and attach them later on. This is useful if the container does not exist at the time the attachment is uploaded. After the upload, the client can then claim such containerless attachments for any resource eligible (e.g. WorkPackage) on subsequent requests. The upload and the claiming *must* be done for the same user account. Attachments uploaded by another user cannot be claimed and once claimed for a resource, they cannot be claimed by another.  The upload request must be of type `multipart/form-data` with exactly two parts.  The first part *must* be called `metadata`. Its content type is expected to be `application/json`, the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.  The second part *must* be called `file`, its content type *should* match the mime type of the file. The body *must* be the raw content of the file. Note that a `filename` *must* be indicated in the `Content-Disposition` of this part, although it will be ignored. Instead the `fileName` inside the JSON of the metadata part will be used.
     * Create Attachment
     */
    async createAttachmentRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentModelFromJSON(jsonValue));
    }

    /**
     * Clients can create attachments without a container first and attach them later on. This is useful if the container does not exist at the time the attachment is uploaded. After the upload, the client can then claim such containerless attachments for any resource eligible (e.g. WorkPackage) on subsequent requests. The upload and the claiming *must* be done for the same user account. Attachments uploaded by another user cannot be claimed and once claimed for a resource, they cannot be claimed by another.  The upload request must be of type `multipart/form-data` with exactly two parts.  The first part *must* be called `metadata`. Its content type is expected to be `application/json`, the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.  The second part *must* be called `file`, its content type *should* match the mime type of the file. The body *must* be the raw content of the file. Note that a `filename` *must* be indicated in the `Content-Disposition` of this part, although it will be ignored. Instead the `fileName` inside the JSON of the metadata part will be used.
     * Create Attachment
     */
    async createAttachment(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentModel> {
        const response = await this.createAttachmentRaw(initOverrides);
        return await response.value();
    }

    /**
     * To add an attachment to a work package, a client needs to issue a request of type `multipart/form-data` with exactly two parts.  The first part *must* be called `metadata`. Its content type is expected to be `application/json`, the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.  The second part *must* be called `file`, its content type *should* match the mime type of the file. The body *must* be the raw content of the file. Note that a `filename` must be indicated in the `Content-Disposition` of this part, however it will be ignored. Instead the `fileName` inside the JSON of the metadata part will be used.
     * Create work package attachment
     */
    async createWorkPackageAttachmentRaw(requestParameters: CreateWorkPackageAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createWorkPackageAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentModelFromJSON(jsonValue));
    }

    /**
     * To add an attachment to a work package, a client needs to issue a request of type `multipart/form-data` with exactly two parts.  The first part *must* be called `metadata`. Its content type is expected to be `application/json`, the body *must* be a single JSON object, containing at least the `fileName` and optionally the attachments `description`.  The second part *must* be called `file`, its content type *should* match the mime type of the file. The body *must* be the raw content of the file. Note that a `filename` must be indicated in the `Content-Disposition` of this part, however it will be ignored. Instead the `fileName` inside the JSON of the metadata part will be used.
     * Create work package attachment
     */
    async createWorkPackageAttachment(requestParameters: CreateWorkPackageAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentModel> {
        const response = await this.createWorkPackageAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Permanently deletes the specified attachment.
     * Delete attachment
     */
    async deleteAttachmentRaw(requestParameters: DeleteAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Permanently deletes the specified attachment.
     * Delete attachment
     */
    async deleteAttachment(requestParameters: DeleteAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteAttachmentRaw(requestParameters, initOverrides);
    }

    /**
     * 
     * List attachments by post
     */
    async listAttachmentsByPostRaw(requestParameters: ListAttachmentsByPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentsModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentsByPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/posts/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentsModelFromJSON(jsonValue));
    }

    /**
     * 
     * List attachments by post
     */
    async listAttachmentsByPost(requestParameters: ListAttachmentsByPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentsModel> {
        const response = await this.listAttachmentsByPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * List attachments by wiki page
     */
    async listAttachmentsByWikiPageRaw(requestParameters: ListAttachmentsByWikiPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentsModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listAttachmentsByWikiPage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/wiki_pages/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentsModelFromJSON(jsonValue));
    }

    /**
     * 
     * List attachments by wiki page
     */
    async listAttachmentsByWikiPage(requestParameters: ListAttachmentsByWikiPageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentsModel> {
        const response = await this.listAttachmentsByWikiPageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * List attachments by work package
     */
    async listWorkPackageAttachmentsRaw(requestParameters: ListWorkPackageAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentsModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling listWorkPackageAttachments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/work_packages/{id}/attachments`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentsModelFromJSON(jsonValue));
    }

    /**
     * 
     * List attachments by work package
     */
    async listWorkPackageAttachments(requestParameters: ListWorkPackageAttachmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentsModel> {
        const response = await this.listWorkPackageAttachmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 
     * View attachment
     */
    async viewAttachmentRaw(requestParameters: ViewAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttachmentModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewAttachment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/attachments/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentModelFromJSON(jsonValue));
    }

    /**
     * 
     * View attachment
     */
    async viewAttachment(requestParameters: ViewAttachmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttachmentModel> {
        const response = await this.viewAttachmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
