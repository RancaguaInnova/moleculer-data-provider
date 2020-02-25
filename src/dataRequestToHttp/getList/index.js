import { stringify } from "query-string"
import transformSort from "../../helpers/transformSort"

const getList = (params, apiUrl, resource) => {
  const { page, perPage } = params.pagination
  const { field, order } = params.sort
  const { search } = params.filter

  const request = {
    sort: transformSort(field, order),
    pageSize: JSON.stringify(perPage),
    page: JSON.stringify(page)
  }

  let query = Object.assign({}, params.filter)

  if (search) {
    delete query.search
    request.search = search
  }

  request.query = JSON.stringify(query)
  return `${apiUrl}/${resource}?${stringify(request)}`
}

export default getList
