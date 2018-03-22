'use strict';

/**
 * Builder for creation request params object.
 */
class RequestParamsBuilder {

    addHeader(){
        this.headers = {};
        return this;
    }

    addPostData(){
        this.postData = {};
        return this;
    }

    addBody(){
        this.body = {};
        return this;
    }

    addAuth(){
        this.auth = {};
        return this;
    }

    addMethod(method = 'GET'){
        this.method = method;
        return this;
    }

    setHeadersValue(key, value) {
        this.headers[key] = value;
        return this;
    }

    setPostDataValue(key, value) {
        this.postData[key] = value;
        return this;
    }

    setBodyValue(key, value) {
        this.body[key] = value;
        return this;
    }

    setAuthValue(key, value) {
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