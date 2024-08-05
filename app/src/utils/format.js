/**
 * Parses an error object to extract a meaningful error message.
 *
 * @param {Object} error - The error object to parse.
 * @returns {string} - The parsed error message.
 */
export function parseError(error) {
  if (error.response && error.response.data && error.response.data.message) {
    // Server responded with a status other than 200 range
    return error.response.data.message;
  } else if (error.request) {
    // Request was made but no response was received
    return 'No response received from the server. Please check your network connection.';
  } else if (error.message) {
    // Something else happened while setting up the request
    return error.message;
  }
  return 'An unknown error occurred';
}
