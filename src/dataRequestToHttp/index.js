import { GET_LIST, GET_ONE, GET_MANY, GET_MANY_REFERENCE, CREATE, UPDATE, DELETE } from "ra-core"

import getList from "./getList"
import getOne from "./getOne"
import getMany from "./getMany"
import getManyReference from "./getManyReference"
import update from "./update"
import create from "./create"
import deleteRequest from "./delete"

/**
 * @param {string} type One of the constants appearing at the top of this file, e.g. 'UPDATE'
 * @param {string} resource Name of the resource to fetch, e.g. 'posts'
 * @param {object} params The data request params, depending on the type
 * @returns {object} { url, options } The HTTP request parameters
 */
const convertDataRequestToHTTP = (apiUrl, type, resource, params) => {
  let httpRequest = {
    url: "",
    options: {}
  }
  switch (type) {
    case GET_LIST: {
      httpRequest.url = getList(params, apiUrl, resource)
      break
    }
    case GET_ONE:
      httpRequest.url = getOne(params, apiUrl, resource)
      break
    case GET_MANY: {
      httpRequest.url = getMany(params, apiUrl, resource)
      break
    }
    case GET_MANY_REFERENCE: {
      httpRequest.url = getManyReference(params, apiUrl, resource)
      break
    }
    case UPDATE:
      httpRequest = update(params, apiUrl, resource)
      break
    case CREATE:
      httpRequest = create(params, apiUrl, resource)
      break
    case DELETE:
      httpRequest = deleteRequest(params, apiUrl, resource)
      break
    default:
      throw new Error(`Unsupported fetch action type ${type}`)
  }
  return httpRequest
}

export default convertDataRequestToHTTP
