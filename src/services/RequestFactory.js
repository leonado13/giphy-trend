import axios from 'axios';

const cancelListener = {};

class RequestFactory {
  static send(request, data = {}, headers = {}) {
    const {takeLatest, instance, ...requestOptions} = request;

    cancelListener[requestOptions.url] = cancelListener[requestOptions.url] || {};

    // Cancel request before if we have
    if (takeLatest && cancelListener[requestOptions.url]) {
      cancelListener[requestOptions.url].cancel();
    }

    // Update request source
    cancelListener[requestOptions.url] = axios.CancelToken.source();
    requestOptions.cancelToken = cancelListener[requestOptions.url].token;

    // Use params if it's get method
    if (requestOptions.method.toLowerCase() === 'get') {
      requestOptions.params = {
        ...(requestOptions.params || {}),
        ...data
      };
    } else {
      requestOptions.data = {
        ...(requestOptions.data || {}),
        ...data
      };
    }

    // Modify headers
    requestOptions.headers = {
      ...(requestOptions.headers || {}),
      ...headers
    };

    if (instance) {
      return instance(requestOptions);
    } else {
      return axios(requestOptions);
    }
  }
}

export default RequestFactory;
