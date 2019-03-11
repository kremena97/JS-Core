function validateRequest(obj) {
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!methods.includes(obj.method || !obj.hasOwnProperty('method'))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = /^(\d*\w*\.*)*$/;
    if (uriRegex.test(obj.uri) === false || obj.uri === '' || !obj.hasOwnProperty('uri')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!versions.includes(obj.version) || !obj.hasOwnProperty('version')) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&'"]*$/;
    if (messageRegex.test(obj.message) === false || !obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
