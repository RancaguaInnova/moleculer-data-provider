import {
  GET_LIST,
  GET_MANY_REFERENCE,
  CREATE,
  DELETE_MANY,
} from "ra-core"

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The data request params, depending on the type
 * @returns {Object} Data response
 */
const convertHTTPResponse = (response, type, resource, params) => {
  console.log("RESPONSE:", response)
  const { headers, json } = response
  switch (type) {
  case GET_LIST:
  case GET_MANY_REFERENCE:
    if (!headers.has("content-range")) {
      throw new Error(
        "The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?"
      )
    }
    return {
      data: json,
      total: parseInt(
        headers
          .get("content-range")
          .split("/")
          .pop(),
        10
      ),
    }
  case CREATE:
    return { data: { ...params.data, id: json.id } }
  case DELETE_MANY: {
    return { data: json || [] }
  }
  default:
    return { data: json }
  }
}

export default convertHTTPResponse
