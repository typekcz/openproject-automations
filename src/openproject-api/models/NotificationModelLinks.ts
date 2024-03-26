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
import type { NotificationModelLinksActivity } from './NotificationModelLinksActivity';
import {
    NotificationModelLinksActivityFromJSON,
    NotificationModelLinksActivityFromJSONTyped,
    NotificationModelLinksActivityToJSON,
} from './NotificationModelLinksActivity';
import type { NotificationModelLinksActor } from './NotificationModelLinksActor';
import {
    NotificationModelLinksActorFromJSON,
    NotificationModelLinksActorFromJSONTyped,
    NotificationModelLinksActorToJSON,
} from './NotificationModelLinksActor';
import type { NotificationModelLinksDetailsInner } from './NotificationModelLinksDetailsInner';
import {
    NotificationModelLinksDetailsInnerFromJSON,
    NotificationModelLinksDetailsInnerFromJSONTyped,
    NotificationModelLinksDetailsInnerToJSON,
} from './NotificationModelLinksDetailsInner';
import type { NotificationModelLinksProject } from './NotificationModelLinksProject';
import {
    NotificationModelLinksProjectFromJSON,
    NotificationModelLinksProjectFromJSONTyped,
    NotificationModelLinksProjectToJSON,
} from './NotificationModelLinksProject';
import type { NotificationModelLinksReadIAN } from './NotificationModelLinksReadIAN';
import {
    NotificationModelLinksReadIANFromJSON,
    NotificationModelLinksReadIANFromJSONTyped,
    NotificationModelLinksReadIANToJSON,
} from './NotificationModelLinksReadIAN';
import type { NotificationModelLinksResource } from './NotificationModelLinksResource';
import {
    NotificationModelLinksResourceFromJSON,
    NotificationModelLinksResourceFromJSONTyped,
    NotificationModelLinksResourceToJSON,
} from './NotificationModelLinksResource';
import type { NotificationModelLinksSelf } from './NotificationModelLinksSelf';
import {
    NotificationModelLinksSelfFromJSON,
    NotificationModelLinksSelfFromJSONTyped,
    NotificationModelLinksSelfToJSON,
} from './NotificationModelLinksSelf';
import type { NotificationModelLinksUnreadIAN } from './NotificationModelLinksUnreadIAN';
import {
    NotificationModelLinksUnreadIANFromJSON,
    NotificationModelLinksUnreadIANFromJSONTyped,
    NotificationModelLinksUnreadIANToJSON,
} from './NotificationModelLinksUnreadIAN';

/**
 * 
 * @export
 * @interface NotificationModelLinks
 */
export interface NotificationModelLinks {
    /**
     * 
     * @type {NotificationModelLinksSelf}
     * @memberof NotificationModelLinks
     */
    self: NotificationModelLinksSelf;
    /**
     * 
     * @type {NotificationModelLinksReadIAN}
     * @memberof NotificationModelLinks
     */
    readIAN?: NotificationModelLinksReadIAN;
    /**
     * 
     * @type {NotificationModelLinksUnreadIAN}
     * @memberof NotificationModelLinks
     */
    unreadIAN?: NotificationModelLinksUnreadIAN;
    /**
     * 
     * @type {NotificationModelLinksProject}
     * @memberof NotificationModelLinks
     */
    project: NotificationModelLinksProject;
    /**
     * 
     * @type {NotificationModelLinksActor}
     * @memberof NotificationModelLinks
     */
    actor: NotificationModelLinksActor;
    /**
     * 
     * @type {NotificationModelLinksResource}
     * @memberof NotificationModelLinks
     */
    resource: NotificationModelLinksResource;
    /**
     * 
     * @type {NotificationModelLinksActivity}
     * @memberof NotificationModelLinks
     */
    activity: NotificationModelLinksActivity;
    /**
     * 
     * @type {Array<NotificationModelLinksDetailsInner>}
     * @memberof NotificationModelLinks
     */
    details: Array<NotificationModelLinksDetailsInner>;
}

/**
 * Check if a given object implements the NotificationModelLinks interface.
 */
export function instanceOfNotificationModelLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "self" in value;
    isInstance = isInstance && "project" in value;
    isInstance = isInstance && "actor" in value;
    isInstance = isInstance && "resource" in value;
    isInstance = isInstance && "activity" in value;
    isInstance = isInstance && "details" in value;

    return isInstance;
}

export function NotificationModelLinksFromJSON(json: any): NotificationModelLinks {
    return NotificationModelLinksFromJSONTyped(json, false);
}

export function NotificationModelLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationModelLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'self': NotificationModelLinksSelfFromJSON(json['self']),
        'readIAN': !exists(json, 'readIAN') ? undefined : NotificationModelLinksReadIANFromJSON(json['readIAN']),
        'unreadIAN': !exists(json, 'unreadIAN') ? undefined : NotificationModelLinksUnreadIANFromJSON(json['unreadIAN']),
        'project': NotificationModelLinksProjectFromJSON(json['project']),
        'actor': NotificationModelLinksActorFromJSON(json['actor']),
        'resource': NotificationModelLinksResourceFromJSON(json['resource']),
        'activity': NotificationModelLinksActivityFromJSON(json['activity']),
        'details': ((json['details'] as Array<any>).map(NotificationModelLinksDetailsInnerFromJSON)),
    };
}

export function NotificationModelLinksToJSON(value?: NotificationModelLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'self': NotificationModelLinksSelfToJSON(value.self),
        'readIAN': NotificationModelLinksReadIANToJSON(value.readIAN),
        'unreadIAN': NotificationModelLinksUnreadIANToJSON(value.unreadIAN),
        'project': NotificationModelLinksProjectToJSON(value.project),
        'actor': NotificationModelLinksActorToJSON(value.actor),
        'resource': NotificationModelLinksResourceToJSON(value.resource),
        'activity': NotificationModelLinksActivityToJSON(value.activity),
        'details': ((value.details as Array<any>).map(NotificationModelLinksDetailsInnerToJSON)),
    };
}

