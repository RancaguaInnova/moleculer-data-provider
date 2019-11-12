import { GET_LIST, GET_MANY_REFERENCE, CREATE, DELETE_MANY } from "ra-core"

/**
 * @param {Object} response HTTP response from fetch()
 * @param {String} type One of the constants appearing at the top if this file, e.g. 'UPDATE'
 * @param {String} resource Name of the resource to fetch, e.g. 'posts'
 * @param {Object} params The data request params, depending on the type
 * @returns {Object} Data response
 */
const convertHTTPResponse = (response, type, resource, params) => {
  const { headers, json } = response
  switch (type) {
    case GET_LIST:
    case GET_MANY_REFERENCE:
      return {
        data: json,
        total: json.length
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
