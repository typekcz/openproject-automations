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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GridWidgetModel
 */
export interface GridWidgetModel {
    /**
     * 
     * @type {string}
     * @memberof GridWidgetModel
     */
    type: GridWidgetModelTypeEnum;
    /**
     * The grid widget's unique identifier. Can be null, if a new widget is created within a grid.
     * @type {number}
     * @memberof GridWidgetModel
     */
    id: number | null;
    /**
     * An alternative, human legible, and unique identifier.
     * @type {string}
     * @memberof GridWidgetModel
     */
    identifier: string;
    /**
     * The index of the starting row of the widget. The row is inclusive.
     * @type {number}
     * @memberof GridWidgetModel
     */
    startRow: number;
    /**
     * The index of the ending row of the widget. The row is exclusive.
     * @type {number}
     * @memberof GridWidgetModel
     */
    endRow: number;
    /**
     * The index of the starting column of the widget. The column is inclusive.
     * @type {number}
     * @memberof GridWidgetModel
     */
    startColumn: number;
    /**
     * The index of the ending column of the widget. The column is exclusive.
     * @type {number}
     * @memberof GridWidgetModel
     */
    endColumn: number;
    /**
     * 
     * @type {object}
     * @memberof GridWidgetModel
     */
    options?: object;
}


/**
 * @export
 */
export const GridWidgetModelTypeEnum = {
    GridWidget: 'GridWidget'
} as const;
export type GridWidgetModelTypeEnum = typeof GridWidgetModelTypeEnum[keyof typeof GridWidgetModelTypeEnum];


/**
 * Check if a given object implements the GridWidgetModel interface.
 */
export function instanceOfGridWidgetModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "identifier" in value;
    isInstance = isInstance && "startRow" in value;
    isInstance = isInstance && "endRow" in value;
    isInstance = isInstance && "startColumn" in value;
    isInstance = isInstance && "endColumn" in value;

    return isInstance;
}

export function GridWidgetModelFromJSON(json: any): GridWidgetModel {
    return GridWidgetModelFromJSONTyped(json, false);
}

export function GridWidgetModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GridWidgetModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['_type'],
        'id': json['id'],
        'identifier': json['identifier'],
        'startRow': json['startRow'],
        'endRow': json['endRow'],
        'startColumn': json['startColumn'],
        'endColumn': json['endColumn'],
        'options': !exists(json, 'options') ? undefined : json['options'],
    };
}

export function GridWidgetModelToJSON(value?: GridWidgetModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_type': value.type,
        'id': value.id,
        'identifier': value.identifier,
        'startRow': value.startRow,
        'endRow': value.endRow,
        'startColumn': value.startColumn,
        'endColumn': value.endColumn,
        'options': value.options,
    };
}

