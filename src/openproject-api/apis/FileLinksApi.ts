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
  FileLinkCollectionReadModel,
  FileLinkCollectionWriteModel,
  FileLinkReadModel,
  OAuthClientCredentialsWriteModel,
  ProjectStorageCollectionModel,
  ProjectStorageModel,
  StorageCollectionModel,
  StorageFileUploadLinkModel,
  StorageFileUploadPreparationModel,
  StorageFilesModel,
  StorageReadModel,
  StorageWriteModel,
} from '../models/index';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    FileLinkCollectionReadModelFromJSON,
    FileLinkCollectionReadModelToJSON,
    FileLinkCollectionWriteModelFromJSON,
    FileLinkCollectionWriteModelToJSON,
    FileLinkReadModelFromJSON,
    FileLinkReadModelToJSON,
    OAuthClientCredentialsWriteModelFromJSON,
    OAuthClientCredentialsWriteModelToJSON,
    ProjectStorageCollectionModelFromJSON,
    ProjectStorageCollectionModelToJSON,
    ProjectStorageModelFromJSON,
    ProjectStorageModelToJSON,
    StorageCollectionModelFromJSON,
    StorageCollectionModelToJSON,
    StorageFileUploadLinkModelFromJSON,
    StorageFileUploadLinkModelToJSON,
    StorageFileUploadPreparationModelFromJSON,
    StorageFileUploadPreparationModelToJSON,
    StorageFilesModelFromJSON,
    StorageFilesModelToJSON,
    StorageReadModelFromJSON,
    StorageReadModelToJSON,
    StorageWriteModelFromJSON,
    StorageWriteModelToJSON,
} from '../models/index';

export interface CreateStorageRequest {
    storageWriteModel?: StorageWriteModel;
}

export interface CreateStorageOauthCredentialsRequest {
    id: number;
    oAuthClientCredentialsWriteModel?: OAuthClientCredentialsWriteModel;
}

export interface CreateWorkPackageFileLinkRequest {
    id: number;
    fileLinkCollectionWriteModel?: FileLinkCollectionWriteModel;
}

export interface DeleteFileLinkRequest {
    id: number;
}

export interface DeleteStorageRequest {
    id: number;
}

export interface DownloadFileLinkRequest {
    id: number;
}

export interface GetProjectStorageRequest {
    id: number;
}

export interface GetStorageRequest {
    id: number;
}

export interface GetStorageFilesRequest {
    id: number;
    parent?: string;
}

export interface ListProjectStoragesRequest {
    filters?: string;
}

export interface ListWorkPackageFileLinksRequest {
    id: number;
    filters?: string;
}

export interface OpenFileLinkRequest {
    id: number;
    location?: boolean;
}

export interface OpenProjectStorageRequest {
    id: number;
}

export interface OpenStorageRequest {
    id: number;
}

export interface PrepareStorageFileUploadRequest {
    id: number;
    storageFileUploadPreparationModel?: StorageFileUploadPreparationModel;
}

export interface UpdateStorageRequest {
    id: number;
    storageWriteModel?: StorageWriteModel;
}

export interface ViewFileLinkRequest {
    id: number;
}

/**
 * 
 */
export class FileLinksApi extends runtime.BaseAPI {

    /**
     * Creates a storage resource. When creating a storage, a confidential OAuth 2 provider application is created automatically. The oauth client id and secret of the created OAuth application are returned in the response.  **IMPORTANT:** This is the only time, the oauth client secret is visible to the consumer. After that, the secret is hidden.  To update the storage with OAuth client credentials, which enable the storage resource to behave as an OAuth 2 client against an external OAuth 2 provider application, another request must be made to create those, see `POST /api/v3/storages/{id}/oauth_client_credentials`.
     * Creates a storage.
     */
    async createStorageRaw(requestParameters: CreateStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageReadModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StorageWriteModelToJSON(requestParameters.storageWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageReadModelFromJSON(jsonValue));
    }

    /**
     * Creates a storage resource. When creating a storage, a confidential OAuth 2 provider application is created automatically. The oauth client id and secret of the created OAuth application are returned in the response.  **IMPORTANT:** This is the only time, the oauth client secret is visible to the consumer. After that, the secret is hidden.  To update the storage with OAuth client credentials, which enable the storage resource to behave as an OAuth 2 client against an external OAuth 2 provider application, another request must be made to create those, see `POST /api/v3/storages/{id}/oauth_client_credentials`.
     * Creates a storage.
     */
    async createStorage(requestParameters: CreateStorageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageReadModel> {
        const response = await this.createStorageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Inserts the OAuth 2 credentials into the storage, to allow the storage to act as an OAuth 2 client. Calling this endpoint on a storage that already contains OAuth 2 client credentials will replace them.
     * Creates an oauth client credentials object for a storage.
     */
    async createStorageOauthCredentialsRaw(requestParameters: CreateStorageOauthCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling createStorageOauthCredentials.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}/oauth_client_credentials`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OAuthClientCredentialsWriteModelToJSON(requestParameters.oAuthClientCredentialsWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageReadModelFromJSON(jsonValue));
    }

    /**
     * Inserts the OAuth 2 credentials into the storage, to allow the storage to act as an OAuth 2 client. Calling this endpoint on a storage that already contains OAuth 2 client credentials will replace them.
     * Creates an oauth client credentials object for a storage.
     */
    async createStorageOauthCredentials(requestParameters: CreateStorageOauthCredentialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageReadModel> {
        const response = await this.createStorageOauthCredentialsRaw(requestParameters, initOverrides);
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
     * Removes a file link on a work package.  The request contains only the file link identifier as a path parameter. No request body is needed.
     * Removes a file link.
     */
    async deleteFileLinkRaw(requestParameters: DeleteFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteFileLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/file_links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Removes a file link on a work package.  The request contains only the file link identifier as a path parameter. No request body is needed.
     * Removes a file link.
     */
    async deleteFileLink(requestParameters: DeleteFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteFileLinkRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes a storage resource. This also deletes all related records, like the created oauth application, client, and any file links created within this storage.
     * Delete a storage
     */
    async deleteStorageRaw(requestParameters: DeleteStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a storage resource. This also deletes all related records, like the created oauth application, client, and any file links created within this storage.
     * Delete a storage
     */
    async deleteStorage(requestParameters: DeleteStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteStorageRaw(requestParameters, initOverrides);
    }

    /**
     * Creates a uri to download the origin file linked by the given file link. This uri depends on the storage type and is always located on the origin storage itself.
     * Creates a download uri of the linked file.
     */
    async downloadFileLinkRaw(requestParameters: DownloadFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling downloadFileLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/file_links/{id}/download`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a uri to download the origin file linked by the given file link. This uri depends on the storage type and is always located on the origin storage itself.
     * Creates a download uri of the linked file.
     */
    async downloadFileLink(requestParameters: DownloadFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.downloadFileLinkRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a project storage resource. This resource contains all data that is applicable on the relation between a storage and a project.
     * Gets a project storage
     */
    async getProjectStorageRaw(requestParameters: GetProjectStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectStorageModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getProjectStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/project_storages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectStorageModelFromJSON(jsonValue));
    }

    /**
     * Gets a project storage resource. This resource contains all data that is applicable on the relation between a storage and a project.
     * Gets a project storage
     */
    async getProjectStorage(requestParameters: GetProjectStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectStorageModel> {
        const response = await this.getProjectStorageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a storage resource. As a side effect, a live connection to the storages origin is established to retrieve connection state data.
     * Get a storage
     */
    async getStorageRaw(requestParameters: GetStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageReadModelFromJSON(jsonValue));
    }

    /**
     * Gets a storage resource. As a side effect, a live connection to the storages origin is established to retrieve connection state data.
     * Get a storage
     */
    async getStorage(requestParameters: GetStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageReadModel> {
        const response = await this.getStorageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of files from a storage.  If no `parent` context is given, the result is the content of the document root. With `parent` context given, the result contains the collections of files/directories from within the given parent file id.  If given `parent` context is no directory, `400 Bad Request` is returned.
     * Gets files of a storage.
     */
    async getStorageFilesRaw(requestParameters: GetStorageFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageFilesModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getStorageFiles.');
        }

        const queryParameters: any = {};

        if (requestParameters.parent !== undefined) {
            queryParameters['parent'] = requestParameters.parent;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}/files`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageFilesModelFromJSON(jsonValue));
    }

    /**
     * Gets a collection of files from a storage.  If no `parent` context is given, the result is the content of the document root. With `parent` context given, the result contains the collections of files/directories from within the given parent file id.  If given `parent` context is no directory, `400 Bad Request` is returned.
     * Gets files of a storage.
     */
    async getStorageFiles(requestParameters: GetStorageFilesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageFilesModel> {
        const response = await this.getStorageFilesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a collection of all project storages that meet the provided filters and the user has permission to see them.
     * Gets a list of project storages
     */
    async listProjectStoragesRaw(requestParameters: ListProjectStoragesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectStorageCollectionModel>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/project_storages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectStorageCollectionModelFromJSON(jsonValue));
    }

    /**
     * Gets a collection of all project storages that meet the provided filters and the user has permission to see them.
     * Gets a list of project storages
     */
    async listProjectStorages(requestParameters: ListProjectStoragesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectStorageCollectionModel> {
        const response = await this.listProjectStoragesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns a collection of storages.
     * Get Storages
     */
    async listStoragesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageCollectionModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageCollectionModelFromJSON(jsonValue));
    }

    /**
     * Returns a collection of storages.
     * Get Storages
     */
    async listStorages(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageCollectionModel> {
        const response = await this.listStoragesRaw(initOverrides);
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
     * Creates a uri to open the origin file linked by the given file link. This uri depends on the storage type and is always located on the origin storage itself.
     * Creates an opening uri of the linked file.
     */
    async openFileLinkRaw(requestParameters: OpenFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling openFileLink.');
        }

        const queryParameters: any = {};

        if (requestParameters.location !== undefined) {
            queryParameters['location'] = requestParameters.location;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/file_links/{id}/open`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates a uri to open the origin file linked by the given file link. This uri depends on the storage type and is always located on the origin storage itself.
     * Creates an opening uri of the linked file.
     */
    async openFileLink(requestParameters: OpenFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.openFileLinkRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a redirect to the location of the project storage\'s remote origin. If the project storage has a project folder, it is opened at this location. If not, the storage root is opened.
     * Open the project storage
     */
    async openProjectStorageRaw(requestParameters: OpenProjectStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling openProjectStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/project_storages/{id}/open`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Gets a redirect to the location of the project storage\'s remote origin. If the project storage has a project folder, it is opened at this location. If not, the storage root is opened.
     * Open the project storage
     */
    async openProjectStorage(requestParameters: OpenProjectStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.openProjectStorageRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a redirect to the location of the storage\'s remote origin. The storage\'s files root should be the target location.
     * Open the storage
     */
    async openStorageRaw(requestParameters: OpenStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling openStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}/open`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Gets a redirect to the location of the storage\'s remote origin. The storage\'s files root should be the target location.
     * Open the storage
     */
    async openStorage(requestParameters: OpenStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.openStorageRaw(requestParameters, initOverrides);
    }

    /**
     * Executes a request that prepares a link for a direct upload to the storage.  The background here is, that the client needs to make a direct request to the storage instance for file uploading, but should not get access to the credentials, which are stored in the backend. The response contains a link object, that enables the client to execute a file upload without the real credentials.
     * Preparation of a direct upload of a file to the given storage.
     */
    async prepareStorageFileUploadRaw(requestParameters: PrepareStorageFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageFileUploadLinkModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling prepareStorageFileUpload.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}/files/prepare_upload`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StorageFileUploadPreparationModelToJSON(requestParameters.storageFileUploadPreparationModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageFileUploadLinkModelFromJSON(jsonValue));
    }

    /**
     * Executes a request that prepares a link for a direct upload to the storage.  The background here is, that the client needs to make a direct request to the storage instance for file uploading, but should not get access to the credentials, which are stored in the backend. The response contains a link object, that enables the client to execute a file upload without the real credentials.
     * Preparation of a direct upload of a file to the given storage.
     */
    async prepareStorageFileUpload(requestParameters: PrepareStorageFileUploadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageFileUploadLinkModel> {
        const response = await this.prepareStorageFileUploadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updates a storage resource. Only data that is not generated by the server can be updated. This excludes the OAuth 2 application data.
     * Update a storage
     */
    async updateStorageRaw(requestParameters: UpdateStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateStorage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/storages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: StorageWriteModelToJSON(requestParameters.storageWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageReadModelFromJSON(jsonValue));
    }

    /**
     * Updates a storage resource. Only data that is not generated by the server can be updated. This excludes the OAuth 2 application data.
     * Update a storage
     */
    async updateStorage(requestParameters: UpdateStorageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageReadModel> {
        const response = await this.updateStorageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets a single file link resource of a work package.
     * Gets a file link.
     */
    async viewFileLinkRaw(requestParameters: ViewFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FileLinkReadModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling viewFileLink.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/file_links/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FileLinkReadModelFromJSON(jsonValue));
    }

    /**
     * Gets a single file link resource of a work package.
     * Gets a file link.
     */
    async viewFileLink(requestParameters: ViewFileLinkRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FileLinkReadModel> {
        const response = await this.viewFileLinkRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
