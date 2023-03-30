"use strict";
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 4862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ Global)
/* harmony export */ });
/* unused harmony exports EHost, EHostFront */
// TODO aqui hay definiciones que no deberian estar
var EHost;
(function(EHost) {
    EHost["develop"] = "http://localhost:8082";
    EHost["deploy"] = "https://empezarainvertir.com/api";
})(EHost || (EHost = {}));
var EHostFront;
(function(EHostFront) {
    EHostFront["develop"] = "http://localhost:3000";
    EHostFront["deploy"] = "https://empezarainvertir.com";
})(EHostFront || (EHostFront = {}));
class Global {
    static host = EHost.deploy;
    static hostFront = EHostFront.deploy;
}


/***/ }),

/***/ 3444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BasicStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);

class BasicStore {
    static basicHeaders = this.constructHeaders();
    static init(username, password, authType, contentType, dataType) {
        this.username = username;
        this.password = password;
        this.authType = authType || "basic";
        this.contentType = contentType || "application/json";
        this.dataType = dataType || "json";
    }
    static onChangeUser(basicUser) {
        this.username = basicUser.username;
        this.password = basicUser.password;
    }
    static getUsername() {
        return this.username;
    }
    static async baseFetch(url, method, body, customErrorText) {
        const request = this.constructRequest(method, body);
        // In fetch any result back from the server (404, 500, etc...) is considered a successful request from the promise point of view.
        return fetch(url, request).then((response)=>{
            if (!response.ok) {
                if (response.status === 404 && url.includes(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host)) return {};
                throw response;
            }
            return response.json();
        }).catch((error)=>{
            // HTTPPetitionErrorHandler.handleHTTPError(error, customErrorText);
            console.error("BASIC STORE FAIL::FETCH_API::" + error.status.toString() + error.statusText); // poner cadena del status
            throw error; //  the error so consumer can still catch it
        });
    }
    static async baseFetchXML(url, method, body, customErrorText) {
        const request = this.constructRequest(method, body);
        // In fetch any result back from the server (404, 500, etc...) is considered a successful request from the promise point of view.
        return fetch(url, request).then((response)=>response.text()).then((xmlString)=>{
            const parser = new DOMParser();
            const xml = parser.parseFromString(xmlString, "application/xml");
            return xml;
        }).catch((error)=>{
            // HTTPPetitionErrorHandler.handleHTTPError(error, customErrorText);
            console.error("BASIC STORE FAIL::FETCH_API::" + error.status.toString() + error.statusText); // poner cadena del status
            throw error; //  the error so consumer can still catch it
        });
    }
    static async baseFetchHTML(url, method, body, customErrorText) {
        const request = this.constructRequest(method, body);
        // In fetch any result back from the server (404, 500, etc...) is considered a successful request from the promise point of view.
        return fetch(url, request).then((response)=>{
            if (!response.ok) {
                if (response.status === 404 && url.includes(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host)) return {};
                throw response;
            }
            return response.text();
        }).catch((error)=>{
            // HTTPPetitionErrorHandler.handleHTTPError(error, customErrorText);
            console.error("BASIC STORE FAIL::FETCH_API::" + error.status.toString() + error.statusText); // poner cadena del status
            throw error; //  the error so consumer can still catch it
        });
    }
    static constructRequest(method, body, headers) {
        return {
            body: body || null,
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: headers || BasicStore.basicHeaders,
            method,
            // mode: 'cors', // no-cors, *cors, same-origin
            // redirect: 'follow', // manual, *follow, error
            referrerPolicy: "no-referrer"
        };
    }
    static constructHeaders() {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        // this.setAuthHeaders(headers);
        return headers;
    }
    static setAuthHeaders(headers) {
        // TODO: Hacer que esto solo se establezca para todas las llamadas a partir del flag de capabilities del servicio de management:
        // jcalvo --> Lo dejo porque no se exactamente ahora donde tendria que injectarlo para que afecte a todas las llamadas
        switch(this.authType){
            case "sso":
                headers.append("sso", "Cookie");
                break;
            case "logon_old":
                headers.append("Type", "Logon");
                headers.append("Login", this.username);
                headers.append("Pass", this.password);
                break;
            case "x-fims":
                headers.append("X-FIMS-UserName", this.username);
                headers.append("X-FIMS-Password", this.password);
                break;
            default:
                headers.append("Authorization", this.makeAuth());
                break;
        }
    }
    static makeAuth() {
        /* const isBasic: boolean = (this.authType === "basic");
		const auth: (username: string, password: string) => string = isBasic ? vsn.UI.Util.make_base_auth : vsn.UI.Util.make_base_auth_logon;
		return auth(this.username, this.password); */ return "";
    }
    static getPetition(url, customErrorText) {
        return this.baseFetch(url, "GET", "", customErrorText); // Quiza poner el body como ""
    }
    static postPetition(url, body, customErrorText) {
        return this.baseFetch(url, "POST", body, customErrorText);
    }
    static deletePetition(url, customErrorText) {
        return this.baseFetch(url, "DELETE", "", customErrorText);
    }
    static putPetition(url, body, customErrorText) {
        return this.baseFetch(url, "PUT", body, customErrorText);
    }
    static patchPetition(url, body, customErrorText) {
        return this.baseFetch(url, "PATCH", body, customErrorText);
    }
}
class HTTPPetitionErrorHandler {
    static init() {}
    static async handleHTTPError(error, customErrorText) {
        console.error("BASIC STORE FAIL::FETCH_API::" + error.status.toString() + error.statusText); // poner cadena del status
        this.checkSpecialCases(error.status);
        if (customErrorText === "void") return;
        // 1 si trae mensaje de error custom, mostramos este mensaje
        // if (customErrorText)  return vsn.UI.Util.showAlert("Error", customErrorText);
        // 2 sino lo trae, intentamos encontrar el mensaje de servicio
        const coolErrorMessage = await this.getCoolErrorMessageFromServer(error);
    // if (coolErrorMessage) return vsn.UI.Util.showAlert("Error", customErrorText);
    // 3 en caso de que servicio no envie nada, mostramos un error preparado
    // return vsn.UI.Util.showAlert("Error", this.getErrorMsgFromHTTPCode(error.status));
    }
    static checkSpecialCases(status) {
        if (status === HttpStatusCodes.UNAUTHORIZED) {
        // SSO : Comprobamos si la cookie existe y si se ha modificado o eliminado
        // if (localStorage.getItem("vsnAspNetAppCookieSSO") && (localStorage.getItem("vsnAspNetAppCookieSSO") === "LOGOUT") && window.eventManager) {
        // this.eventManager.trigger(vsn.Explorer.Events.SSOSessionExpired); // Lanzamos el evento de re-login
        // }
        }
    }
    static getErrorMsgFromHTTPCode(status) {
        // tambien podemos definir un mapa, no me pegues porfa jfuenteh o tambien podemos hacer algo que busque por nombre del HttpStatusCodes que viene,
        // pero entonces tendriamos que hacer algo para asegurarnos de que ambas interfaces tienen los mismos nombres,
        // quiza por mini clases (ocupara mas en memoria pero habra menos calculos)
        switch(status){
            case HttpStatusCodes.NOT_FOUND:
                return this.i18n.NOT_FOUND; // "not found";
            case HttpStatusCodes.UNAUTHORIZED:
                return this.i18n.UNAUTHORIZED; // return "not authorized";
            default:
                return this.i18n.BASE_ERROR; // return "Server error";
        }
    }
    static async getCoolErrorMessageFromServer(error) {
        try {
            const errorServerMsgJSON = await error.text();
            const errorServerMsg = JSON.parse(errorServerMsgJSON);
            return errorServerMsg && errorServerMsg.Msg ? errorServerMsg.Msg : "";
        } catch  {
            return ""; //  === Promise.Reject("")
        }
    }
}
class StoreTestExtends extends (/* unused pure expression or super */ null && (BasicStore)) {
    static getAssetById(id) {
        return this.getPetition("MAM/" + "assets/" + id.toString());
    }
}
var HttpStatusCodes;
(function(HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server has received the request headers and the client should proceed to send the request body
	 * (in the case of a request for which a body needs to be sent; for example, a POST request).
	 * Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient.
	 * To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request
	 * and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.
	 */ "CONTINUE"] = 100] = "CONTINUE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The requester has asked the server to switch protocols and the server has agreed to do so.
	 */ "SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatusCodes[HttpStatusCodes[/**
	 * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request.
	 * This code indicates that the server has received and is processing the request, but no response is available yet.
	 * This prevents the client from timing out and assuming the request was lost.
	 */ "PROCESSING"] = 102] = "PROCESSING";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Standard response for successful HTTP requests.
	 * The actual response will depend on the request method used.
	 * In a GET request, the response will contain an entity corresponding to the requested resource.
	 * In a POST request, the response will contain an entity describing or containing the result of the action.
	 */ "OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request has been fulfilled, resulting in the creation of a new resource.
	 */ "CREATED"] = 201] = "CREATED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request has been accepted for processing, but the processing has not been completed.
	 * The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
	 */ "ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * SINCE HTTP/1.1
	 * The server is a transforming proxy that received a 200 OK from its origin,
	 * but is returning a modified version of the origin's response.
	 */ "NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server successfully processed the request and is not returning any content.
	 */ "NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server successfully processed the request, but is not returning any content.
	 * Unlike a 204 response, this response requires that the requester reset the document view.
	 */ "RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
	 * The range header is used by HTTP clients to enable resuming of interrupted downloads,
	 * or split a download into multiple simultaneous streams.
	 */ "PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The message body that follows is an XML message and can contain a number of separate response codes,
	 * depending on how many sub-requests were made.
	 */ "MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response,
	 * and are not being included again.
	 */ "ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server has fulfilled a request for the resource,
	 * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
	 */ "IM_USED"] = 226] = "IM_USED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).
	 * For example, this code could be used to present multiple video format options,
	 * to list files with different filename extensions, or to suggest word-sense disambiguation.
	 */ "MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpStatusCodes[HttpStatusCodes[/**
	 * This and all future requests should be directed to the given URI.
	 */ "MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * This is an example of industry practice contradicting the standard.
	 * The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
	 * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
	 * with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
	 * to distinguish between the two behaviours. However, some Web applications and frameworks
	 * use the 302 status code as if it were the 303.
	 */ "FOUND"] = 302] = "FOUND";
    HttpStatusCodes[HttpStatusCodes[/**
	 * SINCE HTTP/1.1
	 * The response to the request can be found under another URI using a GET method.
	 * When received in response to a POST (or PUT/DELETE), the client should presume that
	 * the server has received the data and should issue a redirect with a separate GET message.
	 */ "SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
	 * In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
	 */ "NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * SINCE HTTP/1.1
	 * The requested resource is available only through a proxy, the address for which is provided in the response.
	 * Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.
	 */ "USE_PROXY"] = 305] = "USE_PROXY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * No longer used. Originally meant "Subsequent requests should use the specified proxy."
	 */ "SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * SINCE HTTP/1.1
	 * In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
	 * In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request.
	 * For example, a POST request should be repeated using another POST request.
	 */ "TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request and all future requests should be repeated using another URI.
	 * 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
	 * So, for example, submitting a form to a permanently redirected resource may continue smoothly.
	 */ "PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server cannot or will not process the request due to an apparent client error
	 * (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
	 */ "BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
	 * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
	 * requested resource. See Basic access authentication and Digest access authentication. 401 semantically means
	 * "unauthenticated",i.e. the user does not have the necessary credentials.
	 */ "UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Reserved for future use. The original intention was that this code might be used as part of some form of digital
	 * cash or micro payment scheme, but that has not happened, and this code is not usually used.
	 * Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.
	 */ "PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request was valid, but the server is refusing action.
	 * The user might not have the necessary permissions for a resource.
	 */ "FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The requested resource could not be found but may be available in the future.
	 * Subsequent requests by the client are permissible.
	 */ "NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes[/**
	 * A request method is not supported for the requested resource;
	 * for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
	 */ "METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
	 */ "NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The client must first authenticate itself with the proxy.
	 */ "PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server timed out waiting for the request.
	 * According to HTTP specifications:
	 * "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."
	 */ "REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Indicates that the request could not be processed because of conflict in the request,
	 * such as an edit conflict between multiple simultaneous updates.
	 */ "CONFLICT"] = 409] = "CONFLICT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Indicates that the resource requested is no longer available and will not be available again.
	 * This should be used when a resource has been intentionally removed and the resource should be purged.
	 * Upon receiving a 410 status code, the client should not request the resource in the future.
	 * Clients such as search engines should remove the resource from their indices.
	 * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
	 */ "GONE"] = 410] = "GONE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request did not specify the length of its content, which is required by the requested resource.
	 */ "LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server does not meet one of the preconditions that the requester put on the request.
	 */ "PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
	 */ "PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request,
	 * in which case it should be converted to a POST request.
	 * Called "Request-URI Too Long" previously.
	 */ "URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request entity has a media type which the server or resource does not support.
	 * For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
	 */ "UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
	 * For example, if the client asked for a part of the file that lies beyond the end of the file.
	 * Called "Requested Range Not Satisfiable" previously.
	 */ "RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server cannot meet the requirements of the Expect request-header field.
	 */ "EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
	 * and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by
	 * teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
	 */ "I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request was directed at a server that is not able to produce a response (for example because a connection reuse).
	 */ "MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request was well-formed but was unable to be followed due to semantic errors.
	 */ "UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The resource that is being accessed is locked.
	 */ "LOCKED"] = 423] = "LOCKED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The request failed due to failure of a previous request (e.g., a PROPPATCH).
	 */ "FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
	 */ "UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The origin server requires the request to be conditional.
	 * Intended to prevent "the 'lost update' problem, where a client
	 * GETs a resource's state, modifies it, and PUTs it back to the server,
	 * when meanwhile a third party has modified the state on the server, leading to a conflict."
	 */ "PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
	 */ "TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server is unwilling to process the request because either an individual header field,
	 * or all the header fields collectively, are too large.
	 */ "REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * A server operator has received a legal demand to deny access to a resource or to a set of resources
	 * that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.
	 */ "UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpStatusCodes[HttpStatusCodes[/**
	 * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
	 */ "INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server either does not recognize the request method, or it lacks the ability to fulfill the request.
	 * Usually this implies future availability (e.g., a new feature of a web-service API).
	 */ "NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
	 */ "BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server is currently unavailable (because it is overloaded or down for maintenance).
	 * Generally, this is a temporary state.
	 */ "SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
	 */ "GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server does not support the HTTP protocol version used in the request
	 */ "HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Transparent content negotiation for the request results in a circular reference.
	 */ "VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server is unable to store the representation needed to complete the request.
	 */ "INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The server detected an infinite loop while processing the request.
	 */ "LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * Further extensions to the request are required for the server to fulfill it.
	 */ "NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpStatusCodes[HttpStatusCodes[/**
	 * The client needs to authenticate to gain network access.
	 * Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used
	 * to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
	 */ "NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpStatusCodes || (HttpStatusCodes = {}));


/***/ }),

/***/ 5553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStore)
/* harmony export */ });
/* harmony import */ var _definitions_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4862);
/* harmony import */ var _BasicStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3444);


class GlobalStore {
    static async getHeader() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/header");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getFooter() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/footer");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getLanding() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/landing");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getLandingCriptomonedas() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/landing-criptomonedas");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getLandingExchanges() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/landing-exchanges");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getLandingAboutUs() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/landing-about-us");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getCryptoTemplate() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/crypto-template");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
    static async getSitemap() {
        let url = new URL(_definitions_global__WEBPACK_IMPORTED_MODULE_0__/* ["default"].host */ .ZP.host + "/sitemap");
        const urlString = url.toString();
        return _BasicStore__WEBPACK_IMPORTED_MODULE_1__/* ["default"].baseFetch */ .Z.baseFetch(urlString, "GET", "");
    }
}


/***/ })

};
;