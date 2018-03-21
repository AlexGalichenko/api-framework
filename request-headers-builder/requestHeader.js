'use strict';

/**
 * Builder for creation request header object.
 */
class RequestHeaders {

    setAccept(value) {
        this['Accept'] = value;
    }

    setAcceptEncoding(value) {
        this['Accept-Encoding'] = value;
    }

    setAcceptLanguage(value) {
        this['Accept-Language'] = value;
    }

    setContentLength(value) {
        this['Content-Length'] = value;
    }

    setContentType(value) {
        this['Content-Type'] = value;
    }

    setCookie(value) {
        this['Cookie'] = value;
    }

    setOrigin(value) {
        this['Origin'] = value;
    }

    setReferer(value) {
        this['Referer'] = value;
    }

    setUserAgent(value) {
        this['User-Agent'] = value;
    }

    setAcceptCharset(value) {
        this['Accept-Charset'] = value;
    }

    setAuthorization(value) {
        this['Authorization'] = value;
    }

    setExpect(value) {
        this['Expect'] = value;
    }

    setHost(value) {
        this['Host'] = value;
    }

    setRange(value) {
        this['Range'] = value;
    }

    setContentDisposition(value) {
        this['Content-Disposition'] = value;
    }
}

module.exports = RequestHeaders;