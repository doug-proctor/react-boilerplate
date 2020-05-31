import { Cookies } from 'react-cookie';
import config from 'utils/config';

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  if (options && options.method === 'post') {
    // or put, patch, delete etc
    if (getToken() === undefined) {
      if (config.api.sessionUrl) {
        await request(config.api.sessionUrl);
      }
    }
  }

  const globalOptions = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-XSRF-TOKEN': getToken(),
    },
  };

  const mergedOptions = Object.assign({}, options, globalOptions);

  const fetchResponse = await fetch(url, mergedOptions);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}

function getToken() {
  const cookies = new Cookies();
  const token = cookies.get('XSRF-TOKEN');
  // if (token !== undefined) {
  //   token.replace('%3D%3D', '==');
  // }
  return token;
}
