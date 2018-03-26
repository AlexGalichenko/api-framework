'use strict';

/**
 * Builder for creation request params object.
 */
class RequestParamsBuilder {

    _addHeader(){
        this.headers = {};
        return this;
    }

    _addPostData(){
        this.postData = {};
        return this;
    }

    _addBody(){
        this.body = {};
        return this;
    }

    _addAuth(){
        this.auth = {};
        return this;
    }

    addMethod(method = 'GET'){
        this.method = method;
        return this;
    }

    setHeadersValue(key, value) {
        if (!this.headers) {
            this._addHeader();
        }

        this.headers[key] = value;
        return this;
    }

    setPostDataValue(key, value) {
        if (!this.postData) {
            this._addPostData();
        }

        this.postData[key] = value;
        return this;
    }

    setBodyValue(key, value) {
        if (!this.body) {
            this._addBody();
        }

        this.body[key] = value;
        return this;
    }

    setAuthValue(key, value) {
        if (!this.auth) {
            this._addAuth();
        }

        this.auth[key] = value;
        return this;
    }

    deleteProperty(...keys) {
        if (keys.length > 1){
           keys.forEach(value => {
               delete this.value;
           })
        } else {
            delete this[keys[0]];
        }
        return this;
    }

}

module.exports = RequestParamsBuilder;