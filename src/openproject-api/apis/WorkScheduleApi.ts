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
  DayCollectionModel,
  DayModel,
  ErrorResponse,
  NonWorkingDayCollectionModel,
  NonWorkingDayModel,
  WeekDayCollectionModel,
  WeekDayCollectionWriteModel,
  WeekDayModel,
  WeekDayWriteModel,
} from '../models/index';
import {
    DayCollectionModelFromJSON,
    DayCollectionModelToJSON,
    DayModelFromJSON,
    DayModelToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    NonWorkingDayCollectionModelFromJSON,
    NonWorkingDayCollectionModelToJSON,
    NonWorkingDayModelFromJSON,
    NonWorkingDayModelToJSON,
    WeekDayCollectionModelFromJSON,
    WeekDayCollectionModelToJSON,
    WeekDayCollectionWriteModelFromJSON,
    WeekDayCollectionWriteModelToJSON,
    WeekDayModelFromJSON,
    WeekDayModelToJSON,
    WeekDayWriteModelFromJSON,
    WeekDayWriteModelToJSON,
} from '../models/index';

export interface CreateNonWorkingDayRequest {
    nonWorkingDayModel?: NonWorkingDayModel;
}

export interface DeleteNonWorkingDayRequest {
    date: Date;
}

export interface ListDaysRequest {
    filters?: string;
}

export interface ListNonWorkingDaysRequest {
    filters?: string;
}

export interface UpdateNonWorkingDayRequest {
    date: Date;
    nonWorkingDayModel?: NonWorkingDayModel;
}

export interface UpdateWeekDayRequest {
    day: number;
    weekDayWriteModel?: WeekDayWriteModel;
}

export interface UpdateWeekDaysRequest {
    weekDayCollectionWriteModel?: WeekDayCollectionWriteModel;
}

export interface ViewDayRequest {
    date: Date;
}

export interface ViewNonWorkingDayRequest {
    date: Date;
}

export interface ViewWeekDayRequest {
    day: number;
}

/**
 * 
 */
export class WorkScheduleApi extends runtime.BaseAPI {

    /**
     * **(NOT IMPLEMENTED)** Marks a day as being a non-working day.  Note: creating a non-working day will not affect the start and finish dates of work packages but will affect their duration.
     * Creates a non-working day (NOT IMPLEMENTED)
     */
    async createNonWorkingDayRaw(requestParameters: CreateNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NonWorkingDayModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/non_working`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NonWorkingDayModelToJSON(requestParameters.nonWorkingDayModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NonWorkingDayModelFromJSON(jsonValue));
    }

    /**
     * **(NOT IMPLEMENTED)** Marks a day as being a non-working day.  Note: creating a non-working day will not affect the start and finish dates of work packages but will affect their duration.
     * Creates a non-working day (NOT IMPLEMENTED)
     */
    async createNonWorkingDay(requestParameters: CreateNonWorkingDayRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NonWorkingDayModel> {
        const response = await this.createNonWorkingDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * **(NOT IMPLEMENTED)** Removes the non-working day at the given date.  Note: deleting a non-working day will not affect the start and finish dates of work packages but will affect their duration.
     * Removes a non-working day (NOT IMPLEMENTED)
     */
    async deleteNonWorkingDayRaw(requestParameters: DeleteNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling deleteNonWorkingDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/non_working/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * **(NOT IMPLEMENTED)** Removes the non-working day at the given date.  Note: deleting a non-working day will not affect the start and finish dates of work packages but will affect their duration.
     * Removes a non-working day (NOT IMPLEMENTED)
     */
    async deleteNonWorkingDay(requestParameters: DeleteNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteNonWorkingDayRaw(requestParameters, initOverrides);
    }

    /**
     * Lists days information for a given date interval.  All days from the beginning of current month to the end of following month are returned by default.
     * Lists days
     */
    async listDaysRaw(requestParameters: ListDaysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DayCollectionModel>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DayCollectionModelFromJSON(jsonValue));
    }

    /**
     * Lists days information for a given date interval.  All days from the beginning of current month to the end of following month are returned by default.
     * Lists days
     */
    async listDays(requestParameters: ListDaysRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DayCollectionModel> {
        const response = await this.listDaysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all one-time non working days, such as holidays. It does not lists the non working weekdays, such as each Saturday, Sunday. For listing the weekends, the `/api/v3/days` endpoint should be used.  All days from current year are returned by default.
     * Lists all non working days
     */
    async listNonWorkingDaysRaw(requestParameters: ListNonWorkingDaysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NonWorkingDayCollectionModel>> {
        const queryParameters: any = {};

        if (requestParameters.filters !== undefined) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/non_working`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NonWorkingDayCollectionModelFromJSON(jsonValue));
    }

    /**
     * Lists all one-time non working days, such as holidays. It does not lists the non working weekdays, such as each Saturday, Sunday. For listing the weekends, the `/api/v3/days` endpoint should be used.  All days from current year are returned by default.
     * Lists all non working days
     */
    async listNonWorkingDays(requestParameters: ListNonWorkingDaysRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NonWorkingDayCollectionModel> {
        const response = await this.listNonWorkingDaysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists week days with work schedule information.
     * Lists week days
     */
    async listWeekDaysRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeekDayCollectionModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/week`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeekDayCollectionModelFromJSON(jsonValue));
    }

    /**
     * Lists week days with work schedule information.
     * Lists week days
     */
    async listWeekDays(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeekDayCollectionModel> {
        const response = await this.listWeekDaysRaw(initOverrides);
        return await response.value();
    }

    /**
     * **(NOT IMPLEMENTED)** Update the non-working day information for a given date.
     * Update a non-working day attributes (NOT IMPLEMENTED)
     */
    async updateNonWorkingDayRaw(requestParameters: UpdateNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NonWorkingDayModel>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling updateNonWorkingDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/non_working/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: NonWorkingDayModelToJSON(requestParameters.nonWorkingDayModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NonWorkingDayModelFromJSON(jsonValue));
    }

    /**
     * **(NOT IMPLEMENTED)** Update the non-working day information for a given date.
     * Update a non-working day attributes (NOT IMPLEMENTED)
     */
    async updateNonWorkingDay(requestParameters: UpdateNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NonWorkingDayModel> {
        const response = await this.updateNonWorkingDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * **(NOT IMPLEMENTED)** Makes a week day a working or non-working day.  Note: changing a week day working attribute will not affect the start and finish dates of work packages but will affect their duration attribute.
     * Update a week day attributes (NOT IMPLEMENTED)
     */
    async updateWeekDayRaw(requestParameters: UpdateWeekDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeekDayModel>> {
        if (requestParameters.day === null || requestParameters.day === undefined) {
            throw new runtime.RequiredError('day','Required parameter requestParameters.day was null or undefined when calling updateWeekDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/week/{day}`.replace(`{${"day"}}`, encodeURIComponent(String(requestParameters.day))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WeekDayWriteModelToJSON(requestParameters.weekDayWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeekDayModelFromJSON(jsonValue));
    }

    /**
     * **(NOT IMPLEMENTED)** Makes a week day a working or non-working day.  Note: changing a week day working attribute will not affect the start and finish dates of work packages but will affect their duration attribute.
     * Update a week day attributes (NOT IMPLEMENTED)
     */
    async updateWeekDay(requestParameters: UpdateWeekDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeekDayModel> {
        const response = await this.updateWeekDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * **(NOT IMPLEMENTED)** Update multiple week days with work schedule information.
     * Update week days (NOT IMPLEMENTED)
     */
    async updateWeekDaysRaw(requestParameters: UpdateWeekDaysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeekDayCollectionModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/week`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: WeekDayCollectionWriteModelToJSON(requestParameters.weekDayCollectionWriteModel),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeekDayCollectionModelFromJSON(jsonValue));
    }

    /**
     * **(NOT IMPLEMENTED)** Update multiple week days with work schedule information.
     * Update week days (NOT IMPLEMENTED)
     */
    async updateWeekDays(requestParameters: UpdateWeekDaysRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeekDayCollectionModel> {
        const response = await this.updateWeekDaysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * View the day information for a given date.
     * View day
     */
    async viewDayRaw(requestParameters: ViewDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DayModel>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling viewDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DayModelFromJSON(jsonValue));
    }

    /**
     * View the day information for a given date.
     * View day
     */
    async viewDay(requestParameters: ViewDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DayModel> {
        const response = await this.viewDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the non-working day information for a given date.
     * View a non-working day
     */
    async viewNonWorkingDayRaw(requestParameters: ViewNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NonWorkingDayModel>> {
        if (requestParameters.date === null || requestParameters.date === undefined) {
            throw new runtime.RequiredError('date','Required parameter requestParameters.date was null or undefined when calling viewNonWorkingDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/non_working/{date}`.replace(`{${"date"}}`, encodeURIComponent(String(requestParameters.date))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NonWorkingDayModelFromJSON(jsonValue));
    }

    /**
     * Returns the non-working day information for a given date.
     * View a non-working day
     */
    async viewNonWorkingDay(requestParameters: ViewNonWorkingDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NonWorkingDayModel> {
        const response = await this.viewNonWorkingDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * View a week day and its attributes.
     * View a week day
     */
    async viewWeekDayRaw(requestParameters: ViewWeekDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WeekDayModel>> {
        if (requestParameters.day === null || requestParameters.day === undefined) {
            throw new runtime.RequiredError('day','Required parameter requestParameters.day was null or undefined when calling viewWeekDay.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/v3/days/week/{day}`.replace(`{${"day"}}`, encodeURIComponent(String(requestParameters.day))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WeekDayModelFromJSON(jsonValue));
    }

    /**
     * View a week day and its attributes.
     * View a week day
     */
    async viewWeekDay(requestParameters: ViewWeekDayRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WeekDayModel> {
        const response = await this.viewWeekDayRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
